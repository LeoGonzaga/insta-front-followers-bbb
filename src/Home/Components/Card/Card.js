import React from "react";

import {
  ContainerCard,
  ImageBackground,
  Username,
  Name,
  Followers,
  TextFollowers,
  Button,
  ContainerInfos,
  ContainerImage,
} from "./styled";

function Card({ name, username, img, follower }) {
  return (
    <ContainerCard>
      <ContainerImage img={img}>
        <ImageBackground src={img} />
      </ContainerImage>
      <ContainerInfos>
        <Name>{name}</Name>
        <Username>{username}</Username>
        <Followers>{follower}</Followers>
        <TextFollowers>seguidores</TextFollowers>
        <Button>Ver perfil</Button>
      </ContainerInfos>
    </ContainerCard>
  );
}

export default Card;
