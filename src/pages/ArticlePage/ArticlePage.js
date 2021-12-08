import React from 'react';
import { Container } from './styles';
import { NoticeSection } from '../../Components/NoticeSection/NoticeSection';
import { Footer } from '../../Components/Footer/Footer';

import img1 from '../../assets/articleImg1.png'
import img2 from '../../assets/articleImg2.png'

export function ArticlePage() {
  return (
     <Container>
      <div>
         <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis neque sed odio</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <p>00 de Julho de 2021</p>
      </div>
      <div className="img1">
         <button>Lorem</button>
         <img src={img1} alt="anime" />
      </div>
      <div>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>
      </div>
      <div>
         <img src={img2} alt="anime" />
      </div>
      <div>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>
      </div>
      <NoticeSection />
      <Footer />
     </Container>
  );
}