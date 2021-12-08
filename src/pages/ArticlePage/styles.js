import styled from 'styled-components';

export const Container = styled.main`
   margin-top: 50px;
   color: ${props => props.theme.neutral3};
   h1{
      color: ${props => props.theme.neutral4};
      font-size: 36px;
      font-weight: 500;
   }
   .img1{
      position: relative;
      button{
         position: absolute;
         top: 20px;
         left: 20px;
         padding: 3px 15px;
         background-color: ${props => props.theme.primary};
         color: ${props => props.theme.neutral4};
         border: none;
         border-radius: 5px;
      }
   }
   & > div{
      width: 100%;
      margin: 40px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      img{
         width: 100%;
      }
      p{
         font-size: 24px;
      }
   }
   section{
      padding: 40px 0;
   }
   footer{
      margin: 0;
      padding: 50px 0;
   }
@media screen and (max-width: 1023.9px){
   h1{
      font-size: 2rem;
   }
   & > div p{
      font-size: 1rem;
   }
}
`;