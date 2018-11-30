import React from 'react';

class SearchResultList extends React.Component {

    render() {
        if (this.props.performSearch === true) {
            return (
                <div>
                    <h2>Results</h2>
                    {this.props.results.result.map((result) => (
                        <div>
                            <span>id: {result.id}</span><br />
                            <span>location: {result.location}</span><br />
                            <span>model: {result.model}</span><br />
                            <span>stages: {result.stages}</span><br />
                            <span>type: {result.type}</span><br />
                            <br />
                        </div>
                    ))}
                    <br />
                    <p>Hooray!!!</p>
                </div>
            );
        } else {

            return (
                <div>
                    <p>Do a search, go ahead do it!</p>
                </div>
            );
        }


    }
}

export default SearchResultList;