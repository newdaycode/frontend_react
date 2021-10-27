import React from 'react'
import {Link, NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";


const Menu = (props) => {
        const { routes, avatar} = props;

        const createLinks = (routes) => {
            return routes.map((prop, key) => {

                if (prop.layout === "/admin") {
                    return (
                        <li key={key} className="nav-item" >
                            <NavLink
                            to={prop.layout + prop.path}
                            className = "nav-link"
                            activeClassName="active"
                            >
                            <i className={prop.icon} />
                             {prop.name}
                            </NavLink>
                        </li>
                      );
                  } else {
                    return null;
                  }

            });
          };
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to={'/admin'} className="brand-link">
                    {/* <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
                    <span className="brand-text font-weight-light">Solución Optica</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={avatar.imgSrc} className="img-circle elevation-2" alt={avatar.imgAlt} style={{background: '#fff'}} />
                    </div>
                    <div className="info">
                        <a href="../perfil" className="d-block">Luz Galvis</a>
                    </div>
                    </div>

                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    
                        {createLinks(routes)}
                        
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>
            </div>
        )
    }


    Menu.defaultProps = {
        routes: [{}],
      };
      
    Menu.propTypes = {
        // links that will be displayed inside the component
        routes: PropTypes.arrayOf(PropTypes.object),
      };

export default Menu;
