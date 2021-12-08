import React from 'react';
import { Container } from './styles';
import { Card } from '../../Components/Card/Card';
import { Article } from '../../Components/Article/Article';
import { NoticeSection } from '../../Components/NoticeSection/NoticeSection';
import {Footer} from '../../Components/Footer/Footer'

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import asideImg1 from '../../assets/aside-img1.png'
import asideImg2 from '../../assets/aside-img2.png'
import asideImg3 from '../../assets/aside-img3.png'
export function Home () {
  return (
    <Container>
      <section className="intro">
        <h1>Mundo Nerd?</h1>
        <h1>Naped</h1>
        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </section>
      <section className="destaques">
        <div className="main">
          <Card backImg={img1} />
        </div>
        <div className="side">
          <Card backImg={img2} />
          <Card backImg={img3} />
        </div>
      </section>
      <section className="articles">
        <div>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
        <aside className="articles">
          <h2>Populares</h2>
          <div>
            <Card backImg={asideImg1}/>
            <Card backImg={asideImg2}/>
            <Card backImg={asideImg3}/>
          </div>
        </aside>
      </section>
      <NoticeSection />
      <Footer />
    </Container>
  );
}