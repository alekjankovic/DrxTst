import { validateEmail } from './base.validator'

export default email => {
  debugger;

  const errors = {};

  if(!email || !validateEmail(email)){
    errors.email = true;
  }

  return {
    valid: Object.keys(errors).length === 0,
    msg: 'Email not valid.',
    errors: errors
  }

}
