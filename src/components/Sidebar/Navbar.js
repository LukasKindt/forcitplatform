import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavigateData, SettingsData, ForesightData, InsightData, OversightData, HindsightData, CoreData } from './SidebarData.js';
import './Navbar.css';

function Navbar() {

  const getSidebarPages = (component, page) => {
    switch(component){
      case "core":
        return(
          CoreData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
                </Link>
              </li>
            );
          }));
      case "foresight":
        return(
          ForesightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));
      case "insight":
        return(
        InsightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));
      case "oversight":
        return(
        OversightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));
      case "hindsight":
        return(
        HindsightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
               <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));

      default:
    }
  }

  let { component, page } = useParams();
  return (
    <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            <section>
            <section class="sidebarTop"> 
              <img src="../assets/logoSmall.png" alt="Forcit" className='logoSmall'/>
              <p class="nav-id">{component}</p>
            </section>


            <section class="nav-pages">
              {getSidebarPages(component, page)}
            </section>

            <section class="nav-navigate">
              <h2>NAVIGATE</h2>
            {NavigateData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  
                  <Link to={item.path}>
                    {item.icon}
                    <span className={item.title.toLowerCase().replace(/\s/g, '-') === component.toLowerCase() ? ("activated"):null}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </section>


            </section>
            <section>
            <section class="nav-settings">
              <h2>SETTINGS</h2>
              {SettingsData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() && component == "settings" ? ("activated"):null}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </section>
            </section>
          </ul>
        </nav>
  );
}

export default Navbar;