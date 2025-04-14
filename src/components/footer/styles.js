import styled from 'styled-components';

export const Container = styled.div`
  background-color: #3da9fc;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const SolidarizzeImg = styled.img`
  height: 300px;
  margin-top: -70px;
`;

export const Display = styled.div`
  display: flex;
  justify-content: center; 
  align-items: flex-start;
  margin-top: -80px;
  padding-bottom: 70px;
  gap: 20px; 
`;

export const DivLinks = styled.div`
  border: 1px solid white;
  width: 40%;
  padding: 1rem;
  height: 300px;
  h1 {
    color: white;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export const DivContatos = styled.div`
  border: 1px solid white;
  width: 40%; 
  padding: 1rem;
  height: 300px;
  h1 {
    color: white;
  }
  p {
    color: white;
  }
`;