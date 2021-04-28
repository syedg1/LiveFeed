import React from 'react';
import './Post.css'

function Post({ image, name, problem, priority, content }) {
    console.log(image);
    return (
        <div className='post'>
            <div className="postInfo">
                <div className="accountInfo">
                    <img src={image} alt={name} className='profilePicture'/>
                    <p>{name}</p>
                </div>
                Problem Type: {problem} <br/>
                Priority: {priority}
            </div>
            <div className="contentInfo">
                {content}
            </div>
        </div>
    )
}

export default Post
