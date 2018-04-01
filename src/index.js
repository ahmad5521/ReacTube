import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import MyHeader from './components/header'
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyDz7LUGmJ3UTV59XPxYUIxuK5dFGfS7HpA';

const Header = () => {
    return <div><MyHeader /></div>;
}

class App extends Component {
    constructor(props) {
        super(props);
        // state List of Video
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: 'react js'}, (videos) => {
            //this.setState({ videos: videos});
            this.setState({ videos });
        });
    }
    render() {
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>

        ); 
    }
}




// ReactDOM.render(<Header />, document.querySelector('.container'));
ReactDOM.render(<App />, document.querySelector('.a'));
