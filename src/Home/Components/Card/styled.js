import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 440px;
  background-color: #191a1d;
  margin: 0px 20px;
  border-radius: 20px;
  flex-direction: column;
  color: #fff;
`;

export const ContainerImage = styled.div`
  height: 180px;
  width: 100%;
  background-color: blue;
  margin-bottom: 20px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-size: 300px 220px;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.img})`};
`;

export const ImageBackground = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const ContainerInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 40px;
`;

export const Username = styled.span`
  font-size: 14px;
`;

export const Followers = styled.span`
  font-size: 40px;
  margin-top: 20px;
`;
export const TextFollowers = styled.span`
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: #0fb250;
  height: 45px;
  width: 230px;
  border-radius: 40px;
  border: none;
  margin-top: 30px;
  color: #fff;
`;
