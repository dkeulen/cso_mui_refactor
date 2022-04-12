import { ContentCopy, Done, Close } from "@mui/icons-material";
import { Typography, ButtonBase } from "@mui/material";
import React from "react";

interface ITypographyCopy {
  children: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
}

const TypographyCopy: React.FC<ITypographyCopy> = ({ children, variant }) => {
  const [copyState, setCopyState] = React.useState<
    "none" | "success" | "failed"
  >("none");

  const handleCopy = () => {
    window.navigator.clipboard.writeText(children).then(
      () => {
        setCopyState("success");
        setTimeout(() => setCopyState("none"), 3000);
      },
      (err) => {
        setCopyState("failed");
        setTimeout(() => setCopyState("none"), 3000);
      }
    );
  };

  const CopyButton = () => {
    if (copyState === "success") {
      return (
        <ButtonBase
          focusRipple
          sx={{
            borderRadius: 4,
            color: "green",
            fontSize: "inherit",
            ml: 1
          }}
        >
          <Done sx={{ position: "absolute", right: -20 }} />
        </ButtonBase>
      );
    }
    if (copyState === "failed") {
      return (
        <ButtonBase
          focusRipple
          sx={{
            position: "relative",
            borderRadius: 4,
            color: "red",
            fontSize: "inherit",
            ml: 1
          }}
        >
          <Close sx={{ position: "absolute", right: -20 }} />
        </ButtonBase>
      );
    }
    return (
      <ButtonBase
        onClick={handleCopy}
        focusRipple
        sx={{
          borderRadius: 4,
          color: "primary.main",
          fontSize: "inherit",
          ml: 1
        }}
      >
        <ContentCopy fontSize="inherit" />
      </ButtonBase>
    );
  };

  return (
    <Typography variant={variant || "body2"}>
      {children}
      <CopyButton />
    </Typography>
  );
};

export default TypographyCopy;
