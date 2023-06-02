import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../src/custom.css';
import Blog1One from './assets/blog-1-1.gif';
import Blog1Two from './assets/blog-1-2.gif';
import Blog1Tree from './assets/blog-1-3.gif';
import Blog1Four from './assets/blog-1-4.gif';
import Blog1Five from './assets/blog-1-5.gif';
import Blog1Six from './assets/blog-1-6.gif';

'/Blog/assets/blog-1-2.gif',
'/Blog/assets/blog-1-3.gif',
'/Blog/assets/blog-1-4.gif',
'/Blog/assets/blog-1-5.gif',
'/Blog/assets/blog-1-6.gif'

const Blog1 = () => {
  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getRandomTitle = () => {
    const titles = [
      'Welcome to the Wonderland!',
      'Discover a world of magic!',
      'Unleash your imagination!',
      'Journey into the unknown!',
      'Embrace the extraordinary!',
      'Where dreams come alive!'
    ];
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };
  
  const getRandomImage = () => {
    const images = [
      Blog1One,
      Blog1Two,
      Blog1Tree,
      Blog1Four,
      Blog1Five,
      Blog1Six
    ];
  
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  

  const getLongParagraph = () => {<h5 className="card-title custom-card-title">{title}</h5>
    const paragraphs = [
'In the depths of our hearts lie the seeds of greatness, waiting to be nurtured and unleashed. It is in our pursuit of passion and purpose that we discover the true essence of our being. With every step we take, we are capable of creating ripples of change, transforming not only ourselves but also the world around us. Embrace the power within you and let it guide you towards a future filled with boundless opportunities.',
'Life is a canvas, and we are the artists. With each brushstroke, we have the ability to paint a masterpiece that reflects our dreams, aspirations, and values. It is through our choices and actions that we shape our reality, leaving an indelible mark on the world. Believe in the power of your unique voice and let it resonate with authenticity and purpose. Your story is worth telling, and the world is waiting to be inspired by your artistry.',
'The path to success is not always smooth, but it is in the face of challenges that we discover our true strength and resilience. Embrace the obstacles as opportunities for growth and transformation. Let each setback fuel your determination to rise above limitations and push the boundaries of what is possible. Remember, it is through perseverance and unwavering belief in your abilities that you can turn adversity into triumph.',
'Within you lies a wellspring of untapped potential, waiting to be unleashed. Do not let fear or doubt hold you back from pursuing your dreams. Embrace the unknown with courage and step outside of your comfort zone. It is in the moments of uncertainty that you discover your true capabilities and unleash your hidden talents. Trust in yourself and the journey that lies ahead, for greatness awaits those who dare to take the first step.',
'Life is a symphony, and you are the conductor. With each choice, you compose a melody that reverberates throughout your existence. Embrace the rhythm of life and let your passion guide your baton. Surround yourself with harmonious relationships and cultivate a sense of gratitude for every note in your journey. Remember, it is through the harmony of purpose, passion, and perseverance that you create a masterpiece worth celebrating.',
'The world is a tapestry woven with diverse stories and perspectives. Embrace the richness of human experiences and seek to understand the narratives that differ from your own. Let empathy be your guiding light, and compassion be your compass. By embracing inclusivity and celebrating diversity, we create a world where every voice is heard, every story is valued, and every individual is recognized for their unique contribution. Together, we can weave a brighter future for generations to come.'
];
const randomIndex = Math.floor(Math.random() * paragraphs.length);
return paragraphs[randomIndex];
  };

  const [color, setColor] = useState(getRandomColor());
  const [title, setTitle] = useState(getRandomTitle());
  const [image, setImage] = useState(getRandomImage());
  const [paragraph, setParagraph] = useState(getLongParagraph());

  const handleChangeColor = () => {
    setColor(getRandomColor());
  };

  const handleChangeTitle = () => {
    setTitle(getRandomTitle());
  };

  const handleChangeImage = () => {
    setImage(getRandomImage());
  };

  const handleChangeParagraph = () => {
    setParagraph(getLongParagraph());
  };

  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7C52MLZWVM"></script>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ultracobra Ⓤ Blog 🐍</title>
        <meta
          name="description"
          content="This is the Blog component from @ultracobra"
        />
        <meta property="og:image" content="https://i.imgur.com/cCphed4.png" />
      </Helmet>
      <div>
        <div className="card custom-card" style={cardStyle}>
          <img
            className="card-img-top custom-card-image"
            src={image}
            alt="Embark on the Journey!"
            title="Embark on the Journey!"
          />
          <div className="card-body">
            <h5 className="card-title custom-card-title">{title}</h5>
            <p className="card-text custom-card-text">{paragraph}</p>
            <a href="#" className="btn btn-primary custom-card-button">
              Embark on the Journey!
            </a>
            <br />
          </div>
        </div>
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
      <button onClick={handleChangeImage}>Change Image</button>
      <button onClick={handleChangeTitle}>Change Title</button>
      <button onClick={handleChangeParagraph}>Change Paragraph</button>
    </div>
  );
};

export default Blog1;
