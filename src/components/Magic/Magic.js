import { useState } from 'react';

const Magic = () => {
  const [text, setText] = useState('');
  const [palindrom, setPalindrome] = useState('');

  const handlePalindrom = () => {
    if (text.length) {
      let reverString = text.split('').reverse().join('');

      if (reverString === text) {
        setPalindrome('Yes... ' + reverString);
        setText('');
      } else {
        setPalindrome('No Palindrome');
        setText('');
      }
    }
  };

  return (
    <>
      <h3> This is interview magic component</h3>

      <label htmlFor='character-input'>Enter Text </label>
      <input
        type='text'
        value={text}
        id='character-input'
        placeholder='Enter string'
        onChange={(e) => setText(e.target.value)}
      ></input>

      <button onClick={handlePalindrom}>Palindrome</button>

      <h4>{!!palindrom.length && palindrom}</h4>
    </>
  );
};

export default Magic;
