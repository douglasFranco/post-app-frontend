import React from 'react'

const Menu = props => {    
    return (
        <nav className="navbar navbar-inverse bg-inverse">            
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i> PostApp
                </a>
            </div>
        
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#/posts">Posts</a></li>
                </ul>
            </div>            
        </nav>
    )
}

export default Menu