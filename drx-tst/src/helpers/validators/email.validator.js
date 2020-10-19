import { validateEmail } from './base.validator'

export default email => {
  let valid = true;
  let msg = "Email valid."

  if(!email || !validateEmail(email)){
    valid = false;
    msg = "Email not valid";
  }

  return {
    valid: valid,
    msg: msg
  }

}
