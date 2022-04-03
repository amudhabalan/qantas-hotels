import React from 'react';
import styled from 'styled-components';

const Hotel = ({ hotel }) => {
  return (
    <HotelContainer key={hotel.id}>
      <HotelImage
        style={{
          background: `url(${hotel.property.previewImage.url}) center center/cover`,
        }}
      ></HotelImage>
      <PropertyDetails>
        <HotelName>{hotel.property.title}</HotelName>
        <PropertyAddress>
          {hotel.property.address[0]}, {hotel.property.address[1]}
        </PropertyAddress>

        <Offer>
          <OfferDetails>
            <OfferName>{hotel.offer.name}</OfferName>
            {hotel.offer.cancellationOption.cancellationType ==
              'FREE_CANCELLATION' && (
              <CancellationType>Free Cancellation</CancellationType>
            )}
          </OfferDetails>
          <OfferAmount>
            <p>1 night total ({hotel.offer.displayPrice.currency})</p>
            <Price>
              <DollarSign>$</DollarSign>
              {hotel.offer.displayPrice.amount}
            </Price>
            {hotel.offer.savings && (
              <Savings>
                Save ${hotel.offer.savings.amount}
                <Tilde>~</Tilde>
              </Savings>
            )}
          </OfferAmount>
        </Offer>
      </PropertyDetails>
    </HotelContainer>
  );
};

const HotelContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(164, 162, 162);
`;

const HotelImage = styled.div`
  width: 275px;
  height: 250px;
`;

const PropertyDetails = styled.div`
  width: 75%;
`;

const HotelName = styled.h1`
  margin-bottom: 10px;
`;

const PropertyAddress = styled.p`
  color: rgb(169, 166, 166);
  font-size: 16px;
`;

const Offer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const OfferDetails = styled.div``;

const OfferName = styled.p`
  text-decoration: underline;
  color: rgb(153, 3, 3);
  font-size: 16px;
`;

const CancellationType = styled.p`
  color: rgb(0, 82, 0);
  font-size: 16px;
  margin-top: 50px;
`;

const OfferAmount = styled.div`
  text-align: right;
`;

const Price = styled.p`
  font-size: 36px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const DollarSign = styled.span`
  font-size: 20px;
  position: relative;
  bottom: 12px;
`;

const Savings = styled.p`
  font-size: 24px;
  color: rgb(153, 3, 3);
`;

const Tilde = styled.span`
  position: relative;
  bottom: 8px;
`;

export default Hotel;
