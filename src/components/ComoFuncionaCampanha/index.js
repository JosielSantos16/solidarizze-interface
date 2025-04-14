import React from 'react';
import {
  HowContainer,
  StepsContainer,
  Step,
  StepTitle,
  StepDescription,
} from './styles'; 

export const How = () => {
  return (
    <HowContainer>
      <StepsContainer>
        <Step number="1">
          <StepTitle>Crie sua Campanha</StepTitle>
          <StepDescription>
            Crie uma vaquinha online de forma rápida e fácil para ajudar uma causa, uma pessoa ou realizar um projeto especial.
          </StepDescription>
        </Step>
        <Step number="2">
          <StepTitle>Divulgue e Compartilhe</StepTitle>
          <StepDescription>
            Compartilhe sua campanha com amigos, familiares e nas redes sociais para alcançar o maior número de pessoas possível.
          </StepDescription>
        </Step>
        <Step number="3">
          <StepTitle>Saque Simples e Rápido</StepTitle>
          <StepDescription>
            Atingindo ou não a meta, o dinheiro arrecadado pode ser sacado de forma rápida e fácil para uma conta bancária, com taxas claras e transparentes.
          </StepDescription>
        </Step>
      </StepsContainer>
    </HowContainer>

    
  );
};

