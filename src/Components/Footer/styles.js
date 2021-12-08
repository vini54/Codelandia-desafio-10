import styled from 'styled-components';

export const Container = styled.footer`
margin: 50px 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
h2{
   font-weight: 500;
   color: ${props => props.theme.primary};
}
p{
   color: ${props => props.theme.neutral3};
   text-align: center;
}
`;