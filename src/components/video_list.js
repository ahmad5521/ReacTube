import React from 'react' ;
import VideoListItem from "./video_list_items";

const VideoList = (props) => {
    //generate list item for each item in list usin map
    const videoItems = props.videos.map((videoItem) => {
        return (
            <VideoListItem
                selectedVideoProps={props.selectedVideoProps}
                key={videoItem.etag} 
                video={videoItem} />
        );
    }) 

    return (
        <div>
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        </div>
    );
};


export default VideoList;