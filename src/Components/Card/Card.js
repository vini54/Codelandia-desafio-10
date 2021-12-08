import React from 'react';
import { Container } from './styles';

export function Card(props) {
   const {backImg} = props
  return (
     <Container img={backImg}>
        <button>Lorem</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
     </Container>
  );
}