import banner from "../../../assets/banner.png";
import {
  Container,
  ImgBanner,
  Paragraph,
  HeadingOne,
  TextContainer,
} from "./Banner.styled";

export const Banner = () => {
  return (
    <Container>
        <TextContainer>
          <HeadingOne>Rutas de aprendizaje</HeadingOne>
          <Paragraph>
            Nuestros programas de 3 a 5 cursos organizados en niveles para que
            tu hij@ profundice en el tema que le apasiona
          </Paragraph>
        </TextContainer>
        <ImgBanner src={banner} />
    </Container>
  );
};
