import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <button><Link to = "/">Customer</Link></button>
            <button><Link to = "/server">Server</Link></button>
            <button><Link to = "/manager">Manager</Link></button>
            <button><Link to = "/googlemap">Locations</Link></button>
        </ul>
    )
}

export default NavBar;