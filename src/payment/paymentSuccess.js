import React from 'react';
import styled from 'styled-components';

const paymentSuccess = () => {
  return (
    <div>
      <Container>
        {/* <Confetti width={width} height={height} numberOfPieces={450} /> */}
        <Title>congrats!</Title>
        <Message>Stripe has successfully processed your payment</Message>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 475px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

export default paymentSuccess;
