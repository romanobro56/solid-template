import { Component } from 'solid-js';
import { NavLink } from "solid-app-router";

const Nav: Component = () => {
    return (
        <nav class="mt-5 mb-3">
            <NavLink href="/" class="btn btn-primary me-2" end activeClass="btn-success">Home</NavLink>
        </nav>
            
    )
}

export default Nav;