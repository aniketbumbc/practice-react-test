import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';

const Magic = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const [text, setText] = useState('');
  const [palindrom, setPalindrome] = useState('');
  const [fruits, setFruits] = useState([]);
  const [checkboxData, setCheckboxData] = useState('');
  const [paraColor, setParaColor] = useState('blue');

  useEffect(() => {
    fetchData('https://randomuser.me/api/').then((res) => {
      if (res.length) {
        setUsers(res);
      }
    });
  }, []);

  const fruitsInStore = [
    { id: 12, name: 'Mango' },
    { id: 13, name: 'Banana' },
    { id: 14, name: 'Apple' },
    { id: 15, name: 'Berry ' },
  ];

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

  const displayFruit = () => {
    setFruits(fruitsInStore);
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setCheckboxData('Hello');
    } else {
      setCheckboxData('');
    }
  };

  const handleColorChange = () => {
    if (paraColor === 'blue') {
      setParaColor('red');
    } else {
      setParaColor('blue');
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
      <h4>{!!palindrom.length && palindrom}</h4> <br />
      <button onClick={displayFruit}>List</button> <br />
      <ul>
        {fruits &&
          fruits.map((fruit) => (
            <li aria-labelledby='fruits-heading' key={fruit.id}>
              {fruit.name}
            </li>
          ))}
      </ul>
      <br />
      <input type='checkbox' id='show-data' onChange={handleCheckbox} />
      <label htmlFor='show-data'>Show Data</label>
      {!!checkboxData.length && <p>{checkboxData}</p>} <br />
      <label htmlFor='color-change'> Color Change</label>
      <input
        type='checkbox'
        id='color-change'
        onChange={handleColorChange}
      ></input>
      <p style={{ color: paraColor }} data-testid='color-change'>
        Change Color Here
      </p>
      <br />
      <h2> Counter Example Here </h2>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrement Counter</button>
      <br />
      <h2>Random User API </h2>
      {!!users.length &&
        users.map((user) => (
          <React.Fragment key={user.cell}>
            <h2>{user.email}</h2>
            <h3>{user.location.city}</h3>
            <h4>
              {user.name.first} {user.name.last}
            </h4>

            <img src={user.picture.large} alt={user.name.first} />
          </React.Fragment>
        ))}
    </>
  );
};

export default Magic;
