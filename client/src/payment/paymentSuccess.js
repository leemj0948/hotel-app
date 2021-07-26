import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PaymentSuccess = ({
  totalGuest,
  startDay,
  endDay,
  stayDate,
  totalprice,
  eachHotelValues,
}) => {
  const { address, rating, title, option1 } = eachHotelValues;
  return (
    <div>
      <Container>
        {/* <Confetti width={width} height={height} numberOfPieces={450} /> */}
        <Title>Booking is Confirmed!</Title>
        <Message>Hrer is your Booking details</Message>

        <div className="flex">
          <LeftConfrimBox>
            <p>{title}</p>
            <PdateWrap>
              <Pbox>
                <p className="bold">Check In </p>
                <p>{startDay}</p> -
              </Pbox>
              <Pbox>
                <p className="bold">Check Out </p>
                <p>{endDay}</p>
              </Pbox>
            </PdateWrap>
            <Pbox>
              <p className="bold">Duration of Stay </p>
            </Pbox>
            <Pbox>
              <p className="bold"> Address </p>
              <p>{address}</p>
            </Pbox>
            <div>
              <p className="bold">Guests</p>
              <p>{totalGuest} guest</p>
            </div>
          </LeftConfrimBox>
          <RightConfrimBox></RightConfrimBox>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  font-family: 'Open Sans Condensed';
  width: 475px;
  margin: 30px auto 0 auto;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 20px;
  padding: 2rem;
  .flex {
    display: flex;
    flex-direction: row;
  }
`;

const LeftConfrimBox = styled.div``;
const RightConfrimBox = styled.div``;
const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

const Pbox = styled.div`
  display: flex;
  text-align: left;
  padding: 1rem;
  flex-direction: column;
  .bold {
    font-weight: bold;
  }
`;
const PdateWrap = styled.div`
  display: felx;
  flex-direction: row;
`;
const mapStateToProps = ({
  booking: {
    guest,
    adult,
    infant,
    startDay,
    endDay,
    stayDate,
    totalprice,
    eachHotelValues,
  },
}) => ({
  totalGuest: guest + adult + infant,
  startDay,
  endDay,
  stayDate,
  totalprice,
  eachHotelValues,
});
export default connect(mapStateToProps)(PaymentSuccess);
