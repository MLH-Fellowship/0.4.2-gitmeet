import React from "react";
import "./Header.css";
import { Avatar, ButtonDropdown, Spacer } from '@zeit-ui/react';
import Headroom from 'react-headroom';

export default function Header() {
  
  const url = 'https://d3kxowhw4s8amj.cloudfront.net/file/data/nutjnnbv4kwaixxp75it/PHID-FILE-xnpfexxdxsjnmkhgani7/profile';//test profilepic

  return (
    <Headroom>
      <nav className="navbar">
        <div className="container">
      
          <div className="navbar-header">
            <a href="#">
              <h4>Git<span>Meet</span></h4>
            </a>    
          </div>
      
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <ButtonDropdown size="medium" type="secondary">
                <ButtonDropdown.Item main>Projects</ButtonDropdown.Item>
                <ButtonDropdown.Item>My Projects</ButtonDropdown.Item>
                <ButtonDropdown.Item>Add Projects</ButtonDropdown.Item>
              </ButtonDropdown>
              <Spacer x={1} />
                <Avatar size="medium" src={url}/>
            </ul>
          </div>
        </div>
      </nav>
    </Headroom>
  )}
  
