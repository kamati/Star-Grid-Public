import React from 'react';
import { Switch,Route } from 'react-router-dom';
import home from './home';
import addMeter from './addMeter';
import systemSetting from './systemSetting';
import alarms from './alarms';
import gridTopology from './gridTopology';
import MeterProps from './MeterOverView/MeterProps'


const Main  = () =>(
    <Switch>
        <Route  path="/home" component  ={home}/>
        <Route  path="/gridTopology" component={gridTopology} />
        <Route  path="/systemSetting" component={systemSetting} />
        <Route  path="/addMeter" component={addMeter} />
        <Route  path="/alarms" component={alarms} />
        <Route path = "/MeterProps/:id" component ={MeterProps}/>
    </Switch>
)
export default Main ;