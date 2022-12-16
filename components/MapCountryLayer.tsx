import { LayerProps } from "react-map-gl";

export const choroStyle: LayerProps = {
  id: "COUNTRIES",
  type: "fill",
  source: 'wc',
  paint: {
    'fill-color': [
        'step',
        ['get', 'FREQUENCY'],
        '#ccc',
        0,
        '#d0d1e6',
        1,
        '#a6bddb',
        5,
        '#74a9cf',
        25,
        '#2b8cbe',
        40,
        '#045a8d',
        60,
        '#034e7b'

    ],
    'fill-outline-color': '#BBBBBB',
    'fill-opacity': 0.8,
  }
};