import { useState } from 'react';
import Blog2Top from './assets/block-2.png';
import '../../custom.css';

const Blog2 = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [result, setResult] = useState('');

  const btnOnClick = () => {
    const sumaInputs =
      "The other day I met " +
      input1 +
      " on my last vacation to " +
      input2 +
      ". I invited them to play " +
      input3 +
      ". They said they prefer " +
      input4 +
      " over that. I felt like a " +
      input5 +
      " attack, or worse, like " +
      input6 +
      ". Then I wanted to invite them to " +
      input7 +
      ", and they accepted! I told them we could have a great time doing something cool like " +
      input8 +
      " and I suggested betting on who pays for dinner 😊. Guess who won? The answer is obvious, Watson... 🍺🍛😂🤣🍛🍺";
    setResult(sumaInputs);
  };

  const resetInputs = () => {
    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
    setInput5('');
    setInput6('');
    setInput7('');
    setInput8('');
    setResult('');
  };

  return (
    <div className="blog2-container">
        <h2>Crystal Ball SAID</h2>
      <h3>Answer questions to the Ball and receive a fun interactive comic based on you:</h3>
      <header>
        <div className="text-center">
          <img className="ball" src="https://i.imgur.com/V9J9qBt.png" alt="Crystal Ball - Comic" />
        </div>
      </header>
      <h2>Type...</h2>
      <main>
        <input
          id="trozo1"
          placeholder="🎭 Your favorite actor / actress"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        /><br />
        <input
          id="trozo2"
          placeholder="🌠 Best vacation destination"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        /><br />
        <input
          id="trozo3"
          placeholder="🧗‍♂️ Your favorite hobby"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        /><br />
        <input
          id="trozo4"
          placeholder="🤬 Famous person who annoys you that most"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        /><br />
        <input
          id="trozo5"
          placeholder="😱 Your deepest fear [If possible to say]"
          value={input5}
          onChange={(e) => setInput5(e.target.value)}
        /><br />
        <input
          id="trozo6"
          placeholder="😭 Most intense event ever ⬆️ Same thing"
          value={input6}
          onChange={(e) => setInput6(e.target.value)}
        /><br />
        <input
          id="trozo7"
          placeholder="🥳 Favorite Saturday activity"
          value={input7}
          onChange={(e) => setInput7(e.target.value)}
        /><br />
        <input
          id="trozo8"
          placeholder="😎 Favorite Sunday activity"
          value={input8}
          onChange={(e) => setInput8(e.target.value)}
        /><br />
        <p className="resultado">
          <button id="btnCalcular" onClick={btnOnClick}>
          🔥 Press the button 🔥 <br />
            for the REVELATION❗
          </button>
        </p>
        {result && (
          <p id="result" className="result-message">
            {result}
          </p>
        )}
      </main>
      <button onClick={resetInputs}>Start over...</button>
        <span className="oculto">
        </span>
    </div>
  );
};
<br />
export default Blog2;