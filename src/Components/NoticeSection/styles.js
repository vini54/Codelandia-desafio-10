import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-direction: column;
gap: 20px;
h2{
   width: 50%;
   margin-bottom: 10px;
   padding-bottom: 5px;
   border-bottom: 2px solid ${props => props.theme.primary};
}
& > div{
   display: flex;
   justify-content: center;
   gap: 20px;
   flex-wrap: wrap;
   div{
      width: 30%;
      min-width: 300px;
      height: 250px;
   }
   p{
      font-size: 14px;
   }
}
`;