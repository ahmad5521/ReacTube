import React, {Component} from 'react';



class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
        
    }


    render() {
        return <div>
            <input onChange={(event) => console.log(event.target.value)} /><button>ابحث هنا</button>
        </div>;
    }

}


export default SearchBar;