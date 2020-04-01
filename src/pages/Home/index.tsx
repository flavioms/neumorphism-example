import React from "react";
import Card from "../../components/Card";
import { Container } from "./styles";

export default function Home() {
  const data = [
    {
      id: 1,
      image:
        "https://adidas.com/com/apps/running_segmentation/assets/running.png",
      title: "Running",
      description: "Tênis leve e amortecido para qualquer distância."
    },
    {
      id: 2,
      image:
        "https://adidas.com/com/apps/running_segmentation/assets/street.png",
      title: "Running e Street",
      description:
        "Tênis de corrida que combina visual e performance para treinar com estilo."
    },
    {
      id: 3,
      image: "https://adidas.com/com/apps/running_segmentation/assets/exer.png",
      title: "Running e Academia",
      description:
        "Tênis de corrida para movimentos laterais rápidos e treinos de velocidade."
    },
    {
      id: 4,
      image:
        "https://adidas.com/com/apps/running_segmentation/assets/trail.png",
      title: "Running e Trilhas",
      description: "Tênis de corrida leve e aderente para corridas outdoor."
    }
  ];
  return (
    <Container>
      <h1>Encontre o tênis de corrida certo para você</h1>
      <ol>
        {data.map(item => (
          <dl>
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </dl>
        ))}
      </ol>
    </Container>
  );
}
