import React, { Component } from 'react';

import Form from './Form';
import MeterGrid from './MeterGrid';

export class addMeter extends Component {
state = {
           meterData: []
        }

    getRecipe = async (e) => {
        
        const recipeName = e.target.elements.recipeName.value;
        var meterRequest ={"firstName":recipeName, "lastName":"Doe76"}
        const request = new Request(`https://cors-anywhere.herokuapp.com/https://stargridx.net/getMeters.php`, 
        {method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(meterRequest)});
        e.preventDefault();
        const api_call = await fetch(request);
        const data = await api_call.json();
        this.setState({meterData: data.Server_respone});
        console.log(JSON.stringify(meterRequest));
        
    }
    render() {
        return (
            <div>
                <Form getRecipe={this.getRecipe}/>
                <MeterGrid meters={this.state.meterData}/>
            
            </div>
            

        )
    }
}

export default addMeter
