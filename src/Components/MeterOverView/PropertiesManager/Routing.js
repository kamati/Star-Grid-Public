import React from 'react';
import { Switch,Route } from 'react-router-dom';
import DataOverview from './DataOverview';
import HistoricData from './HistoricData';
import TransactionHistory from './TransactionHistory';
import Controls from './Controls';
import Orders from './Orders';

const Routing  = () =>(
    <Switch>
        <Route  path="/HistoricData" component  ={HistoricData}/>
        <Route  path="/TransactionHistory" component={TransactionHistory} />
        <Route  path="/Controls" component={Controls} />
        <Route  path="/DataOverview" component={DataOverview} />
         <Route  path="/Orders" component={Orders} />
    </Switch>
)
export default Routing ;
