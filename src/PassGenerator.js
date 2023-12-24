import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [uppercaseChecked, setUppercaseChecked] = useState(true);
  const [lowercaseChecked, setLowercaseChecked] = useState(true);
  const [numberChecked, setNumberChecked] = useState(true);
  const [symbolChecked, setSymbolChecked] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    let selectedChars = '';
    if (uppercaseChecked) selectedChars += uppercaseChars;
    if (lowercaseChecked) selectedChars += lowercaseChars;
    if (numberChecked) selectedChars += numberChars;
    if (symbolChecked) selectedChars += specialChars;

    if (!selectedChars) {
      alert('Please select at least one character type.');
      return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars.charAt(randomIndex);
    }

    setGeneratedPassword(password);
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('textarea');
    tempInput.value = generatedPassword;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Password copied to clipboard!');
  };

  return (
    <div>
      <h2>Random Password Generator</h2>

      <label htmlFor="passwordLength">Password Length:</label>
      <input
        type="number"
        id="passwordLength"
        min="6"
        max="20"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />

      <p>Select password criteria:</p>
      <label>
        <input
          type="checkbox"
          checked={uppercaseChecked}
          onChange={() => setUppercaseChecked(!uppercaseChecked)}
        />
        Uppercase Letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={lowercaseChecked}
          onChange={() => setLowercaseChecked(!lowercaseChecked)}
        />
        Lowercase Letters
      </label>
      <label>
        <input
          type="checkbox"
          checked={numberChecked}
          onChange={() => setNumberChecked(!numberChecked)}
        />
        Numbers
      </label>
      <label>
        <input
          type="checkbox"
          checked={symbolChecked}
          onChange={() => setSymbolChecked(!symbolChecked)}
        />
        Symbols
      </label>

      <button onClick={generatePassword}>Generate Password</button>

      <p id="generatedPassword">Generated Password: {generatedPassword}</p>

      <button onClick={copyToClipboard}>Copy Password</button>
    </div>
  );
};

export default PasswordGenerator;
