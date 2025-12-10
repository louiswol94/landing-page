import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import licenceImg15 from "../../../assets/license-activation-illustrations-15.png";
import licenceImg25 from "../../../assets/license-activation-illustrations-25.png";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import Container from "../../common/Container";
import "./Hero.scss";

export default function Hero() {
  return (
    <Box className="hero">
      <Container>
        <Grid
          columns={{ initial: "1", md: "2" }}
          gap="1"
          width="auto"
          style={{ alignItems: "center" }}
        >
          <Box className="center-text-on-mobile">
            <img className="hero__image" src={licenceImg15} alt="License Activation image" />
          </Box>
          <Box>
            <Heading as="h2" size="3" className="freemius-title center-text-on-mobile hero__title">
              Worry less about updates breaking your site
            </Heading>
            <TestimonialCard />
          </Box>
        </Grid>

        <Grid
          columns={{ initial: "1", md: "2" }}
          gap="5"
          width="auto"
          className="hero__grid hero__grid--secondary"
          style={{
            alignItems: "center",
          }}
        >
          <Box>
            <Heading as="h2" size="3" className="freemius-title center-text-on-mobile">
              Eligible for a refund? We've got your back
            </Heading>
            <Text as="p" className="hero__sub-title center-text-on-mobile">
              Freemius will step in and issue a refund if terms and agreements are not respected by
              sellers.
            </Text>
          </Box>
          <Box className="center-text-on-mobile">
            <img
              className="hero__image hero__image--secondary"
              src={licenceImg25}
              alt="Eligible for a refund image"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
