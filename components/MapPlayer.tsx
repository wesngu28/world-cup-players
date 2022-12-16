import { LayerProps } from "react-map-gl";

export const pointStyle: LayerProps = {
  id: 'PLAYERS',
  type: 'circle',
  source: 'wc',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-radius': 4,
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