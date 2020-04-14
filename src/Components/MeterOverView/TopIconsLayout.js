import React, { Component } from 'react'
import PowerNow from './PowerNow';
import PowerDay from './PowerDay';
import PowerMonth from './PowerMonth';
import PowerYear from './WeeklyChart';
import PowerTotal from './PowerTotal';
import Grid from '@material-ui/core/Grid';

export class TopIconsLayout extends Component {
    render() {
        return (
            <div >
                <Grid container
                     spacing={4}>
                  <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                    >
                    <PowerNow />
                    </Grid>       
                </Grid>
                
            </div>
        )
    }
}

export default TopIconsLayout
