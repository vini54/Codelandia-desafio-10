import React from 'react';
import { Container } from './styles';

export function PageHeader(props) {
   const {img, title} = props
   return (
      <Container img={img}>
         <h2>{title}</h2>
         <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </Container>
   );
}