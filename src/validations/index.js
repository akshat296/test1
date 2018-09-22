import validate from 'validate.js';

validate.validators.dateCompare = (value, options, key, attr) => {
  const field = options.key;
  if (new Date(value) < new Date(attr[field])) {
    return '^To-Date Should be greater than or equal to From-Date';
  }
};

export default validate;
