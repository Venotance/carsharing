import React from 'react'
import ImgMap from './img/map.jpg'
import ob from './MapBox.module.css'
import './MapBox.css'
// import { YMaps, Map } from 'react-yandex-maps';
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import { points, gradientColors } from "./data";

const mapState = {
    center: [55.751574, 80.573856],
    zoom: 3,
    behaviors: ["default", "scrollZoom"]
};

const getPointData = index => {
    return {
        balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
        clusterCaption: "placemark <strong>" + index + "</strong>"
    };
};

const getPointOptions = () => {
    return {
        preset: "islands#violetIcon",
        iconColor: getRandomColor()
    };
};

function getRandomColor() {
    return gradientColors[Math.floor(Math.random() * gradientColors.length)];
}




class MapBox extends React.Component {
    constructor(props) {
        super(props);
        this.changeSomething = this.changeSomething.bind(this);
        this.state = {
            some: 0
        };
    }

    changeSomething = () => {
        this.setState({ some: 1 });
    };

    render() {
        return (
            <div className={ob.mapbox}>
                <div className={ob.map_wrapper1}>
                    <YMaps>
                        <Map
                            className="map_wrapper"
                            state={mapState}
                            modules={["package.full"]}
                        >
                            <Clusterer
                                options={{
                                    clusterIconLayout: "default#pieChart",
                                    clusterIconPieChartRadius: 25,
                                    clusterIconPieChartCoreRadius: 10,
                                    clusterIconPieChartStrokeWidth: 1,
                                    clusterDisableClickZoom: true,
                                    clusterHideIconOnBalloonOpen: false,
                                    geoObjectHideIconOnBalloonOpen: false
                                }}
                            >
                                {points.map((points, idx) => (
                                    <Placemark
                                        key={idx}
                                        geometry={points}
                                        properties={getPointData(idx)}
                                        options={getPointOptions()}
                                    />
                                ))}
                            </Clusterer>
                        </Map>
                    </YMaps>
                </div>
                {/* <button
                    onClick={this.changeSomething}
                    style={{ marginTop: 40, width: 200, height: 60 }}
                >
                    Click to rerender
                </button> */}
            </div>
        );
    }
}

export default MapBox;

// const MapBox = (props) => {
//     // console.log(props)
//     return (
//         <div className={ob.mapbox}>
//             <p>Выбрать на карте:</p>
//             <div className={ob.map_wrapper}>
//                 <YMaps>
//                     <div>
//                         My awesome application with maps!
//                         <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
//                     </div>
//                 </YMaps>
//             </div>
//         </div>
//     )
// }

// export default MapBox;