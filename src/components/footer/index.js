import React from 'react';
import { Container } from './styles.js';
import LogoImg from '../../assets/solidarizze.png';
import { SolidarizzeImg, ContainerImg, DivLinks, DivContatos, Display } from './styles.js';

export const Footer = () => {
  return (
    <Container>
      <ContainerImg>
        <SolidarizzeImg src={LogoImg} alt="Solidarizze" />
      </ContainerImg>

      <Display>
        <DivLinks>
          <h1>Links Rápidos</h1>
          <ul>
            <li><a href="/quem-somos">Quem Somos</a></li>
            <li><a href="/vaquinhas">Vaquinhas</a></li>
            <li><a href="/criar-vaquinha">Criar Vaquinha</a></li>
            <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            <li><a href="/termos-uso">Termos de Uso</a></li>
          </ul>
        </DivLinks>

        <DivContatos>
          <h1>Contato</h1>
          <p>Email: contato@solidarizze.com</p>
          <p>Telefone: (11) 98765-4321</p>
          <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        </DivContatos>
      </Display>
    </Container>
  );
};

