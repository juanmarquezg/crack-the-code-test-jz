import {
  Text,
  Title,
  Button,
  Container,
  TextContainer,
} from "./HomeBanner.styled";

export const HomeBanner = () => {
  return (
    <Container>
      <TextContainer>
        <Text>Selector de cursos</Text>
        <Title>¡Te ayudamos a elegir el curso o ruta ideal!</Title>
        <Text>Descubre rápidamente el curso ideal para tu hij@</Text>
        <Button>Empezar</Button>
      </TextContainer>
    </Container>
  );
};
