"use client";

import { useEffect, useState } from "react";
import Map, { Layer, LayerProps, MapLayerMouseEvent, Source } from "react-map-gl";
import { choroStyle, frequencyLegend } from "./MapCountryLayer";
import { appearances, appearancesLegend, highest, highestLegend } from "./MapHistoryLayer";
import { colors, PointLayer } from "./MapPlayer";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Maps() {

  const [data, setData] = useState({} as string)
  const [info, setInfo] = useState(<h2></h2>)
  const [active, setActive] = useState('')
  const [filter, setFilter] = useState([] as string[])
  const [filterable, setFilterables] = useState([] as string[])

  useEffect(() => {
    async function getData() {
      const players = await fetch('https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/WCPlayers.geojson')
      const playerData = await players.json()
      setInfo(<h2></h2>)
      setData(playerData)
      setActive('PLAYERS')
      let countries = playerData.features.map((player: any) => player.properties.National_Team)
      countries = new Set(countries)
      setFilterables((Array.from(countries).sort() as string []))
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

  async function setHistory(type: string) {
    const players = await fetch('https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/WCStats.geojson')
    const playerData = await players.json()
    setData(playerData)
    setActive(type)
  }

  const handleClick = (layer: MapLayerMouseEvent) => {
    const features = layer.features!;
    if(features[0] && features[0].properties) {
      if (active === "PLAYERS") {
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
      }
      if (active === "COUNTRIES") {
        setInfo(
          <div className={"flex flex-col items-center justify-center p-4 absolute top-0 m-4 bg-gray-300"}>
            <h2 className={"mb-4 text-center font-bold"}>{features[0].properties.COUNTRY}</h2>
            <p>{features[0].properties.FREQUENCY} players in the World Cup were born in {features[0].properties.COUNTRY}.</p>
          </div>
        )
      }
      if (active === "APPEAR") {
        if (features[0].properties.WC_APPEARA !== 0) {
          setInfo(
            <div className={"flex flex-col items-center justify-center p-4 absolute top-0 m-4 bg-gray-300"}>
              <h2 className={"mb-4 text-center font-bold"}>{features[0].properties.COUNTRY}</h2>
              <p>{features[0].properties.COUNTRY} has appeared in {features[0].properties.WC_APPEARA} times.</p>
            </div>
          )
        }
      }
      if (active === "HIGHEST") {
        let highest = '';
        if (features[0].properties.WC_HIGHEST !== '') {
          if (features[0].properties.WC_HIGHEST === 'GS') {
            highest = 'the group stage'
          } else if (features[0].properties.WC_HIGHEST === 'RO16') {
            highest = 'the round of 16'
          } else if (features[0].properties.WC_HIGHEST === 'TBD') {
            highest = 'to be determined'
          } else if (features[0].properties.WC_HIGHEST === 'QF') {
            highest = 'the quarterfinals'
          } else if (features[0].properties.WC_HIGHEST === 'CHAMP') {
            highest = 'winning the World Cup'
          } else {
            highest = `placing ${features[0].properties.WC_HIGHEST.toLowerCase()}`
          }
          setInfo(
            <div className={"flex flex-col items-center justify-center p-4 absolute top-0 m-4 bg-gray-300"}>
              <h2 className={"mb-4 text-center font-bold"}>{features[0].properties.COUNTRY}</h2>
              <p>{features[0].properties.COUNTRY}&apos;s best performance is {highest}.</p>
            </div>
          )
        }
      }
    }
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full relative">
      <Map
        initialViewState={{
          zoom: 2,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        interactiveLayerIds={[active]}
        onClick={handleClick}
        attributionControl={true}
      >
        {info}
        {active === 'PLAYERS' ?
          <div className={"absolute bottom-8 md:bottom-4 w-[13.5rem] md:w-72 left-0 md:m-6 bg-gray-300 grid grid-cols-2 place-items-start p-4"}>
            {filterable.map((country, i) => <button key={country} onClick={() => setFilter(['in', 'National_Team', country])}><i className={`inline-block w-5 h-5 ${colors[i]}`}></i> {country}</button>)}
            <button onClick={() => setFilter(['in', 'National_Team', ''])}>All</button>
          </div> :
          <div className={"absolute bottom-8 md:bottom-4 left-0 w-min m-4 bg-gray-300 flex flex-col p-4"}>
            {active === 'COUNTRIES' ? frequencyLegend.map(freq => <div className={'flex'} key={freq[0]}><i className={`mr-2 inline-block w-5 h-5 ${freq[1]}`}></i>{freq[0]}</div>) : null}
            {active === 'APPEAR' ? appearancesLegend.map(appear => <div className={'flex'} key={appear[0]}><i className={`mr-2 inline-block w-5 h-5 ${appear[1]}`}></i>{appear[0]}</div>) : null}
            {active === 'HIGHEST' ? highestLegend.map(high => <div className={'flex'} key={high[0]}><i className={`mr-2 inline-block w-5 h-5 ${high[1]}`}></i>{high[0]}</div>) : null}
          </div>}
        <div className={"absolute bottom-8 md:bottom-4 right-0 w-min md:m-4 bg-gray-300 flex flex-col"}>
          <button className={`border-b-2 border-gray-300 p-4 ${active === 'PLAYERS' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={setPlayers}>Players</button>
          <button className={`border-b-2 border-gray-300 p-4 ${active === 'COUNTRIES' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={setNations}>Frequency</button>
          <button className={`border-b-2 border-gray-300 p-4 ${active === 'APPEAR' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setHistory('APPEAR')}>WC Appearances</button>
          <button className={`border-b-2 border-gray-300 p-4 ${active === 'HIGHEST' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={() => setHistory('HIGHEST')}>Highest Finish</button>
        </div>
        <Source id="wc" type="geojson" data={data}>
          {active === 'PLAYERS' ?
            <>
              {filter.length > 2 ? <PointLayer filter={filter} /> : <PointLayer />}
            </> : null
          }
          {active === 'COUNTRIES' ?
            <Layer {...choroStyle} /> : null
          }
          {active === 'APPEAR' ?
            <Layer {...appearances} /> : null
          }
          {active === 'HIGHEST' ?
            <Layer {...highest} /> : null
          }
        </Source>
      </Map>
    </div>
  );
}
