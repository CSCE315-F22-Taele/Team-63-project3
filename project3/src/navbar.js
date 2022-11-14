import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div class="navigation">
            <ul>
                <a href="/">Customer</a>
                <a href="/server">Server</a>
                <a href="/manager">Manager</a>
                <a href="/googlemap">Locations</a>
            </ul>
        </div>
    )
}

export default NavBar;