import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>to Dashboard</NavLink>
        <br/>
        <NavLink to="/create" activeClassName="is-active">to Create Page</NavLink>
        <br/>
        <NavLink to="/edit" activeClassName="is-active">to Edit Page</NavLink>
        <br/>
        <NavLink to="/help" activeClassName="is-active">to Help Page</NavLink>
    </header>
);

export default Header;