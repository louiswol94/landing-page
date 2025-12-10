import { Box, Grid, Text } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import jennyDoeImg from "../../../../assets/jenny-doe.jpg";
import quote from "../../../../assets/quote.svg";
import "./TestimonialCard.scss";

export default function TestimonialCard() {
  return (
    <>
      <Box className="testimonials-card__quote-container">
        <img src={quote} alt="Quote" className="testimonials-card__quote" />
      </Box>
      <Box className="testimonials-card">
        <Grid columns="1fr 3fr" gap="4" width="auto">
          <Box align="center">
            <Avatar.Root>
              <Avatar.Image
                className="testimonials-card__image"
                src={jennyDoeImg}
                alt="Jenny Doe"
              />
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar.Root>
          </Box>
          <Box>
            <Text as="p" className="testimonials-card__text">
              Our experience with Freemius has been very positive when it comes to software updates.
              Their rollout mechanism has been a lifesaver as it allows us to detect any bugs in the
              code before they cause any problems for our users. This not only saves us a lot of
              time, but it also helps us prevent website crashes, ensuring that our users have a
              seamless experience.
            </Text>
            <Text as="p" className="testimonials-card__name">
              Jane Doe
            </Text>
            <Text as="p" className="testimonials-card__company">
              Co Owner @ Awesome Plugin
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
