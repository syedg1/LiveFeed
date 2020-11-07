import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Table from 'react-bootstrap/Table';
import './Analytics.css';

function Analytics({ posts }) {

    //Priority Lists
    const [low, setLow] = useState([]);
    const [medium, setMedium] = useState([]);
    const [high, setHigh] = useState([]);
    const [critical, setCritical] = useState([]);

    //Problem Lists
    const [fire, setFire] = useState([]);
    const [flood, setFlood] = useState([]);
    const [power, setPower] = useState([]);
    const [medical, setMedical] = useState([]);

    useEffect(() => {
        //Update Priority Lists
        let newLow = posts.filter(({priority}) => priority == 'Low');
        setLow(newLow);

        let newMedium = posts.filter(({priority}) => priority == 'Medium');
        setMedium(newMedium)

        let newHigh = posts.filter(({priority}) => priority == 'High');
        setHigh(newHigh)

        let newCritical = posts.filter(({priority}) => priority == 'Critical');
        setCritical(newCritical)

        //Update Problem Lists 
        let newFire = posts.filter(({problem}) => problem == 'Fire');
        setFire(newFire);

        let newFlood = posts.filter(({problem}) => problem == 'Flood');
        setFlood(newFlood);

        let newPower = posts.filter(({problem}) => problem == 'Power');
        setPower(newPower);

        let newMedical = posts.filter(({problem}) => problem == 'Medical');
        setMedical(newMedical);
    }, [posts])

    const intersectionCount = (list1, list2) => {
        const result = list1.filter(item1 => {
            let intersectionList = list2.filter(item2 => item2.id == item1.id)
            return !(intersectionList.length == 0)
        });
  
        return result.length;
      }  

    return (
        <div className='analytics'>
            <Header path='/analytics'/>
            <h1>Analytics</h1>  

            <div className="tableContainer">
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Fire</th>
                        <th>Flood</th>
                        <th>Power</th>
                        <th>Medical</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Low</td>
                        <td>{intersectionCount(low, fire)}</td>
                        <td>{intersectionCount(low, flood)}</td>
                        <td>{intersectionCount(low, power)}</td>
                        <td>{intersectionCount(low, medical)}</td>
                        <td>{low.length}</td>
                        </tr>
                        <tr>
                        <td>Medium</td>
                        <td>{intersectionCount(medium, fire)}</td>
                        <td>{intersectionCount(medium, flood)}</td>
                        <td>{intersectionCount(medium, power)}</td>
                        <td>{intersectionCount(medium, medical)}</td>
                        <td>{medium.length}</td>
                        </tr>
                        <tr>
                        <td>High</td>
                        <td>{intersectionCount(high, fire)}</td>
                        <td>{intersectionCount(high, flood)}</td>
                        <td>{intersectionCount(high, power)}</td>
                        <td>{intersectionCount(high, medical)}</td>
                        <td>{high.length}</td>
                        </tr>
                        <tr>
                        <td>Critical</td>
                        <td>{intersectionCount(critical, fire)}</td>
                        <td>{intersectionCount(critical, flood)}</td>
                        <td>{intersectionCount(critical, power)}</td>
                        <td>{intersectionCount(critical, medical)}</td>
                        <td>{critical.length}</td>
                        </tr>
                        <tr>
                        <td>Total</td>
                        <td>{fire.length}</td>
                        <td>{flood.length}</td>
                        <td>{power.length}</td>
                        <td>{medical.length}</td>
                        <td>{low.length + medium.length + high.length + critical.length}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Analytics
