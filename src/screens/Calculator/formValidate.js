import Validator from '../../lib/validator';
import toFloat from '../../lib/toFloat';
import { INPUTS_CONFIG } from '../../store/calculator/constants';

const fieldsNames = Object.keys(INPUTS_CONFIG).map(
  key => INPUTS_CONFIG[key].name,
);

const validator = new Validator();
validator.defineRequired(fieldsNames, 'This field is required');
for (let fieldName of fieldsNames) {
  validator.addTest({
    fieldName,
    validator: value => !toFloat(value),
    message: 'This field should be a number',
  });
}

export default values => validator.validate(values);
