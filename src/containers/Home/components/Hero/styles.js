import styled from "styled-components";
import { colors, styleConst } from "../../../../utils/constants";
import { Button } from "@material-ui/core";
import backgroundImage from "../../../../assets/hero-background.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${backgroundImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 50, 56, .5);
  transition: .3s;
`;

export const Title = styled.span`
  font-size: ${styleConst.FONT_24}px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 4px 4px 10px rgb(0, 0, 0);
  color: ${colors.fontColor};
`;

export const Description = styled.span`
  width: 100%;
  font-size: ${styleConst.FONT_16}px;
  text-align: center;
  text-shadow: 4px 4px 10px rgb(0, 0, 0);
  color: ${colors.fontColor};
`;

export const LearnMoreButton = styled(Button)`
  margin-top: ${styleConst.SPACE_30}px !important;
  background-color: ${colors.buttonColor} !important;
  color: ${colors.fontColor} !important;
`;
