import React, { useState } from 'react';
import Blog2Top from './assets/block-2.png';
import '../src/custom.css';

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














// // import React from 'react';
// import Blog2Top from './assets/block-2.png';
// import '../src/custom.css';

// const Blog2 = () => {
//   const btnOnClick = () => {
//     const sumaInputs = "The other day I met " + input1.value + " on my last vacation to " + input2.value +
//       ". I invited them to play " + input3.value + ". They said they prefer " + input4.value +
//       " over that. I felt like a " + input5.value + " attack, or worse, like " + input6.value +
//       ". Then I wanted to invite them to " + input7.value + ", and they accepted! I told them we could have a great time doing something cool like "
//       + input8.value + " and I suggested betting on who pays for dinner 😊. Guess who won? The answer is obvious, Watson... 🍺🍛😂🤣🍛🍺";
//     pResult.innerText = sumaInputs;
//   };

//   return (
//     <>
//       <h3>Answer Crystal Ball's questions and <br /> receive a fun interactive comic based on you:</h3>
//       <header>
//         <div className="text-center">
//           <img className="ball" src="https://i.imgur.com/V9J9qBt.png" alt="Crystal Ball - Comic" />
//         </div>
//       </header>
//       <h2>Write...</h2>
//       <main>
//         <input id="trozo1" placeholder="Your favorite actor/actress 🎭" /><br />
//         <input id="trozo2" placeholder="Best vacation destination 🌠" /><br />
//         <input id="trozo3" placeholder="Favorite hobby 🧗‍♂️" /><br />
//         <input id="trozo4" placeholder="Famous person who annoys you the most 🤬" /><br />
//         <input id="trozo5" placeholder="Your deepest fear 😱 (if you can say)" /><br />
//         <input id="trozo6" placeholder="Most intense event you've experienced 😭 (if you can say)" /><br />
//         <input id="trozo7" placeholder="Favorite Saturday activity 🥳" /><br />
//         <input id="trozo8" placeholder="Favorite Sunday activity 😄" /><br />
//         <p className="resultado"><button id="btnCalcular" onClick={btnOnClick}>Press the button 🔥🔥🔥🔥🔥 for the REVELATION❗</button></p>
//         <span>
//           <p id="result">Made with ❤ by @lucfreelance </p>
//           <p className="oculto">
//             Made with ❤ by @lucfreelance<br />
//             <a href="https://github.com/lucfreelance/">https://github.com/lucfreelance/</a>
//           </p>
//         </span>
//       </main>
//       <footer className="footer">
//         <button onClick={() => window.location.reload()}>Try again</button>
//       </footer>
//     </>
//   );
// };

// export default Blog2;












// import { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import '../src/custom.css';
// import Blog1One from './assets/blog-1-1.gif';
// import Blog1Two from './assets/blog-1-2.gif';
// import Blog1Tree from './assets/blog-1-3.gif';
// import Blog1Four from './assets/blog-1-4.gif';
// import Blog1Five from './assets/blog-1-5.gif';
// import Blog1Six from './assets/blog-1-6.gif';
// import Blog1Seven from './assets/blog-1-7.gif';
// import Blog1Eight from './assets/blog-1-8.gif';
// import Blog1Nine from './assets/blog-1-9.gif';
// import Blog1Ten from './assets/blog-1-10.webp';
// import Blog1Eleven from './assets/blog-1-11.webp';
// import Blog1Twelve from './assets/blog-1-12.webp';

// const Blog1 = () => {
//   const getRandomColor = () => {
//     const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
//   };

//   const getRandomTitle = () => {
//     const titles = [
//       'Welcome to the Wonderland!',
//       'Discover a world of magic!',
//       'Unleash your imagination!',
//       'Journey into the unknown!',
//       'Embrace the extraordinary!',
//       'Where dreams come alive!',
//       'Are you ready for outpost?',
//       'You are spacial, important',
//       'Do what it takes to better'
//     ];
//     const randomIndex = Math.floor(Math.random() * titles.length);
//     return titles[randomIndex];
//   };
  
