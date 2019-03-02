import React from 'react';

const PortfolioItem = (props) => (
    <div>
        <h1>A thing already done.</h1>
        <p>Portfolio item id is: {props.match.params.id}.</p>
    </div>
);

export default PortfolioItem;