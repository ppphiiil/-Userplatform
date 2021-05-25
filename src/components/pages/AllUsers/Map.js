import React, { useState, useContext } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MyContext } from '../../../App'

export default function Map( props ) {

    console.log( "enter Map" );

    const { userData } = useContext( MyContext )

    const [selected, setSelected] = useState( {} );
    // const [position, setPosition] = useState( {
    //     lat: 41,
    //     lng: -71
    // } );

    const locations = userData.map( ( item ) => {
        return ( {
            name: item.name,
            location: {
                lat: Number( item.address.geo.lat ),
                lng: Number( item.address.geo.lng ),
            }
        }
        )
    } );

    const mapStyles = {
        height: "50vh",
        width: "100%",

    };

    const defaultCenter = {
        lat: 29.4572, lng: -164.29
    }




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
