import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHotelsSelector } from '../utils/useHotelsSelector';
import { loadHotelsList, sortHotels } from '../actions/hotels';
import Logo from '../components/Logo';
import ResultsCount from '../components/ResultsCount';
import Hotel from '../components/Hotel';

const HotelsList = () => {
  const dispatch = useDispatch();
  const { loading, hotels, error } = useHotelsSelector();
  const [sortOption, setSortOption] = useState('high-low');

  useEffect(() => {
    if (hotels === null) {
      dispatch(loadHotelsList());
    }
  }, [hotels]);

  useEffect(() => {
    dispatch(sortHotels({ hotels, sortOption }));
  }, [sortOption]);

  return (
    <MainContainer>
      <Logo />
      <TopContainer>
        {!loading && <ResultsCount hotels={hotels} />}
        <SortingContainer>
          <SortByLabel htmlFor="sorting">Sort by</SortByLabel>
          <SortBySelect
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="high-low">Price high-low</option>
            <option value="low-high">Price low-high</option>
          </SortBySelect>
        </SortingContainer>
      </TopContainer>
      <Hotels>
        {hotels &&
          hotels.length > 0 &&
          hotels.map((hotel, index) => <Hotel hotel={hotel} />)}
      </Hotels>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 1440px;
  margin: 50px auto;
  padding: 0px 50px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SortingContainer = styled.div``;
const SortByLabel = styled.label`
  margin-right: 20px;
`;

const SortBySelect = styled.select`
  padding: 5px;
`;

const Hotels = styled.div`
  border-bottom: 0.5px solid #eee;
`;

export default HotelsList;
