import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/userContext";
import api from "../../services/api";
import { toast } from "react-toastify";
import { 
  Container, 
  HeaderSection, 
  CampaignList, 
  CampaignItem, 
  Button, 
  CreateButton, 
  EmptyMessage,
  DivLeft,
  DivRight,
  ButtonGroup,
  CampaignContent,
  LoadingMessage
} from "./styles";
import Header from "../../components/Header";
import { Footer } from "../../components/footer";

export function Admin() {
  const { userData, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserCampaigns = async () => {
    try {
        const { data } = await api.get("/campaigns/private/list");
        setCampaigns(data);
    } catch (error) {
        toast.error("Erro ao carregar campanhas");
        console.error("Erro ao buscar campanhas:", error.response?.data || error.message);
    } finally {
        setLoading(false);
    }
};

  const handlePublishCampaign = async (id) => {
    try {
      await api.put(`/campaigns/${id}/public`);
      toast.success("Campanha publicada com sucesso!");
      fetchUserCampaigns();
    } catch (error) {
      console.error("Erro ao publicar campanha:", error.response?.data || error.message);
      toast.error("Erro ao publicar campanha");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    fetchUserCampaigns();
  }, [isAuthenticated, userData?.id, location.pathname]);

  return (
    <>
      <Header/>
      <Container>
        <HeaderSection>
          <h1>Minhas Campanhas</h1>
          <CreateButton onClick={() => navigate("/campanha")}>+ Criar Nova</CreateButton>
        </HeaderSection>

        {loading ? (
          <LoadingMessage>Carregando campanhas...</LoadingMessage>
        ) : campaigns.length === 0 ? (
          <EmptyMessage>
            Nenhuma campanha encontrada.
            <Button onClick={fetchUserCampaigns}>Recarregar</Button>
          </EmptyMessage>
        ) : (
          <CampaignList>
            {campaigns.map(campaign => (
              <CampaignItem key={campaign.id}>
                <DivLeft>
                  <img 
                    src={campaign.url} 
                    alt={campaign.title} 
                  />
                </DivLeft>
                <DivRight>
                  <CampaignContent>
                    <h3>{campaign.title}</h3>
                    <p>{campaign.description}</p>
                    <ButtonGroup>
  <Button onClick={() => navigate(`/admin/editar-campanha/${campaign.id}`)}>
    Editar
  </Button>
  {campaign.is_private && (
    <Button primary onClick={() => handlePublishCampaign(campaign.id)}>
      Publicar
    </Button>
  )}
</ButtonGroup>
                  </CampaignContent>
                </DivRight>
              </CampaignItem>
            ))}
          </CampaignList>
        )}
      </Container>
      <Footer/>
    </>
  );
}