import styled from 'styled-components';

export const Container = styled.div`
   height: 100%;
   width: 100%;
   padding: 3%;
   background: linear-gradient(to bottom, rgba(19, 19, 31, 0), rgba(19, 19, 31, 1)) , url(${props => props.img});
   background-repeat: no-repeat, no-repeat;
   background-size: cover;
   background-position: center top;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   button{
      padding: 5px 15px;
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.neutral4};
      border: none;
      border-radius: 5px;
   }
   p{
      font-size: calc(1em + 40%);
   }
`;