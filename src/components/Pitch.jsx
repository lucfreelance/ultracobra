import styled from 'styled-components';

const PitchSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`;

const PitchColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroContent = styled.div`
  /* Styles for your visual component or graphic */
`;

const PitchText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Pitch = () => {
  return (
    <PitchSection>
      <PitchColumn>
        <IntroContent>{/* Your visual component or graphic for the first space */}</IntroContent>
        <PitchText>Digital love, life and joy in just one place</PitchText>
      </PitchColumn>
      <PitchColumn>
        <IntroContent>{/* Your visual component or graphic for the second space */}</IntroContent>
      </PitchColumn>
    </PitchSection>
  );
}

export default Pitch;
