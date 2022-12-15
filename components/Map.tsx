'use client'

import Map, { AttributionControl } from 'react-map-gl'

export default function Maps() {
  return (
    <div className="h-[calc(100vh-7rem)] w-full">
    <Map
      initialViewState={{
        zoom: 2,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
    >
    </Map>
    </div>
  );
}
