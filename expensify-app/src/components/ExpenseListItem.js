// Export a stateless functional component
// description, amount, createtAt
import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount}, createdAt: {createdAt}</p>
    </div>
);

export default ExpenseListItem;