import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Blog3 = () => {
  const URL = 'https://api.thecatapi.com/v1/images/search';
  const [catImageUrl, setCatImageUrl] = useState('');

  useEffect(() => {
    getCatImage();
  }, []);

  const getCatImage = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setCatImageUrl(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  const handleClick = () => {
    getCatImage();
  };

  return (
    <body>
      <Container>
        <div>
          <Title>Random Cats 😹</Title>
          <span>
            <Subtitle>Everybody deserves a minim</Subtitle>
          </span>
          <Image id="img-cat" src={catImageUrl} alt="Gatito aleatorio" />
          <Button type="button" onClick={handleClick}>
            ¡Give me another 😺!
          </Button>
        </div>
      </Container>
    </body>
  );
};

export default Blog3;
