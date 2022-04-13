import React from "react";
import { Avatar, Box, Button, Card, ListItemAvatar } from "@mui/material";
import { users } from "../../global/shared/helpers/users";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";

export const UsersList = (props) => {
  const { inputValue, handleListItemClick } = props;

  const results = users.filter((result) => {
    if (inputValue === "") {
      return result;
    } else {
      return result.name.toLowerCase().includes(inputValue);
    }
  });

  return (
    <Box>
      {results.map((user, id) => (
        <Box sx={{ pb: "3px" }} key={id}>
          <Card variant="outlined">
            <Button
              sx={{ padding: "20px 65px" }}
              fullWidth
              onClick={() => handleListItemClick(user)}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              {user.mail}
            </Button>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
