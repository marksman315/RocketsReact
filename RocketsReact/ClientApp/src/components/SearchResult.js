﻿import React from 'react';

const SearchResult = {

    render() {
        if (this.props.performSearch === true) {
            return (
                <div>
                    <p>Changed</p>
                </div>
            );
        } else {

            return (
                <div>
                    <p>Some text</p>
                </div>
            );
        }

        
    }
}

export default SearchResult;