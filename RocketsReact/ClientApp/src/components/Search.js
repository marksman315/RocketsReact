import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import SearchResultList from './SearchResultList';

export class Search extends React.Component {
    displayName = Search.name

    state = {
        searchInput: '',
        performSearch: false,
        results: ''
    };

    handleSearchButtonClicked = () => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://rocketsapi.azurewebsites.net/api/Values/model/' + this.state.searchInput

        fetch(proxyUrl + targetUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data, performSearch: true });
            });

        //this.setState({            
        //    performSearch: true
        //});
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
                    <SearchResultList performSearch={this.state.performSearch} searchInput={this.state.searchInput} results={this.state.results}/>
                </div>
            </div>
        );
    }
}
