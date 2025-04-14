import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Container, Header, TitleContainer, Campaigns, Info, VerMaisButton, Body, ButtonContainer } from "./styles";
import api from '../../services/api';
import Carousel from 'react-elastic-carousel';

export function CampanhasCarousel() {
    const [campaigns, setCampaign] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCampaigns() {
            const { data } = await api.get('campaigns/public'); 
            setCampaign(data);
        }
        loadCampaigns();
    }, []);

    const handleVerCampanhas = () => {
        navigate("/explorar"); 
    };

    const handleCampaignClick = (campaignId) => {
        navigate(`/detalhes-campanhas/${campaignId}`); 
    };

    return (
        <Body>
            <Container>
                <Header>
                    <TitleContainer>
                        <h1>Descubra campanhas</h1>
                    </TitleContainer>
                </Header>
                <Carousel itemsToShow={3} pagination={false} showArrows={true} itemPadding={[50, 20]}>
                    {campaigns && campaigns.map(campaign => (
                        <Campaigns 
                            key={campaign.id}
                            onClick={() => handleCampaignClick(campaign.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={campaign.url}
                                alt={campaign.title}
                                style={{ width: '100%', height: 200, objectFit: "cover", borderRadius: '8px 8px 0 0' }}
                            />
                            <Info>
                                <h2>{campaign.title}</h2>
                                <p>Meta: R$ {parseFloat(campaign.goal_amount).toLocaleString('pt-BR')}</p>
                                <p>Data de término: {new Date(campaign.end_date).toLocaleDateString('pt-BR')}</p>
                            </Info>
                        </Campaigns>
                    ))}   
                </Carousel>

                <ButtonContainer>
                    <VerMaisButton onClick={handleVerCampanhas}>Ver Campanhas</VerMaisButton>
                </ButtonContainer>
            </Container>
        </Body>
    );
}