import React from 'react';
import { Container } from './styles';
import img4 from '../../assets/img4.png'
import { Link } from 'react-router-dom';

export function Article() {
  return (
   <Container>
      <div className="c-img">
         <img src={img4} alt="anime" />
         <button>Lorem</button>
      </div>
      <div className="c-content">
         <p className="title">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
         </p>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...
         </p>
         <p>
         00/00/0000
         </p>
         <Link to="/article"><button>Ler Notícia</button></Link>
         
      </div>
   </Container>
  );
}