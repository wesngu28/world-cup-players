'use client'
import { useEffect, useState } from "react";

export default function Bar() {
  const [data, setData] = useState('')

  useEffect(() => {
    async function getData() {
      const stats = await fetch('https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/World%20Cup%20Country%20Statistics.csv')
      const statData = await stats.json()
      setData(statData)
    }
    getData()
  }, [])

  return(
    <p>ok</p>
  )
}