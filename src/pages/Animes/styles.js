import styled from 'styled-components';

export const Container = styled.div`
  section{
    margin: 50px 0;
  }
  & > div{
    margin: 50px 0;
  }
  section.cards{
    margin: 0;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 20px;
    div{
      min-width: 300px;
      width: 30%;
      height: 250px;
      justify-content: flex-end;
      button{
        display: none;
      }
      p{
        font-size: 14px;
      }
    }
  }
  footer{
    margin: 0;
    padding: 50px 0;
  }
@media screen and (max-width: 1023.9px){
  section.cards{
    justify-content: center;
    gap: 20px;
  }
}
`;