import React, { Component ,useState} from 'react';
import {GoogleMap,withScriptjs,withGoogleMap,Marker,InfoWindow} from "react-google-maps";
import * as parkData from "../Data/skateboard-parks.json";
import mapStyles from '../Data/mapStyles'

function Map(){
    const[selectedPark,setSelectedPark]=useState(null);
    return(
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
            defaultOptions={{
                scrollwheel: false,
                zoomControl: true,
                styles: [
                    {
                        featureType: "water",
                        stylers: [
                            { saturation: 43 },
                            { lightness: -11 },
                            { hue: "#0088ff" }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.fill",
                        stylers: [
                            { hue: "#ff0000" },
                            { saturation: -100 },
                            { lightness: 99 }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#808080" }, { lightness: 54 }]
                    },
                    {
                        featureType: "landscape.man_made",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#ece2d9" }]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#ccdca1" }]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#767676" }]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#ffffff" }]
                    },
                    { featureType: "poi", stylers: [{ visibility: "off" }] },
                    {
                        featureType: "landscape.natural",
                        elementType: "geometry.fill",
                        stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
                    },
                    { featureType: "poi.park", stylers: [{ visibility: "on" }] },
                    {
                        featureType: "poi.sports_complex",
                        stylers: [{ visibility: "on" }]
                    },
                    { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
                    {
                        featureType: "poi.business",
                        stylers: [{ visibility: "simplified" }]
                    }
                ]
            }}
        >

    {parkData.features.map((park)=>(
        <Marker
            keys={park.properties.PARK_ID}
            position={{
                lat: park.geometry.coordinates[1],
                lng: park.geometry.coordinates[0]
            }}
            onClick={()=>{
                setSelectedPark(park);  
            }}
            icon={{
                url:'./Capture_burned.svg',
                scaledSize: new window.google.maps.Size(45,45)

            }}
        />
    ))}
    {
      selectedPark && (
          <InfoWindow 
           position={{
                lat: selectedPark.geometry.coordinates[1],
                lng: selectedPark.geometry.coordinates[0]
            }}
          >
              <div>
                  <h2>
                        {selectedPark.properties.NAME}     
                  </h2>
                  <p>{selectedPark.properties.DESCRIPTIO}</p>
              </div>

          </InfoWindow>
      )  
    }
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export class home extends Component {
    render() {
        return (
            <div>
                
                <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAX7CGyLu3H3AfDxa6-YOhGInraceFUiow&callback=initMap'}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> 
            </div>
        )
    }
}

export default home
