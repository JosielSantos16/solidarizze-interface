import styled from "styled-components";

export const Div = styled.div`
  padding: 10px;
  background-color: #3da9fc;
  margin-top: -10px;

  hr {
    height: 2px;
    background-color: white;
    border: none;
  }
`;

export const Titulo = styled.h1`
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ServiceGroup = styled.div`
  display: flex;
  width: 100%;
`;

export const Service = styled.div`
  color: white;
  width: 40%; 
  text-align: center;
  border: 1px solid white;
`;

export const ServiceTitle = styled.h2`
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 10px;

`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  padding: 20px;
`;

export const ImgFigura = styled.img`
  height: 190px;
`;