import React from 'react';

const VideoListItem = ({video}) => {

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-right">
                    <img src={video.snippet.thumbnails.default.url} className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>                    
                    {video.snippet.description}
                </div>
            </div>
        </li>
    );
};

export default VideoListItem