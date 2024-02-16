import React, {  useState } from 'react';
import CardList from '../components/CarList/CarList';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-top: 50px;
`;

const FavoritePage = () => {
  const [favorite, setFavorite] = useState(() => JSON.parse(localStorage.getItem('cars')) ?? []);


  return (
    <StyledSection>
    
        <CardList data={favorite} setFavorite={setFavorite} />
      
    </StyledSection>
  );
};

export default FavoritePage;