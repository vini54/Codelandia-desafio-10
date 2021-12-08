import styled from 'styled-components';

export const Container = styled.div`
padding: 2% 0;
   section{
      padding-top: 50px;
   }
   .intro{
      padding: 5% 0;
      h1{
         font-weight: 500;
      }
      p{
         color: ${props => props.theme.neutral3};
      }
      max-width: 500px;
   }
   .destaques{
      height: 350px;
      display: flex;
      gap: 20px;
      .main{
         height: 100%;
         width: 65%;
      }
      .side{
         width: 35%;
         height: 100%;
         display: flex;
         flex-direction: column;
         gap: 20px;
         p{
            font-size: 14px;
         }
      }
   }
   section.articles{
      margin-top: 40px;
      display: flex;
      gap: 10px;
      max-height: 1000px;
      & > div{
         width: calc(65% - 20px);
         display: flex;
         flex-direction: column;
         gap: 20px;
         overflow-y: scroll;
         ::-webkit-scrollbar{
            width: 20px;
         }
         ::-webkit-scrollbar-track{
            background-color: ${props => props.theme.neutral2};
            border-radius: 5px;
         }
         ::-webkit-scrollbar-thumb{
            background-color: ${props => props.theme.primary};
            border: 5px solid transparent;
            background-clip: content-box;
            border-radius: 100px;
         }
      }
      aside{
         width: 35%;
         display: flex;
         flex-direction: column;
         h2{
            width: 75%;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 2px solid ${props => props.theme.primary};
         }
         & > div{
            height: 80%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            div{
               height: 40%;
            }
            div p{
               font-size: 16px;
            }
         }
      }
   }
@media screen and (max-width: 767.9px){
   .destaques{
      height: auto;
      flex-direction: column;
      .main{
         height: 300px;
         width: 100%;
      }
      .side{
         height: 150px;
         width: 100%;
         flex-direction: row;
      }
   }
   section.articles{
      max-height: none;
      flex-direction: column;
      & > div{
         max-height: 1000px;
         width: 100%;
      }
      aside{
         width: 100%;
      }
      aside > div{
         justify-content: center;
         flex-direction: row;
         flex-wrap: wrap;
         div{
            width: 320px;
            min-height: 250px;
         }
      }
   }
}
@media screen and (max-width: 424.9px){
   .destaques .side{
      height: 300px;
      flex-direction: column;
   }
   .articles > div div {
      flex-direction: column;
   }
}
`;