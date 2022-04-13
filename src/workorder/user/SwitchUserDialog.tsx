import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { UsersList } from "./UserList";
import { IUser } from "../../global/shared/helpers/users";
import CircularProgress from "@mui/material/CircularProgress";

interface SwitchUserDialogProps {
  open: boolean;
  selectedValue: IUser;
  onClose: (value: IUser) => void;
  users: IUser[];
}

export const SwitchUserDialog = (props: SwitchUserDialogProps) => {
  const { onClose, selectedValue, open } = props;
  const [inputText, setInputText] = React.useState("");
  const timerRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: IUser) => {
    onClose(value);
  };

  const inputHandler = (e) => {
    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      setInputText(e.target.value.toLowerCase());
      setIsLoading(false);
    }, 1300);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box p={"5px"}>
        <DialogTitle sx={{ textAlign: "center" }}>Switch user</DialogTitle>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
          onChange={inputHandler}
          placeholder="Search for user..."
          size="small"
          style={{ width: "100%", padding: "0 5px 15px 5px" }}
        />
        {!isLoading ? (
          <UsersList
            handleListItemClick={handleListItemClick}
            inputValue={inputText}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              overflowY: "hidden"
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Dialog>
  );
};
