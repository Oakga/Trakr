import React, { Component} from 'react';
export default class Header extends Component {
    render(){
        return(
            <nav>
            <div className=" indigo lighten-3 nav-wrapper">
                <a className="left brand-logo">
                    Tracker
                </a>
                <ul className="right">
                    <li>
                        <a>Login with Google</a>
                    </li>
                </ul>
            </div>
            </nav>
        );
    };
};