//   const getRandomImage = () => {
//     const images = [
//       Blog1One,
//       Blog1Two,
//       Blog1Tree,
//       Blog1Four,
//       Blog1Five,
//       Blog1Six,
//       Blog1Seven,
//       Blog1Eight,
//       Blog1Nine,
//       Blog1Ten,
//       Blog1Eleven,
//       Blog1Twelve
//     ];
  
//     const randomIndex = Math.floor(Math.random() * images.length);
//     return images[randomIndex];
//   };
  

//   const getLongParagraph = () => {<h5 className="card-title custom-card-title">{title}</h5>
//     const paragraphs = [
// 'In the depths of our hearts lie the seeds of greatness, waiting to be nurtured and unleashed. Pursue your passion and purpose to discover the essence of your being. Each step creates ripples of change, transforming yourself and the world. Embrace the power within to guide you towards boundless opportunities.',

// 'Life is a magnificent canvas where we hold the brush that paints our existence. Each stroke shapes the masterpiece of our lives. Manifest your dreams with passion, leaving an indelible mark on the world. Believe in your unique voice, leading to a life of significance and inspiration.',

// 'Life is a journey of exploration, an adventure into the unknown. Embrace uncertainty to discover your true potential. Embrace curiosity and change, knowing each twist is an opportunity for growth. Embrace the thrill of the unknown, opening doors to endless possibilities.',

// 'Unleash your hidden potential and embrace boundless opportunities. Your unique talents hold the key to a fulfilling life. Each step allows positive change in your life and the world. Believe in yourself and make a difference with your light.',

// 'The path to success may be challenging, but it reveals our strength and resilience. Embrace obstacles as opportunities for growth. Let setbacks fuel determination to rise above limitations. Your character shines in moments of difficulty, leading to victory.',

// 'Life unfolds as a canvas, inviting us to be artisans. Each choice and action shapes our reality, leaving a mark. Believe in the power of your unique voice, resonating with purpose. Your story is worth telling; inspire others.',

// 'Life is a grand symphony; you hold the baton of your destiny. Embrace the rhythm, infuse passion into every note. Surround yourself with harmonious relationships, gratitude for the symphony unfolding. Purpose, passion, and perseverance create a resplendent masterpiece.',

// 'Within you lies untapped potential, waiting to be unleashed. Embrace the unknown, step outside your comfort zone. Moments of uncertainty reveal capabilities and hidden talents. Trust yourself; greatness awaits.',

// 'Embrace the journey of self-discovery and growth. Life is a constant process of learning and evolving. Explore new horizons, challenge beliefs, and embrace change. Every experience offers an opportunity for expansion. Embrace the unknown and discover beauty beyond your comfort zone.',

// 'The world unfolds as a tapestry woven from diverse stories and perspectives. Embrace the beauty arising from differences. Seek understanding and appreciation, celebrating inclusivity and diversity. We pave the way for a compassionate future.',

// 'Life is a symphony, and you are the conductor. Each choice composes a melody that reverberates. Embrace the rhythm, let passion guide your baton. Cultivate harmonious relationships, gratitude for every note. Create a masterpiece worth celebrating.',

// 'Find solace in the beauty of simplicity. Pause, breathe, and reconnect with what truly matters. Embrace stillness, be present in the moment. Find contentment in simple pleasures. Savor each experience and find joy.',

// 'Embrace the path to success, knowing it may not always be smooth. Challenges reveal our strength and resilience. Embrace obstacles as opportunities for growth. Let setbacks fuel determination and push boundaries. Perseverance turns adversity into triumph.',

// 'Tap into your inner reservoir of greatness, waiting to be unleashed upon the world. Nourish your potential and create a lasting impact. Embrace the power within you, shaping a future filled with purpose and fulfillment.',

