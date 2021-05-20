import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export default function Map( props ) {

    console.log( "in Map" );
    console.log( props.userLocations );

    const [selected, setSelected] = useState( {} );
    const [psoition, setPosition] = useState( {
        lat: 41,
        lng: -71
    } );

    const mapStyles = {
        height: "100vh",

    };

    const defaultCenter = {
        lat: 29.4572, lng: -164.29
    }

    const locations = props.userLocations;


    // 
    //     const locations = [
    //         {
    //             name: "Location 1",
    //             location: {
    //                 lat: 41.3954,
    //                 lng: 2.162
    //             },
    //         },
    //         {
    //             name: "Location 2",
    //             location: {
    //                 lat: 41.3917,
    //                 lng: 2.1649
    //             },
    //         },
    //         {
    //             name: "Location 3",
    //             location: {
    //                 lat: 41.3773,
    //                 lng: 2.1585
    //             },
    //         },
    //         {
    //             name: "Location 4",
    //             location: {
    //                 lat: 41.3797,
    //                 lng: 2.1682
    //             },
    //         },
    //         {
    //             name: "Location 5",
    //             location: {
    //                 lat: 41.4055,
    //                 lng: 2.1915
    //             },
    //         }
    //     ];


    return (

        <LoadScript
            googleMapsApiKey='AIzaSyAAHyFaxRZmiS1TlLtkw5TtI8ywXpUYSL8'>
            <GoogleMap
                mapContainerStyle={ mapStyles }
                zoom={ 2 }
                center={ defaultCenter }
            >
                {
                    locations.map( item => {
                        return (
                            <Marker key={ item.name }
                                position={ item.location }
                                onClick={ () => setSelected( item ) }

                            />
                        )
                    } )
                }
                {
                    selected.location &&
                    (
                        <InfoWindow
                            position={ selected.location }
                            clickable={ true }
                            onCloseClick={ () => setSelected( {} ) }
                        >
                            <p>{ selected.name }</p>
                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </LoadScript>

    )
}
