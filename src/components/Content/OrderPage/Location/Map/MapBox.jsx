import React from 'react'
import ob from './MapBox.module.css'
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import { points, gradientColors } from "./data";

const MapBox = (props) => {
    const [zoom, setZoom] = React.useState(9)

    React.useEffect(() => {
        let city = props.city;
        if ((city === null) || (city === '') || (city === undefined)) {
            return setZoom(1);
        }
        return setZoom(9);
    }, [props])
    // function checkvalue(params) {
    //     let city = params.city;
    //     if ((city === null) || (city === '') || (city === undefined)) {
    //         return 0;
    //     }
    //     else return 1;
    // }
    // const [zoom, setZoom] = React.useState(9)
     const mapState = { center: [55.75, 37.57], zoom }

    //!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!Проблемное место
    // let coord = (checkvalue(props) ? setZoom(9) : setZoom(1))


    return (
        <div className={ob.mapbox}>
            {console.log('props:', props, 'checkvalue:', 'zoom:', zoom)}
            {/* {console.log('props:', props, 'checkvalue:', checkvalue(props), 'zoom:', zoom)} */}
            <div className={ob.map_wrapper1}>
                <YMaps
                    onApiAvaliable={ymaps => this.geocode(ymaps)}
                    query={{
                        ns: 'use-load-option',
                        apikey: '34deb942-75b6-4b98-a613-b242b96be84d',
                        load: 'Map,Placemark,control.ZoomControl,geoObject.addon.balloon',
                    }}
                >
                    <Map
                        modules={['geocode']}
                        state={mapState}
                        className={ob.map_wrapper}
                    >
                        <Clusterer
                            options={{
                                preset: 'islands#invertedVioletClusterIcons',
                                groupByCoordinates: false,
                            }}
                        >
                            {points.map((coordinates, index) => (
                                <Placemark key={index} geometry={coordinates} />
                            ))}
                        </Clusterer>
                        <p>


                        </p>
                    </Map>
                </YMaps>

            </div>
        </div>
    )
}

export default MapBox;
