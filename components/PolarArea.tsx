import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";

interface Props {
  x: string,
}
export function ClubPolar() {

  const [data, setData] = useState([{} as any])

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
    <div className={'mb-8 w-1/2 h-[1000px] relative'}>
      <PolarArea
        data={{
          labels: data.filter(data => data[x] != '').map((data) => data.COUNTRY),
          datasets: [
            {
              label: xHover,
              data: data.filter(data => data[x] != '').map((data) => data[x]),
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
              ],
              borderWidth: 1,
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