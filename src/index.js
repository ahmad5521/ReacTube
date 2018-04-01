import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import MyHeader from './components/header'
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import _ from 'lodash';

const API_KEY = 'AIzaSyDz7LUGmJ3UTV59XPxYUIxuK5dFGfS7HpA';

const Header = () => {
    return <div><MyHeader /></div>;
}

class App extends Component {
    constructor(props) {
        super(props);
        // state List of Video
        this.state = { 
            videos: [] ,
            selectedVideo: null
        };
        
        this.videoSearch('modern programming technology');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ videos: videos});
            this.setStae({selectedVideo: videos[0]})
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>

        ); 
    }
}




ReactDOM.render(<Header />, document.querySelector('.container'));
<<<<<<< HEAD
ReactDOM.render(<App />, document.querySelector('.a'));
=======
ReactDOM.render(<App />, document.querySelector('.a'));
>>>>>>> 3c758f977493918bbdcad9be4ad62bf8f1f400c9
