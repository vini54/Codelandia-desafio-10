import styled from 'styled-components';

export const Container = styled.div`
background-color: ${props => props.theme.neutral1};
color: ${props => props.theme.neutral4};
padding: 0 5%;
scroll-behavior: smooth;
   header{
      padding: 3% 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      h2{
         font-weight: 400;
         color: ${props => props.theme.primary};
      }
      ul{
         list-style: none;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 20px;
         flex-wrap: wrap;
         a{
            color: ${props => props.theme.neutral3};
            transition: .5s ease;
         }
         a.active{
            color: ${props => props.theme.neutral4};
            border-bottom: 2px solid ${props => props.theme.primary};
            transition: .5s ease;
         }
         button{
            margin-left: 20px;
            padding: 5px 15px;
            background: none;
            border: 1px solid ${props => props.theme.primary};
            border-radius: 20px;
            color: ${props => props.theme.neutral4};
         }
      }
   }
@media screen and (max-width: 767.9px){
   header{
      flex-direction: column;
      h2{
         font-size: 2rem;
      }
      ul button{
         margin: 10px 0;
      }
   }
}
@media screen and (min-width: 1200px){
   padding: 0 10%;
}
`;