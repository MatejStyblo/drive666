import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Component } from 'react'
import styles from "./kontakt.module.css"
export class MapContainer extends Component {
   render() {
            const containerStyle = {
         width: '40vw',
         height: '30vw',
         textAlign: 'center',
         position:"relative",
         margin: "auto",
         
      } 

      return (
         <div >
            <Map className={styles.mapa}
               google={this.props.google}
                         containerStyle={containerStyle}
                 initialCenter={{
                  lat: 50.231565016355134,
                  lng: 15.890913487198356,
               }}
               zoom={18}
               onClick={this.onMapClicked}
            
            >
                 <Marker
                  title={'Křepelky'}
                  position={{  lat: 50.231565016355134,
                     lng: 15.890913487198356, }}
               /> 
            </Map>
         </div>
      )
   }
}

export default GoogleApiWrapper({
   apiKey: "AIzaSyC9pXDy9WVkDnesBiRNU4QkD87ctxVSRB0",
})(MapContainer)