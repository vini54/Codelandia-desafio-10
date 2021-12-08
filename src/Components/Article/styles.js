import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   gap: 20px;
   .c-img{
      position: relative;
      img{
         mask-image: linear-gradient(to top, rgba(19, 19, 31, 0), rgba(19, 19, 31, 1));
      }
      button{
         background-color: ${props => props.theme.primary};
         color: ${props => props.theme.neutral4};
         border: none;
         border-radius: 5px;
         padding: 2px 15px;
         position: absolute;
         left: 5%;
         top: 5%;
      }
   }
   .c-content{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      p{
         font-size: 14px;
         width: 70%;
         color: ${props => props.theme.neutral3};
      }
      .title{
         font-size: 16px;
         width: 85%;
         color: ${props => props.theme.neutral4};
      }
      a{
         width: fit-content;
      }
      button{
         width: fit-content;
         padding: 5px 15px;
         background-color: ${props => props.theme.primary};
         border: none;
         border-radius: 5px;
         color: ${props => props.theme.neutral4};
         cursor: pointer;
      }
   }
`;