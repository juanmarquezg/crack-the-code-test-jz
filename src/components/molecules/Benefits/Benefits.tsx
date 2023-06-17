import benefits from "../../../assets/benefits.png";
import Icon1 from "../../../assets/Icon1.svg";
import Icon2 from "../../../assets/Icon2.svg";
import Icon3 from "../../../assets/Icon3.svg";
import Icon4 from "../../../assets/Icon4.svg";

import {
  Text,
  Title,
  Image,
  ContentRow,
  TextColumn,
  ImageColumn,
  RowContainer,
  IconContainer,
  BenefitsContainer,
} from "./Benefits.styled";

export const Benefits = () => {
  return (
    <BenefitsContainer>
      <Title>Beneficios de las rutas de aprendizaje</Title>
      <ContentRow>
        <ImageColumn>
          <Image src={benefits} alt="beneficios" />
          {/* Reemplaza "image-url" con la URL de tu imagen */}
        </ImageColumn>
        <TextColumn>
          <RowContainer>
            <IconContainer src={Icon1} />
            <Text>
              Desarrollar habilidades para <strong>resolver problemas.</strong>
            </Text>
          </RowContainer>
          <RowContainer>
            <IconContainer src={Icon2} />
            <Text>
              Crear a través de la <strong>tecnología.</strong>
            </Text>
          </RowContainer>
          <RowContainer>
            <IconContainer src={Icon3} />
            <Text>
              Desarrollar<strong>habilidades sociales.</strong>
            </Text>
          </RowContainer>
          <RowContainer>
            <IconContainer src={Icon4} />
            <Text>
              Explorar las posibilidades ilimitadas de su{" "}
              <strong>imaginación.</strong>
            </Text>
          </RowContainer>
        </TextColumn>
      </ContentRow>
    </BenefitsContainer>
  );
};
