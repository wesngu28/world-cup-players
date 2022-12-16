"use client";

import { useEffect, useState } from "react";
import Map, { Layer, Source, Popup, LayerProps } from "react-map-gl";

export default function Maps() {

  const [data, setData] = useState({} as {type: string, features: any})
  const [info, setInfo] = useState(<h2></h2>)
  const [active, setActive] = useState('')

  useEffect(() => {
    async function getData() {
      const players = await fetch('https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/WCPlayers.geojson')
      const playerData = await players.json()
      setInfo(<h2></h2>)
      setData(playerData)
      setActive('PLAYERS')
    }
    getData()
  }, [])

  async function setPlayers() {
    const players = await fetch('https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/WCPlayers.geojson')
    const playerData = await players.json()
    setInfo(<h2></h2>)
    setData(playerData)
    setActive('PLAYERS')
  }

  async function setNations() {
    const players = await fetch('https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/WCStats.geojson')
    const playerData = await players.json()
    setData(playerData)
    setActive('COUNTRIES')
  }

  const handleClick = (layer) => {
    const features = layer.features;
    console.log(features)
    if (features[0].layer.id === "PLAYERS") {
      let names: string[] = []
      features.map((player: any) => {
        if(!names.includes(`${player.properties.PLAYER_NAME}, ${player.properties.POS} for ${player.properties.National_Team}`)) {
          names.push(`${player.properties.PLAYER_NAME}, ${player.properties.POS} for ${player.properties.National_Team}`)
        }
      })
      setInfo(
        <div className={"flex flex-col items-center justify-center p-4 absolute top-0 m-4 bg-gray-300"}>
          <h2 className={"mb-4 text-center font-bold"}>{features[0].properties.Birth}</h2>
          {names.map((name) => <p key={name}>{name}</p>)}
        </div>
      )
    } else {
      setInfo(
        <div className={"flex flex-col items-center justify-center p-4 absolute top-0 m-4 bg-gray-300"}>
          <h2 className={"mb-4 text-center font-bold"}>{features[0].properties.COUNTRY}</h2>
          <p>{features[0].properties.FREQUENCY} players in the World Cup were born in {features[0].properties.COUNTRY}.</p>
        </div>
      )
    }
  };

  const pointStyle: LayerProps = {
    id: 'PLAYERS',
    type: 'circle',
    source: 'wc',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-radius': 5,
      'circle-color': [
        'match',
        ['get', 'National_Team'],
        'Argentina', '#43A1D5',
        'Australia', '#00843D',
        'Belgium', '#FFD500',
        'Brazil', '#19AE47',
        'Cameroon', '#FBD81B',
        'Canada', '#C5281C',
        'Costa Rica', '#EBC17D',
        'Croatia', '#0457A2',
        'Denmark', '#CD181E',
        'Ecuador', '#FFCE00',
        'England', '#FFFFFF',
        'France', '#21304D',
        'Germany', '#000000',
        'Ghana', '#009535',
        'Iran', '#239F40',
        'Japan', '#4EB2EB',
        'Mexico', '#334D45',
        'Morocco', '#D29D63',
        'Netherlands', '#F36C21',
        'Poland', '#DC143C',
        'Portugal', '#0D6938',
        'Qatar', '#7F1431',
        'Saudi Arabia', '#7EC8AE',
        'Senegal', '#11A335',
        'Serbia', '#0D1131',
        'South Korea', '#EC0F32',
        'Spain', '#FCB507',
        'Switzerland', '#FF0000',
        'Tunisia', '#E70013',
        'Uruguay', '#D8000F',
        'USA', '#BB2533',
        'Wales', '#174A3F',
        /* other */ '#ccc'
      ]
    }
  };

  // const clusterLayer: LayerProps = {
  //   id: 'clusters',
  //   type: 'circle',
  //   source: 'wc',
  //   filter: ['has', 'point_count'],
  //   paint: {
  //     'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 3, '#f1f075', 7, '#f28cb1'],
  //     'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  //   }
  // };

  // const clusterCountLayer: LayerProps = {
  //   id: 'cluster-count',
  //   type: 'symbol',
  //   source: 'wc',
  //   filter: ['has', 'point_count'],
  //   layout: {
  //     'text-field': '{point_count_abbreviated}',
  //     'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
  //     'text-size': 12
  //   }
  // };

  const choroStyle: LayerProps = {
    id: "COUNTRIES",
    type: "fill",
    source: 'wc',
    paint: {
      'fill-color': [
          'step',
          ['get', 'WC_APPEARA'],
          '#ccc',
          0,
          '#d0d1e6',
          1,
          '#a6bddb',
          3,
          '#74a9cf',
          7,
          '#2b8cbe',
          11,
          '#045a8d',
          16,
          '#034e7b'

      ],
      'fill-outline-color': '#BBBBBB',
      'fill-opacity': 0.8,
    }
  };

  return (
    <div className="h-[calc(100vh-7rem)] w-full relative">
      <Map
        initialViewState={{
          zoom: 2,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        interactiveLayerIds={[active]}
        onClick={handleClick}
      >
        {info}
        <div className={"absolute bottom-0 m-4 bg-gray-300"}>
          <button onClick={setPlayers}>Players</button>
          <button onClick={setNations}>Nations</button>
        </div>
        <Source
          id="wc" type="geojson" data={data}
          // cluster={true}
          // clusterMaxZoom={7}
          // clusterRadius={50}
          >
          {data.type ? data.features.length === 831 ?
            <>
            {/* <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} /> */}
            <Layer {...pointStyle} />
            </> : null : null
          }
          {data.type ? data.features.length === 242 ?
            <Layer {...choroStyle} /> : null : null
          }
        </Source>
      </Map>
    </div>
  );
}
