import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background:
    url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;
export const Frame = styled.div``;
export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  /* a {
    display: flex;
  } */
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px){
    height: 45px;
    width: 167px;
  }

`;
export const Group = styled.div``;
export const Profile = styled.div``;
export const Feature = styled(Container)``;
export const Dropdown = styled.div``;
export const Link = styled.p``;
export const PlayButton = styled.button``;
export const FeatureCallOut = styled.h2``;
export const Text = styled.p``;
export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: #f40612;
  }
`;