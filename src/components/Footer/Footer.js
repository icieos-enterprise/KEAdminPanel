import React from "react";
import FooterLogo from "../../assets/footer-logo.svg";
import { styled } from "styled-components";
import TikTokIcon from "../../assets/tiktok.png";
import FacebookIcon from "../../assets/facebook.png";
import XIcon from "../../assets/x.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";
import { TelephoneFill } from "@styled-icons/bootstrap";
import { Envelope, Map } from "@styled-icons/boxicons-solid";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #404040;
  margin: 0 auto;

`;

const InnerContainer = styled.div`
<<<<<<< HEAD
  
=======
  max-width: 1300px;
>>>>>>> cc840acce01318a408e2ab43701aefa7dcf39346
  width: 100%;
  padding: 60px 80px;
  display: flex;
  gap: 80px;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap; /* Prevent wrapping on larger screens */


  @media only screen and (max-width: 750px) {
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    justify-content: flex-start;
  }

  @media only screen and (max-width: 620px) {
    gap: 100px;
  }

  @media only screen and (max-width: 580px) {
    gap: 40px;
    justify-content: space-between;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%; /* Set consistent width for large screens */

  @media only screen and (max-width: 580px) {
    width: 100%;
    background-color: green;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 370px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const OtherColumn = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;

  @media only screen and (max-width: 580px) {
    width: 45%;
  }

  @media only screen and (max-width: 370px) {
    width: 100%;
  }
`;

const LogoImage = styled.img`
  cursor: pointer;
  /* aspect-ratio: 1/1; */
  width: 200px;

  /* @media only screen and (max-width: 768px) {
    width: 50px;
  } */

  @media only screen and (max-width: 580px) {
    width: 100%;
  }

  @media only screen and (max-width: 370px) {
    width: 150px;
  }
`;

const SocialMediaWrapper = styled.div`
  padding-top: 0px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const EachMediaWrapper = styled.div``;


const InnerTextWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const InnerTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 29px;
  color: #fff;
`;

const InnerLinkWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const InnerLink = styled.p`
  margin: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #bfbfbf;
`;

const CopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #404040;
  border-top: 1px solid #bfbfbf;
`;

const CopyrightText = styled.p`
  padding: 20px;
  font-size: 12px;
  color: #fff;
  font-weight: 400;
  text-align: center;
`;

const IconImg = styled.img`
  width: 28px;
  aspect-ratio: 1/1;
`;

const IconPlusText = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;
`;

const SecondInnerColumn = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <FirstColumn>
            <LogoImage src={FooterLogo} alt="Kumzits" />
            <SocialMediaWrapper>
              <EachMediaWrapper>
                <IconImg src={TikTokIcon} alt="Tiktok" />
              </EachMediaWrapper>{" "}
              <EachMediaWrapper>
                <IconImg src={FacebookIcon} alt="Facebook" />
              </EachMediaWrapper>{" "}
              <EachMediaWrapper>
                <IconImg src={XIcon} alt="X" />
              </EachMediaWrapper>{" "}
              <EachMediaWrapper>
                <IconImg src={InstagramIcon} alt="Instagram" />
              </EachMediaWrapper>{" "}
              <EachMediaWrapper>
                <IconImg src={YoutubeIcon} alt="Youtube" />
              </EachMediaWrapper>
            </SocialMediaWrapper>
          </FirstColumn>
          <SecondColumn>
            <SecondInnerColumn>
              <OtherColumn>
                {[
                  {
                    title: "Kumzits Everywhere",
                    list: [
                      { text: "Home", url: "/" },
                      { text: "About", url: "/" },
                      { text: "Site Search", url: "/" },
                      { text: "Forum", url: "/" },
                      { text: "News", url: "/" },
                      { text: "Merchandise", url: "/" },
                      { text: "Donate", url: "/" },
                      { text: "Ads & Affiliates", url: "/" },
                    ],
                  },
                ].map((v, i) => {
                  return (
                    <InnerTextWrapper key={i}>
                      <InnerTitle>{v.title}</InnerTitle>
                      <InnerLinkWrapper>
                        {v.list.map((eachLink, key) => {
                          return (
                            <InnerLink key={key} onClick={() => {}}>
                              {eachLink.text}
                            </InnerLink>
                          );
                        })}
                      </InnerLinkWrapper>
                    </InnerTextWrapper>
                  );
                })}
              </OtherColumn>
              <OtherColumn>
                {[
                  {
                    title: "Studio/Production",
                    list: [
                      { text: "Portfolio", url: "/" },
                      { text: "Studio Pics & Gear", url: "/" },
                      { text: "Featured Videos", url: "/" },
                      { text: "Kol Isha Corner", url: "/" },
                      { text: "Production Agreement", url: "/" },
                      { text: "Price & Bookings", url: "/" },
                    ],
                  },
                ].map((v, i) => {
                  return (
                    <InnerTextWrapper key={i}>
                      <InnerTitle>{v.title}</InnerTitle>
                      <InnerLinkWrapper>
                        {v.list.map((eachLink, key) => {
                          return (
                            <InnerLink key={key} onClick={() => {}}>
                              {eachLink.text}
                            </InnerLink>
                          );
                        })}
                      </InnerLinkWrapper>
                    </InnerTextWrapper>
                  );
                })}
              </OtherColumn>
              <OtherColumn>
                {[
                  {
                    title: "Lyrics/Chords",
                    list: [
                      { text: "Lyrics and Chords Search", url: "/" },
                      { text: "Artist Search", url: "/" },
                      { text: "Your Favorites", url: "/" },
                      { text: "Your Setlists", url: "/" },
                      { text: "Submit a Song", url: "/" },
                      { text: "Report Corrections", url: "/" },
                      { text: "Feature Your Music Video", url: "/" },
                    ],
                  },
                ].map((v, i) => {
                  return (
                    <InnerTextWrapper key={i}>
                      <InnerTitle>{v.title}</InnerTitle>
                      <InnerLinkWrapper>
                        {v.list.map((eachLink, key) => {
                          return (
                            <InnerLink key={key} onClick={() => {}}>
                              {eachLink.text}
                            </InnerLink>
                          );
                        })}
                      </InnerLinkWrapper>
                    </InnerTextWrapper>
                  );
                })}
              </OtherColumn>
              <OtherColumn>
                {[
                  {
                    title: "Events",
                    list: [
                      { text: "The KE Mission", url: "/" },
                      { text: "Events & Concerts", url: "/" },
                      { text: "Post an Event", url: "/" },
                      { text: "Host or Sponsor", url: "/" },
                      { text: "Lead a Kumzits", url: "/" },
                      { text: "Manage a Kumzits Community", url: "/" },
                    ],
                  },
                ].map((v, i) => {
                  return (
                    <InnerTextWrapper key={i}>
                      <InnerTitle>{v.title}</InnerTitle>
                      <InnerLinkWrapper>
                        {v.list.map((eachLink, key) => {
                          return (
                            <InnerLink key={key} onClick={() => {}}>
                              {eachLink.text}
                            </InnerLink>
                          );
                        })}
                      </InnerLinkWrapper>
                    </InnerTextWrapper>
                  );
                })}
              </OtherColumn>
            </SecondInnerColumn>
            <SecondInnerColumn>
              <OtherColumn>
                {[
                  {
                    title: "Lessons",
                    list: [
                      { text: "Guitar Lessons", url: "/" },
                      { text: "Voice Lessons", url: "/" },
                      { text: "Teach With Us", url: "/" },
                    ],
                  },
                ].map((v, i) => {
                  return (
                    <InnerTextWrapper key={i}>
                      <InnerTitle>{v.title}</InnerTitle>
                      <InnerLinkWrapper>
                        {v.list.map((eachLink, key) => {
                          return (
                            <InnerLink key={key} onClick={() => {}}>
                              {eachLink.text}
                            </InnerLink>
                          );
                        })}
                      </InnerLinkWrapper>
                    </InnerTextWrapper>
                  );
                })}
              </OtherColumn>
              <OtherColumn>
                {[
                  {
                    title: "Photography",
                    list: [
                      { text: "Portfolio", url: "/" },
                      { text: "Book a Shoot", url: "/" },
                      { text: "Order Fine Arts", url: "/" },
                    ],
                  },
                ].map((v, i) => {
                  return (
                    <InnerTextWrapper key={i}>
                      <InnerTitle>{v.title}</InnerTitle>
                      <InnerLinkWrapper>
                        {v.list.map((eachLink, key) => {
                          return (
                            <InnerLink key={key} onClick={() => {}}>
                              {eachLink.text}
                            </InnerLink>
                          );
                        })}
                      </InnerLinkWrapper>
                    </InnerTextWrapper>
                  );
                })}
              </OtherColumn>
              <OtherColumn>
                {[
                  {
                    title: "Legal",
                    list: [
                      { text: "Terms and Conditions", url: "/" },
                      { text: "Privacy Policy", url: "/" },
                      { text: "Copyright", url: "/" },
                    ],
                  },
                ].map((v, i) => {
                  return (
                    <InnerTextWrapper key={i}>
                      <InnerTitle>{v.title}</InnerTitle>
                      <InnerLinkWrapper>
                        {v.list.map((eachLink, key) => {
                          return (
                            <InnerLink key={key} onClick={() => {}}>
                              {eachLink.text}
                            </InnerLink>
                          );
                        })}
                      </InnerLinkWrapper>
                    </InnerTextWrapper>
                  );
                })}
              </OtherColumn>
              <OtherColumn>
                <InnerTextWrapper>
                  <InnerTitle>Contact Us</InnerTitle>
                  <InnerLinkWrapper>
                    <IconPlusText>
                      <TelephoneFill size={24} color="#fff" />
                      <InnerLink style={{ fontWeight: 400 }}>
                        301-785-7159
                      </InnerLink>
                    </IconPlusText>{" "}
                    <IconPlusText>
                      <Envelope size={24} color="#fff" />
                      <InnerLink style={{ fontWeight: 400 }}>
                        info@kumzitseverwhere.com
                      </InnerLink>
                    </IconPlusText>{" "}
                    <IconPlusText>
                      <Map size={24} color="#fff" />
                      <InnerLink style={{ fontWeight: 400 }}>
                        142 N 11 St. Brooklyn, NY 11249
                      </InnerLink>
                    </IconPlusText>
                  </InnerLinkWrapper>
                </InnerTextWrapper>
              </OtherColumn>
            </SecondInnerColumn>
          </SecondColumn>
        </InnerContainer>
      </Container>
      <CopyrightContainer>
        <CopyrightText>
          ©2024 Kumzits Everywhere, LLC. All rights reserved.
        </CopyrightText>
      </CopyrightContainer>
    </>
  );
};

export default Footer;
