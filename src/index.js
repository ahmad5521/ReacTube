import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import MyHeader from './components/header'

//create new component to produce some html
const API_KEY = 'AIzaSyDz7LUGmJ3UTV59XPxYUIxuK5dFGfS7HpA';


const Body = () => {
    return <div><SearchBar /></div>;
}
 
const Header = () => {
    return <div><MyHeader /></div>;
}



//take this components generated html and put it on the page in DOM
ReactDOM.render(<Header />, document.querySelector('.container'));
ReactDOM.render(<Body />, document.querySelector('.a'));
