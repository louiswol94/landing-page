import * as React from "react";
import { Box } from "@radix-ui/themes";
import "./Container.scss";

export default function Container({ children, className = "", ...props }) {
  return (
    <Box className={`container ${className}`} {...props}>
      {children}
    </Box>
  );
}
