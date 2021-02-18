import React from "react";
import Card from "./Components/Card/Card";
import { Container } from "./styled";

function Home() {
  return (
    <Container>
      <Card
        name="Projota"
        username="@projota"
        img="https://noticiasdatv.uol.com.br/media/_versions/artigos/projota-fala-mal-sarah-bbb-21-reproducao-globoplay_fixed_large.jpg"
        follower="3.8 milhões"
      />
         <Card
        name="Karol Conka"
        username="@karolconka"
        img="https://portalpopline.com.br/wp-content/uploads/2021/02/karol-conka-bbb-fernanda.jpg"
        follower="1.2 milhões"
      />
         <Card
        name="Lumena"
        username="@lumena.almeida"
        img="https://uploads.metropoles.com/wp-content/uploads/2021/02/11173825/lumena-3.jpg"
        follower="148 mil"
      />
    </Container>
  );
}

export default Home;
