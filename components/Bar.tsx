"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

interface Props {
  x: string,
  xText: string,
  title: string,
  xHover: string
}

function Bars({x, xText, title, xHover}: Props) {
  const [data, setData] = useState([{} as any]);

  useEffect(() => {
    async function getData() {
      const stats = await fetch(
        "https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/WCStats.json"
      );
      const statData = await stats.json();
      setData(statData);
    }
    getData();
  }, []);

  return (
    <div className={'mb-8 w-full p-2 md:p-0 md:w-1/2 h-[1000px] relative'}>
      <Bar
        data={{
          labels: data.filter(data => data[x] != '').map((data) => data.COUNTRY),
          datasets: [
            {
              label: xHover,
              data: data.filter(data => data[x] != '').map((data) => data[x]),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 1,
              barPercentage: 0.75,
              categoryPercentage: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            x: {
              title: {
                display: true,
                text: title
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: xText,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default function LicensedBar({x, xText, title, xHover}: Props) {
  ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);
  return <Bars x={x} xText={xText} title={title} xHover={xHover} />
}