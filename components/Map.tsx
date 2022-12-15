"use client";

import Map, { Layer, Source } from "react-map-gl";

import { player_data } from "../data/WcPlayer.js";
import { GeoShape } from "../data/WcShape.js";

export default function Maps() {
  const layerStyle = {
    id: "point",
    type: "fill",
    paint: {
      'fill-color': [
          'step',
          ['get', 'FREQUENCY'],
          '#c6dbef',   // stop_output_0
          0,          // stop_input_0
          '#9ecae1',   // stop_output_1
          1,          // stop_input_1
          '#6baed6',   // stop_output_2
          5,          // stop_input_2
          '#4292c6',   // stop_output_3
          25,         // stop_input_3
          '#2171b5',   // stop_output_4
          40,         // stop_input_4
          '#08306b',   // stop_output_5
          60,
          '#08306b'

      ],
      'fill-outline-color': '#BBBBBB',
      'fill-opacity': 0.8,
  }
  };

  return (
    <div className="h-[calc(100vh-7rem)] w-full">
      <Map
        initialViewState={{
          zoom: 2,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
      >
        <Source id="wc" type="geojson" data={GeoShape}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
}
