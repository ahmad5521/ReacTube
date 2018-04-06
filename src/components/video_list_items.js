import React from 'react';

const VideoListItem = (props) => {
const URL = props.video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => props.selectedVideoProps(props.video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={URL} className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {props.video.snippet.title}
                    </div>                     
                    {props.video.snippet.description}
                </div>
            </div>
        </li>
    );
};``

export default VideoListItem