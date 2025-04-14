import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  font-family: 'Arial', sans-serif;
  margin: 0 auto 10rem auto; 
  margin-top: 25px;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    color: #094067;
    margin: 0;
  }
`;

export const CampaignList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CampaignItem = styled.div`
  display: flex;
  flex-direction: column; // mobile first
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    flex-direction: row; // desktop
  }
`;

export const DivLeft = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: auto;
  }
`;


export const DivRight = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CampaignContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    margin: 0 0 0.5rem 0;
    color: #094067;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    margin: 0 0 1rem 0;
    font-size: 0.9rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: 4.2em; // cerca de 3 linhas
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${props => props.primary ? ' #3da9fc;' : '#f0f0f0'};
  color: ${props => props.primary ? 'white' : '#333'};
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  font-size: 0.9rem;
  
  &:hover {
    background: ${props => props.primary ? '#0055aa' : '#e0e0e0'};
  }
`;

export const CreateButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #F4C542;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #0055aa;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  border: 1px dashed #e0e0e0;
  border-radius: 8px;
  margin-top: 1rem;
  
  ${Button} {
    margin-top: 1rem;
    display: inline-block;
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  padding: 2rem;
  color: #666;
`;