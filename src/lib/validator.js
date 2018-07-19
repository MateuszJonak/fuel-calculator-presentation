import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';

class Validator {
  constructor() {
    this.errors = {};
    this.tests = {};
  }

  defineRequired(fields, message) {
    fields.forEach(fieldName =>
      this.addTest({
        fieldName,
        validator: value => !value,
        message,
      }),
    );
  }

  addTest(config = {}) {
    let { fieldName, ...rest } = config;

    if (!isString(fieldName) || !isFunction(rest.validator)) {
      throw new Error(
        'Config for Validator.addTest must have defined fieldName and validator',
      );
    }
    if (!this.tests.hasOwnProperty(fieldName)) {
      this.tests[fieldName] = [];
    }
    this.tests[fieldName].push(rest);
  }

  validate(values) {
    const errors = {};

    for (let fieldName in this.tests) {
      if (this.tests.hasOwnProperty(fieldName)) {
        let { message } = this.validateField(fieldName, values[fieldName]);

        if (message) {
          errors[fieldName] = message;
        }
      }
    }

    return errors;
  }

  validateField(fieldName, value) {
    if (this.tests.hasOwnProperty(fieldName)) {
      for (let test of this.tests[fieldName]) {
        if (test.validator(value)) {
          return { status: true, message: test.message };
        }
      }
    }

    return { status: false };
  }
}

export default Validator;
