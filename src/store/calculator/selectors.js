import { formValueSelector } from 'redux-form';
import { createSelector } from 'reselect';
import { compose } from 'lodash/fp';
import toFloat from '../../lib/toFloat';

import { CALCULATOR_FORM_NAME, INPUTS_CONFIG } from './constants';

const calculatorFormSelector = compose(
  toFloat,
  formValueSelector(CALCULATOR_FORM_NAME),
);

export const getPriceForLiter = state =>
  calculatorFormSelector(state, INPUTS_CONFIG.price.name);
export const getDistance = state =>
  calculatorFormSelector(state, INPUTS_CONFIG.distance.name);
export const getAvgFuelConsumption = state =>
  calculatorFormSelector(state, INPUTS_CONFIG.avg.name);

export const getHowManyLiters = createSelector(
  getDistance,
  getAvgFuelConsumption,
  (distance, avgFuelConsumption) => (distance * (avgFuelConsumption / 100)) | 0,
);

export const getPrice = createSelector(
  getHowManyLiters,
  getPriceForLiter,
  (howManyLiters, priceForLiter) => (howManyLiters * priceForLiter) | 0,
);
