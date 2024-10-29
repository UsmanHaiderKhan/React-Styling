import { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">

      <Input
        label="Email"
        $invalid={emailNotValid}
        type="email"
        // className={emailNotValid ? 'invalid' : undefined}
        onChange={(event) => handleInputChange('email', event.target.value)}
      />
      <Input
        label="Password"
        type="password"
        $invalid={passwordNotValid}
        // className={passwordNotValid ? 'invalid' : undefined}
        onChange={(event) =>
          handleInputChange('password', event.target.value)
        }
      />
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
