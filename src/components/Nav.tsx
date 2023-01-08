import { Component } from 'solid-js';
import { NavLink } from "solid-app-router";

const Nav: Component = () => {
    return (
        <nav class="mt-3 mb-3">
            <NavLink href="/" class="btn btn-primary me-2" end activeClass="btn-success">Home</NavLink>
            <NavLink href="/romanocraft" class="btn btn-primary me-2" activeClass="btn-success"> romanocraft </NavLink>
            <NavLink href="/stocks-portfolio" class="btn btn-secondary me-2" activeClass="btn-dark"> Stock Tracker App </NavLink>
            <NavLink href="/schamazon" class="btn btn-secondary me-2" activeClass="btn-dark"> School Amazon </NavLink>
        </nav>
            
    )
}

export default Nav;