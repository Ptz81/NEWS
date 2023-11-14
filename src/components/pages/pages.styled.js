import styled from 'styled-components';

export const ContainerHome = styled.div`
 min-height: calc(100vh - 50px);
     display: flex;
     align-items: center;
     justify-content: center;
     background-size: cover;
`
export const TitleHome = styled.h1`
 font-weight: 500;
     font-size: 84px;
     text-align: center;
`
export const TitleNews = styled.h2`
 font-weight: 500;
     font-size: 24px;
     text-align: center;
`
export const NewsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 50px);
`;

export const NewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;