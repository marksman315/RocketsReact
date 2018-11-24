import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';

export class Search extends React.Component {
    displayName = Search.name

    state = {
        searchInput: '',
        performSearch: false
    };

    handleSearchButtonClicked = () => {
        //alert('You clicked me!');

        this.setState({            
            performSearch: true
        });
    }

    updateInputValue(evt) {
        this.setState({
            searchInput: evt.target.value,
            performSearch: false
        });
    }    

    render() {
        return (
            <div>
                <h1>Search</h1>
                <div>
                    <input type='text' value={this.state.searchInput} onChange={evt => this.updateInputValue(evt)}></input>&nbsp;&nbsp;
                    <button onClick={this.handleSearchButtonClicked}>Search</button>
                    <br />
                    <SearchResult performSearch={this.state.performSearch} searchInput={this.state.searchInput}/>
                </div>
            </div>
        );
    }
}
