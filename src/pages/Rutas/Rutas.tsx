import {
  Container,
  CardContainer,
  CardsContainer,
  BannerContainer,
  SectionContainer,
  ButtonListContainer,
} from "./Rutas.styled";
import { items } from "./items";

import {
  Card,
  Banner,
  Benefits,
  HomeBanner,
  ButtonList,
  NavigationBar,
} from "../../components/molecules";
import {} from "../../components/molecules";
import { apiMock } from "../../commons/utils/apiMock";

// import { useLearningPaths } from "../../hooks/useLearningPaths";

export const Rutas = () => {
  // const { learningRoutesQuery } = useLearningPaths();

  return (
    <>
      <Container>
        <NavigationBar />
        <BannerContainer>
          <Banner />
        </BannerContainer>
        <SectionContainer>
          <ButtonListContainer>
            <ButtonList items={items} />
          </ButtonListContainer>
           {/* <CardsContainer>
            {learningRoutesQuery.isLoading ? (
              <></>
            ) : (
              learningRoutesQuery.data?.all.map((item, index) => (
                <CardContainer key={index}>
                  <Card cardInfo={item} />
                </CardContainer>
              ))
            )}
          </CardsContainer> */}
          <CardsContainer>
            {apiMock.map((item, index) => (
              <CardContainer key={index}>
                <Card cardInfo={item} />
              </CardContainer>
            ))}
          </CardsContainer>
          <HomeBanner />
          <Benefits />
        </SectionContainer>
      </Container>
    </>
  );
};
