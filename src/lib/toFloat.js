import { isString, toNumber, compose } from 'lodash/fp';

export const replaceCommaToPeriod = value =>
  isString(value) ? value.replace(/,/g, '.') : value;

export default compose(
  toNumber,
  replaceCommaToPeriod,
);
