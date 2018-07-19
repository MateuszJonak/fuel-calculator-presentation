import { mapValue } from '../../lib/mapValue';

export const CALCULATOR_FORM_NAME = 'calculator';
export const INPUTS = {
  price: {
    label: 'Price',
  },
  distance: {
    label: 'Distance (km)',
  },
  avg: {
    label: 'Average fuel consumption',
  },
};
export const INPUTS_CONFIG = mapValue(INPUTS, (value, key) => ({
  ...value,
  name: key,
}));
