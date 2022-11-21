import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav class="navigation">
            <a href="/"><img src="/cfa-logo.png" width="50" height="50"></img></a>
            <div class="more-header">
                <a href="/customer">Customer</a>
                <a href="/server">Server</a>
                <a href="/manager">Manager</a>
                <a href="/googlemap">Locations</a>
            </div>
        </nav>
    )
}

export default NavBar;