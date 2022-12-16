"use client";

import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, RadialLinearScale } from "chart.js";

ChartJS.register(ArcElement, RadialLinearScale);

export function ClubPolar() {
  const [data, setData] = useState([{} as any]);

  useEffect(() => {
    async function getData() {
      const clubs = await fetch(
        "https://raw.githubusercontent.com/wesngu28/world-cup-players/main/data/Clubs.json"
      );
      const clubData = await clubs.json();
      setData(clubData);
    }
    getData();
  }, []);

  return (
    <div className={"mb-8 w-1/2 h-[600px] relative"}>
      <PolarArea
        data={{
          labels: data.map((data) => data.CLUB).slice(0, 15),
          datasets: [
            {
              label: "Players with Club",
              data: data.map((data) => data.COUNT).slice(0, 15),
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              pointLabels: {
                display: true,
                centerPointLabels: true,
                font: {
                  size: 9
                }
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Club",
            },
            legend: {
              display: false
            }
          },
        }}
      />
    </div>
  );
}
