import React from "react";
import { Container } from "./styles";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ image, title, description }) => {
  return (
    <Container>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href="/">Explorar Mais</a>
      <button>Comprar Agora</button>
    </Container>
  );
};

export default Card;
