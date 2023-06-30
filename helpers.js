/**
 * ####################
 * ## Generate Error ##
 * ####################
 */

const generateError = (message, code) => {
  const err = new Error(message);
  err.statusCode = code;
  return err;
};

module.exports = {
  generateError,
};
