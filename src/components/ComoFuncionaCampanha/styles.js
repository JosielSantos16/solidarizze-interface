import styled from 'styled-components';

export const HowContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: #094067;
  background-color: #FAFAFA;
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Step = styled.div`
  width: 30%;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }

  &::before {
    content: '${props => props.number}'; 
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const StepTitle = styled.h3`
  margin-top: 30px; 
  margin-bottom: 10px;
  color: #094067;
`;

export const StepDescription = styled.p`
  font-size: 14px;
  color: #555;
`;
