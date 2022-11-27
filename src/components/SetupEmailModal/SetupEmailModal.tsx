import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, Stack, TextField, Typography, useTheme } from "@mui/material";

export interface ISetEmailModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onInputChange: (event: any) => void;
}

export default function SetupEmailModal({
  open,
  onClose,
  onConfirm,
  onInputChange,
}: ISetEmailModalProps) {
  const theme = useTheme();
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      aria-labelledby="provide-email"
      aria-describedby="provide-email-you-want-recepient-to-respond-to"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          px: {
            xs: theme.spacing(4),
            md: theme.spacing(32),
          },
          py: (theme) => theme.spacing(8),
          textAlign: "center",
        },
      }}
    >
      <DialogContent>
        <Stack spacing={12}>
          <Box>
            <Typography variant="subtitle1">Provide your email</Typography>
            <Typography variant="caption">
              Kindly provide the email you want the recipients to see and reply
              to.{" "}
            </Typography>
          </Box>

          <Box>
            <TextField
              fullWidth
              onChange={onInputChange}
              size="small"
              label="Email Address"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography variant="caption">
          We will send you a 4-digit code to verify this email.
        </Typography>
        <Box mt={2} sx={{ mx: "auto", minWidth: 200 }}>
          <Button
            variant="contained"
            onClick={onConfirm}
            size="large"
            fullWidth
          >
            Confirm Email
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
