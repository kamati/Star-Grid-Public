import React from 'react';
import {Layout,Navigation,Content,Drawer,Header} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main  from './Components/main';
import Dashboard from './Components/Dashboard'
import { Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
<div className="demo-big-content">

  
    <Layout>
        <Header title="Star GridX" scroll>
            <Navigation>
            <Link to= "/home">Home </Link>
            <Link to="/gridTopology">Grid Topology</Link>
            <Link to="/alarms">Alarms</Link>
            <Link to="/addMeter">New Meter</Link>
            <Link to="/systemSetting">System Settings</Link>
            </Navigation>
        </Header>
        <Drawer style = {{height: '190px'}}>
            <Navigation >
              <Link to= "/home">Map View </Link>
              <Link to="/addMeter">Grid View</Link>
            </Navigation>
        </Drawer>
        <Content shadow={15}  style={{ margin: '12px',marginBottom:"30px"}}>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}



export default App;
