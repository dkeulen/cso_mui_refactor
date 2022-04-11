import * as React from "react";
import { Badge, Button, IconButton, Tooltip } from "@mui/material";

interface ActionButtonProps {
  visibility: boolean;
  icon: JSX.Element;
  buttonText: string;
  badge?: number;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  visibility,
  icon,
  buttonText,
  badge,
  onClick
}) => {
  if (visibility) {
    // when summary sidebar is hidden, show regular button
    return (
      <Button color="inherit" sx={{ mr: 2 }} startIcon={icon} onClick={onClick}>
        {!badge && buttonText}
        {badge && (
          <Badge color="secondary" badgeContent={badge}>
            {buttonText}
          </Badge>
        )}
      </Button>
    );
  } else {
    // when summary sidebar is shown, show icon button
    return (
      <Tooltip title={buttonText}>
        <IconButton sx={{ mr: 2 }} onClick={onClick}>
          {!badge && icon}
          {badge && (
            <Badge color="secondary" badgeContent={badge}>
              {icon}
            </Badge>
          )}
        </IconButton>
      </Tooltip>
    );
  }
};

export default ActionButton;
