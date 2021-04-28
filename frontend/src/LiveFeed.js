import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Post from './Post.js';
import './LiveFeed.css';

function LiveFeed({ posts }) {
    
    //Filter States
    const [lowFilter, setLowFilter] = useState(true);
    const [mediumFilter, setMediumFilter] = useState(true);
    const [highFilter, setHighFilter] = useState(true);
    const [criticalFilter, setCriticalFilter] = useState(true);
    const [fireFilter, setFireFilter] = useState(true);
    const [floodFilter, setFloodFilter] = useState(true);
    const [powerFilter, setPowerFilter] = useState(true);
    const [medicalFilter, setMedicalFilter] = useState(true);

    const isExist = (item, list) => {
        let result = list.filter(elem => elem.id == item.id);
        return !(result.length == 0);
    }

    //Filter Logic
    var toShow = [];
    posts.map(post => {
        //Low
        if (lowFilter && fireFilter) { 
            if (post.priority == 'Low' && post.problem == 'Fire') {
                toShow = [...toShow , post];
            }
        }
        if (lowFilter && floodFilter) { 
            if (post.priority == 'Low' && post.problem == 'Flood') {
                toShow = [...toShow , post];
            }
        }
        if (lowFilter && powerFilter) { 
            if (post.priority == 'Low' && post.problem == 'Power') {
                toShow = [...toShow , post];
            }
        }
        if (lowFilter && medicalFilter) { 
            if (post.priority == 'Low' && post.problem == 'Medical') {
                toShow = [...toShow , post];
            }
        }
        //Medium
        if (mediumFilter && fireFilter) { 
            if (post.priority == 'Medium' && post.problem == 'Fire') {
                toShow = [...toShow , post];
            }
        }
        if (mediumFilter && floodFilter) { 
            if (post.priority == 'Medium' && post.problem == 'Flood') {
                toShow = [...toShow , post];
            }
        }
        if (mediumFilter && powerFilter) { 
            if (post.priority == 'Medium' && post.problem == 'Power') {
                toShow = [...toShow , post];
            }
        }
        if (mediumFilter && medicalFilter) { 
            if (post.priority == 'Medium' && post.problem == 'Medical') {
                toShow = [...toShow , post];
            }
        }
        //High
        if (highFilter && fireFilter) { 
            if (post.priority == 'High' && post.problem == 'Fire') {
                toShow = [...toShow , post];
            }
        }
        if (highFilter && floodFilter) { 
            if (post.priority == 'High' && post.problem == 'Flood') {
                toShow = [...toShow , post];
            }
        }
        if (highFilter && powerFilter) { 
            if (post.priority == 'High' && post.problem == 'Power') {
                toShow = [...toShow , post];
            }
        }
        if (highFilter && medicalFilter) { 
            if (post.priority == 'High' && post.problem == 'Medical') {
                toShow = [...toShow , post];
            }
        }
        //Critical
        if (criticalFilter && fireFilter) { 
            if (post.priority == 'Critical' && post.problem == 'Fire') {
                toShow = [...toShow , post];
            }
        }
        if (criticalFilter && floodFilter) { 
            if (post.priority == 'Critical' && post.problem == 'Flood') {
                toShow = [...toShow , post];
            }
        }
        if (criticalFilter && powerFilter) { 
            if (post.priority == 'Critical' && post.problem == 'Power') {
                toShow = [...toShow , post];
            }
        }
        if (criticalFilter && medicalFilter) { 
            if (post.priority == 'Critical' && post.problem == 'Medical') {
                toShow = [...toShow , post];
            }
        }
    });
        
    return (
        <div className='live'>
            <Header path='/livefeed'/>
            <h1>Live Feed</h1>  
            <p>Results displayed: {toShow.length}</p>
            <div className="liveContainer">
                <div className="filterContainer">
                    <div className="priorityFilter">
                        <p>Priorities:</p>
                        <div>
                            <input type='checkbox' id='low' checked={lowFilter} onClick={e => setLowFilter(e.target.checked)} />
                            <label for='low'>Low</label>
                        </div>
                        <div>
                            <input type='checkbox' id='medium' checked={mediumFilter} onClick={e => setMediumFilter(e.target.checked)} />
                            <label for='medium'>Medium</label>
                        </div>
                        <div>
                            <input type='checkbox' id='high' checked={highFilter} onClick={e => setHighFilter(e.target.checked)} />
                            <label for='high'>High</label>
                        </div>
                        <div>
                            <input type='checkbox' id='critical' checked={criticalFilter} onClick={e => setCriticalFilter(e.target.checked)} />
                            <label for='critical'>Critical</label>
                        </div>
                    </div>
                    <div className="problemFilter">
                        <p>Problems:</p>
                        <div>
                            <input type='checkbox' id='fire' checked={fireFilter} onClick={e => setFireFilter(e.target.checked)} />
                            <label for='fire'>Fire</label>
                        </div>
                        <div>
                            <input type='checkbox' id='flood' checked={floodFilter} onClick={e => setFloodFilter(e.target.checked)} />
                            <label for='flood'>Flood</label>
                        </div>
                        <div>
                            <input type='checkbox' id='power' checked={powerFilter} onClick={e => setPowerFilter(e.target.checked)} />
                            <label for='power'>Power</label>
                        </div>
                        <div>
                            <input type='checkbox' id='medical' checked={medicalFilter} onClick={e => setMedicalFilter(e.target.checked)} />
                            <label for='medical'>Medical</label>
                        </div>
                    </div>
                </div>

                <div className="livePosts">
                    {toShow.reverse().map(({name,image,content,problem,priority,id}) => 
                    <Post   
                        image={image}
                        name={name}
                        content={content}
                        problem={problem}
                        priority={priority}
                        id={id}
                        key={id}
                    />
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default LiveFeed
