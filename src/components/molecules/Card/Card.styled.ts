import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 304px;
  height: 450px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.15), 0 1px 13px rgba(0, 0, 0, 0.05);
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  padding: 20px;
  color: white;
  background-color: white;
  transition: bottom 0.3s ease;
  ${Container}:hover & {
    bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 158px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageTextContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  padding: 6px 20px 4px;
  font-size: 14px;
  background: hsla(0, 0%, 7%, 0.49);
  border-radius: 3px;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin: 0;
`;

export const GnralP = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
`;

export const InfoCourses = styled(GnralP)`
  color: rgba(0, 0, 0, 0.5);
  margin: 5px 0 15px 0;
`;

export const TotalText = styled.p`
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;

export const OriginalPrice = styled(GnralP)`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
  margin-top: 20px;
`;

export const DiscountPrice = styled.p`
  font-size: 20px;
  line-height: 21px;
  font-weight: 700;
  margin: 0;
`;

export const GoRoute = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 260px;
  height: 50px;
  overflow: hidden;
  background-color: #000;
  font-size: 20px;
  line-height: 21px;
  font-weight: 700;
  &:hover {
    background-color: #555;
  }
`;

export const MidBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(88, 58, 240);
  padding: 6px 0;
`;

export const MidBarP = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

export const MidBarSpan = styled.span`
  font-size: 20px;
  line-height: 21px;
  font-weight: 700;
  margin-left: 5px;
`;

export const TextContainer = styled.div`
  padding: 0px 30px 4px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 256px;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 20px;
`;

export const PriceContainer = styled.div``;
