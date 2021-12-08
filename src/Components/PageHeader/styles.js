import styled from 'styled-components';

export const Container = styled.section`
background: linear-gradient(to bottom, rgba(19, 19, 31, 0), rgba(19, 19, 31, 1)) , url(${props => props.img}) no-repeat;
background-position: center;
background-size: cover;
height: 250px;
padding: 0 5%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
h2{
   color: ${props => props.theme.neutral4};
   font-size: 36px;
   font-weight: 500;
}
p{
   color: ${props => props.theme.neutral3};
}
`;