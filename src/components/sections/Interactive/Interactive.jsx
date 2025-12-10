import * as React from "react";
import { Box, Grid, Heading, Link, Text } from "@radix-ui/themes";
import AccordionSection from "./AccordionSection/AccordionSection";
import PermissionsCard from "./PermissionsCard/PermissionsCard";
import { PermissionsProvider } from "../../../hooks/usePermissions";
import Container from "../../common/Container";
import "./Interactive.scss";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function Interactive() {
  return (
    <PermissionsProvider>
      <Box className="interactive">
        <Container style={{ marginBlockEnd: "50px" }}>
          <Heading
            as="h1"
            className="freemius-title center-text-on-mobile"
            style={{ marginBlockEnd: "80px" }}
          >
            Freemius Protects Your License
            <br />
            From Unauthorized Use
          </Heading>
        </Container>
        <Container>
          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="5"
            width="auto"
            style={{ alignItems: "start" }}
          >
            <Box className="permissions-card">
              <Text align="center" as="p" className="permissions-card__text">
                For delivery of security & feature updates, and license management,{" "}
                <Link className="permissions-card__link" href="#" target="_blank">
                  Plugin Plugin
                </Link>{" "}
                needs to <ArrowDownIcon style={{ verticalAlign: "middle" }} />
              </Text>

              <PermissionsCard />
            </Box>
            <Box>
              <AccordionSection />
            </Box>
          </Grid>
        </Container>
      </Box>
    </PermissionsProvider>
  );
}
