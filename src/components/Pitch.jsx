import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const PitchSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`;

const PitchCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const IntroContent = styled.div`
  /* Styles for your visual component or graphic */
`;

const PitchText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #222; /* Set the color for dark mode */
`;

const Pitch = () => {
  return (
    <PitchSection>
      <PitchCard onClick={() => console.log("Card 1 clicked")}>
        <IntroContent>
          <FaHeart size={32} />
        </IntroContent>
        <PitchText>Digital love, life, and joy in just one place</PitchText>
      </PitchCard>
      <PitchCard onClick={() => console.log("Card 2 clicked")}>
        <IntroContent>{/* Your visual component or graphic for the second space */}</IntroContent>
      </PitchCard><br />
      {/* Repeat PitchCard component for the remaining cards */}
    </PitchSection>
  );
};

export default Pitch;