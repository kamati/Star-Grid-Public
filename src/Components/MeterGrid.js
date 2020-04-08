import React from 'react'
import { DataTable, TableHeader, Card,IconButton, CardActions,CardText,CardTitle,CardMenu,Button} from 'react-mdl';
import Grid from '@material-ui/core/Grid';
import Image from '../Data/Capture_burned.jpg'; // Import using relative path
const MeterGrid = props => (
    <div>
        {props.meters ?(  <div>
                <Grid container spacing = {15} style={styles.heroContainer}>
                    {props.meters.map((meterInfo) => {
                        return (
                           <Card shadow={1} style={{width: '312px', margin: '12px',marginBottom:"30px"}}>
                                <CardTitle style={{color: '#fff', height: '236px', background: 'url(./Capture_burned.svg)  center / cover'}}>Welcome</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        )
                    })} 
                </Grid>
        </div>):"No meters in the data"}
      

    </div>

);
const styles = {
   heroContainer: {
     height: 800,
     backgroundImage: `url(${"./Capture_burned.png'"})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     width: `calc(100vw + 48px)`,
     margin: -24,
     padding: 24,
   }
  };
export default MeterGrid;