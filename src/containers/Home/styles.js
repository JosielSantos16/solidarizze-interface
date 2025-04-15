import styled from "styled-components";
import BannerImg from '../../assets/baner.jpeg'

export const Banner = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
height: 630px;
background-image: url(${BannerImg});
background-size: cover;
background-position: center;
text-align: center;
`;


export const SolidarizzeImg = styled.img`
height: 450px;
margin-top: -50px;
margin-right: 700px;
`;


export const Descricao = styled.p`
margin-right: 700px;
color: white;
margin-top: -140px;
font-weight: bold;
font-size: 25px;
`
export const Introducao = styled.div`
height: 300px;
background: linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%);
padding: 20px;
text-align: center;

`

export const Titulo = styled.h1`
font-size: 35px;
margin-top: 20px;
margin-bottom: 20px;
color: white;
text-align: center;
`

export const Description = styled.p`
margin-left: 250px;
margin-right: 250px;
font-size: 25px;
color: white;
`

export const ContainerDivider = styled.div`
background-color: #FAFAFA;
`

