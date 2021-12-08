import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 60px;
   background-color: ${props => props.theme.neutral2};
   border-radius: 10px;
   padding: 10px;
   display: flex;
   input{
      width: 100%;
      background: none;
      border: none;
      outline: none;
      color: ${props => props.theme.neutral4};
      font-size: 16px;
   }
   .icon{
      height: 100%;
      width: 24px;
      color: ${props => props.theme.neutral3};
      cursor: pointer;
   }
`;