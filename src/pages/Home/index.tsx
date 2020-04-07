import React, { useState } from "react";
import Card from "../../components/Card";
import { Container, Form, Input, Textarea, Button } from "./styles";

export default function Home() {
  const data = [
    {
      id: 1,
      image:
        "https://adidas.com/com/apps/running_segmentation/assets/running.png",
      title: "Running",
      description: "Tênis leve e amortecido para qualquer distância.",
    },
    {
      id: 2,
      image:
        "https://adidas.com/com/apps/running_segmentation/assets/street.png",
      title: "Running e Street",
      description:
        "Tênis de corrida que combina visual e performance para treinar com estilo.",
    },
    {
      id: 3,
      image: "https://adidas.com/com/apps/running_segmentation/assets/exer.png",
      title: "Running e Academia",
      description:
        "Tênis de corrida para movimentos laterais rápidos e treinos de velocidade.",
    },
    {
      id: 4,
      image:
        "https://adidas.com/com/apps/running_segmentation/assets/trail.png",
      title: "Running e Trilhas",
      description: "Tênis de corrida leve e aderente para corridas outdoor.",
    },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <Container>
      <h1>Encontre o tênis de corrida certo para você</h1>
      <ol>
        {data.map((item) => (
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

      <section>
        <h1>Entre em contato conosco!</h1>
        <Form>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
          <Input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Assunto"
          />
          <Textarea
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Como podemos ajudar?"
          />
          <Button type="button">Enviar</Button>
        </Form>
      </section>
    </Container>
  );
}
