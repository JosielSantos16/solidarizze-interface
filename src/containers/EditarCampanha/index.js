import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import api from "../../services/api";
import { toast } from 'react-toastify';
import {
  Container,
  ContainerItens,
  Label,
  Input,
  TextArea,
  P,
  ErrorMessage,
  ButtonContainer, 
  ContainerButton,
  FileInput,
  Select,
  ImagePreview
} from "./styles";
import Header from "../../components/Header";

const schema = Yup.object().shape({
  title: Yup.string().required('O nome da campanha é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  goal_amount: Yup.number()
    .required('A meta de arrecadação é obrigatória')
    .positive('A meta deve ser um valor positivo'),
  end_date: Yup.date()
    .required('A data de término é obrigatória')
    .min(new Date(), 'A data de término deve ser no futuro'),
  category_id: Yup.number()
    .required('Selecione uma categoria')
    .positive()
});

export function EditarCampanha() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });
  const [file, setFile] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const categoriesResponse = await api.get('/categories');
        setCategories(categoriesResponse.data);
        
        const campaignResponse = await api.get(`/campaigns/${id}`);
        const campaign = campaignResponse.data;
        
        setValue("title", campaign.title);
        setValue("description", campaign.description);
        setValue("goal_amount", campaign.goal_amount);
        setValue("end_date", new Date(campaign.end_date).toISOString().split('T')[0]);
        setValue("category_id", campaign.category_id);
        setCurrentImage(campaign.url);
        
      } catch (error) {
        toast.error('Erro ao carregar dados');
        console.error("Erro ao carregar dados:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadData();
  }, [id, setValue]);

  const onSubmit = async campaignData => {
    const formData = new FormData();
    
    Object.keys(campaignData).forEach(key => {
        formData.append(key, campaignData[key]);
    });
    
    if (file) {
        formData.append('file', file);
    }

    try {
        await api.put(`/campaigns/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        toast.success('Campanha atualizada com sucesso!');
        navigate('/admin/vaquinhas');
    } catch (error) {
        console.error("Erro detalhado:", error);
        toast.error(error.response?.data?.error || 'Erro ao atualizar campanha');
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setCurrentImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDeleteCampaign = async () => {
    if (window.confirm('Tem certeza que deseja excluir esta campanha?')) {
      try {
        await api.delete(`/campaigns/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        toast.success('Campanha excluída com sucesso!');
        navigate('/admin/vaquinhas');
      } catch (error) {
        console.error("Erro ao excluir campanha:", error);
        toast.error(error.response?.data?.error || 'Erro ao excluir campanha');
      }
    }
  };

  if (isLoading) {
    return <Container>Carregando...</Container>;
  }

  return (
    <>
      <Header/>
      <Container>
        <ContainerItens>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <h1><b>Editar campanha</b></h1>
            <P>Atualize os dados da sua campanha</P>

            <Label>Nome da campanha</Label>
            <Input 
              placeholder="Digite o nome da campanha" 
              {...register("title")} 
              type="text" 
              error={errors.title?.message} 
            />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>

            <Label>Meta de arrecadação: </Label>
            <Input 
              placeholder="Digite a meta de arrecadação" 
              {...register("goal_amount")} 
              type="number" 
              error={errors.goal_amount?.message} 
            />
            <ErrorMessage>{errors.goal_amount?.message}</ErrorMessage>

            <Label>Até quando vai a campanha?</Label>
            <Input 
              placeholder="Digite a data de término" 
              {...register("end_date")} 
              type="date" 
              error={errors.end_date?.message} 
            />
            <ErrorMessage>{errors.end_date?.message}</ErrorMessage>

            <Label>Categoria:</Label>
            <Select {...register("category_id")} error={errors.category_id?.message}>
              <option value="">Selecione uma categoria</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
            <ErrorMessage>{errors.category_id?.message}</ErrorMessage>

            <Label>Imagem da campanha:</Label>
            {currentImage && (
              <ImagePreview src={currentImage} alt="Preview" />
            )}
            <FileInput 
              type="file" 
              onChange={handleFileChange} 
              accept="image/*" 
            />
            
            <Label>Descreva sua campanha:</Label>
            <TextArea 
              placeholder="Descreva sua campanha" 
              {...register("description")} 
              error={errors.description?.message} 
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <ButtonContainer>
              <ContainerButton type="button" onClick={handleDeleteCampaign} red>
                Excluir Campanha
              </ContainerButton>
              <ContainerButton type="submit">
                Salvar alterações
              </ContainerButton>
            </ButtonContainer>
          </form>
        </ContainerItens>
      </Container>
    </>
  );
}