// 'Experience the world as a tapestry of diverse stories and perspectives. Embrace the richness of human experiences, seeking understanding beyond your own. Let empathy guide your steps, celebrating inclusivity and diversity. We weave a brighter future.'
// ];
// const randomIndex = Math.floor(Math.random() * paragraphs.length);
// return paragraphs[randomIndex];
//   };

//   const [color, setColor] = useState(getRandomColor());
//   const [title, setTitle] = useState(getRandomTitle());
//   const [image, setImage] = useState(getRandomImage());
//   const [paragraph, setParagraph] = useState(getLongParagraph());

//   const handleChangeColor = () => {
//     setColor(getRandomColor());
//   };

//   const handleChangeTitle = () => {
//     setTitle(getRandomTitle());
//   };

//   const handleChangeImage = () => {
//     setImage(getRandomImage());
//   };

//   const handleChangeParagraph = () => {
//     setParagraph(getLongParagraph());
//   };

//   const cardStyle = {
//     backgroundColor: color,
//   };

//   return (
//     <div>
//       <Helmet>  {/* Google tag (gtag.js) */}
//   <script async src="https://www.googletagmanager.com/gtag/js?id=G-7C52MLZWVM"></script>
//   <script>
//     {`
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'G-7C52MLZWVM');
//   `}
//   </script>
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>ultracobra Ⓤ Blog 🐍</title>
//         <meta
//           name="description"
//           content="This is the Blog component from @ultracobra"
//         />
//         <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
//       </Helmet>
//       <button onClick={handleChangeImage}>Change Image</button>
//       <button onClick={handleChangeColor}>Change Color</button>
//       <button onClick={handleChangeTitle}>Change Title</button>
//       <button onClick={handleChangeParagraph}>Change Paragraph</button>
//       <div>
//         <div className="card-custom-card" style={cardStyle}>
//           <img
//             className="custom-card-image"
//             src={image}
//             alt="Embark on the Journey!"
//             title="Embark on the Journey!"
//           />
//           <div className="card-body">
//             <h5 className="card-title custom-card-title">{title}</h5>
//             <p className="card-text custom-card-text">{paragraph}</p>
//             <a href="#" className="btn btn-primary custom-card-button">
//               Embark on the Journey!
//             </a>
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog1;












// <!DOCTYPE html>
// <html lang="es">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Historieta - Responde ocho sencillas preguntas y recibe Una divertida historieta interactiva basada en ti 😉</title>
//     <style type="text/css">
//         /* Variables CSS */
//         :root {
//             --black: #000000;
//             --white: #ffffff;
//             --very-light-pink: #c7c7c7;
//             --text-input-field: #150050;
//             --#5837D0;
//             --#394A6D;
//             --#3C9D9B;
//             --#52DE97;
//             --#C0FFB3;
//             --sm: 14px;
//             --md: 16px;
//             --lg: 18px;
//         }

//         /* Reglas de estilo */
//         * {
//             margin: 20;
//             padding: 10;
//             box-sizing: border-box;
//         }

//         body {
//             background-color: var(--very-light-pink);
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//         }

//         h1 {
//             color: var(--black);
//             font-size: var(--lg);
//             margin-bottom: 20px;
//             margin-top: 20px;
//             margin-left: 10px;
//         }

//         h2 {
//             color: var(--black);
//             font-size: var(--md);
//             margin-bottom: 20px;
//         }

//         main {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//         }

//         input {
//             background-color: var(--white);
//             border: 2px solid var(--black);
//             color: var(--black);
//             font-size: var(--md);
//             margin-bottom: 10px;
//             padding: 10px;
//             width: 400px;
//         }

//         button {
//             background-color: var(--black);
//             border: none;
//             color: var(--white);
//             font-size: var(--md);
//             padding: 10px 20px;
//         }

//         p {
//             color: var(--black);
//             font-size: var(--md);
//             margin-top: 20px;
//         }

