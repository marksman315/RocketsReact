import React from 'react';

class SearchResultList extends React.Component {

    render() {
        if (this.props.performSearch === true) {
            return (
                <div>
                    <h2>Results</h2>
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

export default SearchResultList;