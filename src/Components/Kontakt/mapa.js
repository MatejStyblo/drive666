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
                  lat: 50.581220858496515,
                  lng: 14.98348325750944,
               }}
               zoom={18}
               onClick={this.onMapClicked}
            
            >
                 <Marker
                  title={'Křepelky'}
                  position={{  lat: 50.581220858496515,
                     lng: 14.98348325750944, }}
               /> 
            </Map>
         </div>
      )
   }
}

export default GoogleApiWrapper({
   apiKey: "AIzaSyC9pXDy9WVkDnesBiRNU4QkD87ctxVSRB0",
})(MapContainer)