import { FC } from "react";
import Cursos from "../../../assets/cursos.jpeg";

import {
  Image,
  Title,
  MidBar,
  GnralP,
  Overlay,
  GoRoute,
  MidBarP,
  TotalText,
  Container,
  MidBarSpan,
  InfoCourses,
  DiscountPrice,
  TextContainer,
  OriginalPrice,
  ImageContainer,
  PriceContainer,
  ImageTextContainer,
  DescriptionContainer,
} from "./Card.styled";
import { CardProps } from "./types";
import { truncateText } from "../../../commons/utils";

export const Card: FC<CardProps> = ({ cardInfo }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={Cursos} alt="My Image" />
        <ImageTextContainer>
          {cardInfo.age_range_min_max} años
        </ImageTextContainer>
      </ImageContainer>
      <MidBar>
        <MidBarP>
          Ruta de aprendizaje:
          <MidBarSpan>{cardInfo.number_of_courses} cursos</MidBarSpan>
        </MidBarP>
      </MidBar>
      <TextContainer>
        <DescriptionContainer>
          <Title>{cardInfo.name}</Title>
          <InfoCourses>4 cursos: 9 meses / 36 clases</InfoCourses>
          <GnralP>
            {truncateText({ text: cardInfo.call_out, length: 73 })}
          </GnralP>
        </DescriptionContainer>
        <PriceContainer>
          <TotalText>
            Total x {cardInfo.number_of_courses} cursos:
          </TotalText>
          <OriginalPrice>US${cardInfo.amount_usd}</OriginalPrice>
          <DiscountPrice>US${cardInfo.amount_after_discount_usd}</DiscountPrice>
        </PriceContainer>
      </TextContainer>
      <Overlay>
        <GoRoute>Ver ruta</GoRoute>
      </Overlay>
    </Container>
  );
};
