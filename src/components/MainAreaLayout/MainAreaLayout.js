import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  padding: ${(props) =>
    props.mainLayoutPadding ? props.mainLayoutPadding : "40px 10px 15px"};
  background: ${(props) => (props.backColor ? props.backColor : "#E7E6E6")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media only screen and (max-width: 767px) {
    padding: 20px 10px;
  }
`;

const InnerContainer = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  margin: 0 auto;
`;

const MainAreaLayout = ({ backColor, children, mainLayoutPadding }) => {
  const location = useLocation();
  return (
    <Container
      backColor={backColor}
      mainLayoutPadding={mainLayoutPadding}
      style={{
        aspectRatio: location?.pathname === "/ke-studio" ? "1920/1413" : "",
      }}
    >
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default MainAreaLayout;
