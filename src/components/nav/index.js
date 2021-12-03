import React from 'react';
import "../../css/styles.css";
import {Link} from "react-router-dom";
function Nav() {
    return (
        <div className = "navSec">
            <nav>
                <ul>
                    <Link to = "/">
                        <li >
                            <a >
                                <i className = "fa fa-home icon" ></i>
                            </a>
                        </li>
                    </Link>
                    <Link to = "/Pets">
                        <li >
                            <a>
                                <i className = "fa fa-paw"></i>
                            </a>
                        </li>
                    </Link>
                    <Link to = "/Dates">
                        <li >
                            <a>
                                <i className = "fa fa-calendar" ></i>
                            </a>
                        </li>
                    </Link>
                    <Link  to = "/Owners" >
                        <li>
                            <a >
                                <i className = "fa fa-user" ></i>
                            </a>
                        </li>
                    </Link>
                </ul>
            </nav>
           
        </div>
    )
}

export default Nav

/*

<Link>
                        <li>
                            <a href ="/plus" >
                                <i classNameName = "fa fa-plus" classNameName = "icon" ></i>
                            </a>
                        </li>
                    </Link>
                    <Link>
                        <li>
                            <a href ="/logOut" >
                                <i classNameName = "fa fa-sign-out" ></i>
                            </a>
                        </li>
                    </Link>
*/
