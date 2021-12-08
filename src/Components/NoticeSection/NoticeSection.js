import React from 'react';
import { Container } from './styles';
import { Card } from '../Card/Card';

import noticeImg1 from '../../assets/notice-img1.png'
import noticeImg2 from '../../assets/notice-img2.png'
import noticeImg3 from '../../assets/notice-img3.png'
import noticeImg4 from '../../assets/notice-img4.png'
import noticeImg5 from '../../assets/notice-img5.png'
import noticeImg6 from '../../assets/notice-img6.png'

export function NoticeSection() {
  return (
     <Container>
        <h2>Notícias mais recentes</h2>
        <div>
          <Card backImg={noticeImg1}/>
          <Card backImg={noticeImg2}/>
          <Card backImg={noticeImg3}/>
          <Card backImg={noticeImg4}/>
          <Card backImg={noticeImg5}/>
          <Card backImg={noticeImg6}/>
        </div>
     </Container>
  );
}