import React from 'react';
import { PageHeader } from '../../Components/PageHeader/PageHeader';
import { Container } from './styles';
import AnimeHeader from '../../assets/AnimeHeader.png'
import { SearchInput } from '../../Components/SearchInput/SearchInput';
import { Card } from '../../Components/Card/Card';

import img1 from '../../assets/notice-img1.png'
import img2 from '../../assets/anime-img2.png'
import img3 from '../../assets/anime-img3.png'
import { Footer } from '../../Components/Footer/Footer';

export function Animes () {
  return (
    <Container>
      <PageHeader img={AnimeHeader} title="Animes" />
      <SearchInput />
      <section className="cards">
        <Card backImg={img1} />
        <Card backImg={img2} />
        <Card backImg={img3} />
        <Card backImg={img1} />
        <Card backImg={img2} />
        <Card backImg={img3} />
        <Card backImg={img1} />
        <Card backImg={img2} />
        <Card backImg={img3} />
        <Card backImg={img1} />
        <Card backImg={img2} />
        <Card backImg={img3} />
      </section>
      <Footer />
    </Container>
  );
}