import { LayerProps } from "react-map-gl";

export const highest: LayerProps = {
  id: 'HIGHEST',
  type: 'fill',
  source: 'wc',
  paint: {
    'fill-color': [
      'match',
      ['get', 'WC_HIGHEST'],
      'NEVER', '#d0d1e6',
      'GS', '#a6bddb',
      'RO16', '#74a9cf',
      'QF', '#2b8cbe',
      'THIRD', '#045a8d ',
      'SECOND', '#034e7b',
      'CHAMP', '#FFD700',
      'TBD', '#cd3280',
      /* other */ '#ccc'
    ]
  }
};

export const appearances: LayerProps = {
  id: "APPEAR",
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