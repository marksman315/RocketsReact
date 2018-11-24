import React from 'react';

class SearchResult extends React.Component {

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