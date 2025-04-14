import React from 'react';
import Figura1 from '../../assets/figura1.png';
import Figura2 from '../../assets/figura2.png';
import Figura3 from '../../assets/figura3.png';
import Figura4 from '../../assets/figura4.png';
import Figura5 from '../../assets/figura5.png';
import Figura6 from '../../assets/figura6.png';

import {
  Div,
  Titulo,
  Container,
  Service,
  ServiceTitle,
  ServiceDescription,
  ImgFigura,
  ServiceGroup 
} from './styles';

export const Session = () => {
  return (
    <Div>
      <Titulo>Como Funciona?</Titulo>
      <hr />
      <Container>
        <ServiceGroup>
          <Service>
            <ServiceTitle>Escolha uma campanha que você deseja apoiar.</ServiceTitle>
            <ImgFigura src={Figura1}/>
            <ServiceDescription>
              Navegue por diversas campanhas e escolha aquela que mais combina com você.
            </ServiceDescription>
          </Service>

          <Service>
            <ServiceTitle>Clique em "Doar" e selecione o valor.</ServiceTitle>
            <ImgFigura src={Figura2}/>
            <ServiceDescription>
              Escolha o valor que deseja doar e clique no botão "Doar" para continuar.
            </ServiceDescription>
          </Service>

          <Service>
            <ServiceTitle>Complete o processo de pagamento de forma segura.</ServiceTitle>
            <ImgFigura src={Figura3}/>
            <ServiceDescription>
              Utilize nossos métodos de pagamento seguros para finalizar sua doação.
            </ServiceDescription>
          </Service>
        </ServiceGroup>

        <ServiceGroup>
          <Service>
            <ServiceTitle>Receba atualizações sobre o impacto da sua doação.</ServiceTitle>
            <ImgFigura src={Figura4}/>
            <ServiceDescription>
              Fique por dentro de como sua doação está ajudando a fazer a diferença.
            </ServiceDescription>
          </Service>

          <Service>
            <ServiceTitle>Compartilhe sua doação com amigos e familiares.</ServiceTitle>
            <ImgFigura src={Figura5}/>
            <ServiceDescription>
              Incentive outras pessoas a doar compartilhando sua experiência nas redes sociais.
            </ServiceDescription>
          </Service>

          <Service>
            <ServiceTitle>Veja o progresso da campanha em tempo real.</ServiceTitle>
            <ImgFigura src={Figura6}/>
            <ServiceDescription>
              Acompanhe o progresso da campanha e veja como cada doação faz a diferença.
            </ServiceDescription>
          </Service>
        </ServiceGroup>
      </Container>
    </Div>
  );
};
