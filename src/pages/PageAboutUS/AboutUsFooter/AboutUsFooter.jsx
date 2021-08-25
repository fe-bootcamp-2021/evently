/* import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./AboutUsFooterStyle";

export default function AboutUsFooter() {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
} */

import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function AboutUsFooter() {
  return (
    <>
      <div className="text-sm px-8 text-center flex-none py-4 space-x-3">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="linkedin-link"
        >
          <i>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          aria-label="facebook-link"
        >
          <i>
            <FontAwesomeIcon icon={faFacebookF} />
          </i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          aria-label="twitter-link"
        >
          <i>
            <FontAwesomeIcon icon={faTwitter} />
          </i>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          aria-label="github-link"
        >
          <i>
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </a>
      </div>
      <FontAwesomeIcon icon={faCopyright} />
      Copyright 2021
    </>
  );
}