//         .bola {
// 	width: 50%;
//     height: 50%;
// 	margin:10px auto;
// 	display:block;
// 	padding: 10px 10px 10px 10px;
// }

// .footer {
//   text-align: center;
//   background-color: #116349;
//   padding: 5px 5px 5px 5px;
//   cursor: pointer;  
//   margin-top: 100px;
// }

// .resultado {
//     cursor: pointer;
// }

//         @media screen and (max-width: 480px) {
//   * {
//     margin: 10px;
//   }
// }

// .oculto {
//   display: none;
// }

//     </style>
// </head>
// <body>
//     <h1>Responde a la Bola de Cristal las siguientes preguntas y recibirás una divertida historieta interactiva basada en ti:</h1>

//     <header>
//         <div class="text-center">
//             <img class = bola src="https://i.imgur.com/V9J9qBt.png" alt="Bola de cristal - Historieta">
//         </div>
//     </header>
//     <h2>Escribe... </h2>
// <main>
//     <input id="trozo1" placeholder="Tu actor / actriz favorito(a) 🎭" /><br>
//     <input id="trozo2" placeholder="Mejor destino vacacional 🌠" /><br>
//     <input id="trozo3" placeholder="Hobbie favorito 🧗‍♂️" /><br>
//     <input id="trozo4" placeholder="Famoso que más te enoja 🤬" /><br>
//     <input id="trozo5" placeholder="Tu miedo más profundo 😱 (Si se puede decir)" /><br>
//     <input id="trozo6" placeholder="Evento más heavy vivido 😭 (Si se puede decir)" /><br>
//     <input id="trozo7" placeholder="Tu actividad favorita de sábado 🥳" /><br>
//     <input id="trozo8" placeholder="Tu actividad favorita de domingo 😄" /><br>
//     <p class = resultado><button id="btnCalcular" onclick="btnOnClick()">Pulsa el botón 🔥🔥🔥🔥🔥 para la REVELACIÓN❗</button></p>
//     <span>
//     <p id="result">Hecho con ❤ por @lucfreelance </br> https://github.com/lucfreelance/</p>
//     <p class="oculto">
//         Hecho con ❤ por @lucfreelance<br>
//         <link rel="stylesheet" href="https://github.com/lucfreelance/">    
//       </p>
//     </span>
// </main>

// <script type="text/javascript">
// const h1 = document.querySelector('h1');
// const input1 = document.querySelector('#trozo1');
// const input2 = document.querySelector('#trozo2');
// const input3 = document.querySelector('#trozo3');
// const input4 = document.querySelector('#trozo4');
// const input5 = document.querySelector('#trozo5');
// const input6 = document.querySelector('#trozo6');
// const input7 = document.querySelector('#trozo7');
// const input8 = document.querySelector('#trozo8');
// const btn = document.querySelector('#btnCalcular');
// const pResult = document.querySelector('#result');

// function btnOnClick() {
// const sumaInputs = "La otra vez me encontré con " + input1.value + " en mis últimas vacaciones a " + input2.value +
//  ". Lo invité a jugar " + input3.value + ". Me dijo que prefiere que le pase " + input4.value +
//  " por encima a eso. Yo sentí como un ataque de " + input5.value + ", o peor; o tal vez como " + input6.value +
//  ". Entonces le quise invitar a " + input7.value +  ", aceptó! Y le dije que podemos terminar pasándola bien haciendo algo guai como "
//  + input8.value + " y le propuse apostar quien le paga la cena al otro 😊. ¿Adivinen quién ganó? La respuesta es obvia, Watson... 🍺🍛😂🤣🍛🍺";
// pResult.innerText = sumaInputs
// };

//     </script>
// </body>
// <!-- <footer class="oculto">
//     Hecho con ❤ por @lucfreelance<br>
//     https://github.com/lucfreelance/
//   </footer> -->
//   <footer class = "footer">
//     <button onclick="location.reload()">Prueba otra vez</button>
//   </footer>
// </html>