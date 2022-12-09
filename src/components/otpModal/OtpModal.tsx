import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import tooltipIcon from "assets/tooltipIcon.svg";

export interface ISetEmailModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onInputChange: (event: any) => void;
  onResend: () => void;
  hideCaption?: boolean;
  captionText?: string;
}

export default function OtpModal({
  open,
  onClose,
  onConfirm,
  onInputChange,
  onResend,
  hideCaption,
  captionText,
}: ISetEmailModalProps) {
  const theme = useTheme();
  const [otp, setOtp] = React.useState("");
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const onChange = (e: any) => {
    setOtp(e);
    onInputChange(e);
  };

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
            md: theme.spacing(8),
          },
          py: (theme) => theme.spacing(8),
          textAlign: "center",
        },
      }}
    >
      <DialogContent sx={{ maxWidth: "28ch", margin: "auto" }}>
        <Stack spacing={12}>
          <Box>
            <Typography variant="subtitle1">Enter the OTP</Typography>
          </Box>

          <Box>
            <Typography variant="body2" textAlign="left">
              OTP
            </Typography>
            <MuiOtpInput
              value={otp}
              onChange={onChange}
              TextFieldsProps={{
                size: "small",
              }}
            />
            {!hideCaption && (
              <Box display="flex" alignItems="center">
                <img src={tooltipIcon} alt="" />
                <Typography variant="caption">
                  {captionText || "Check your email for your OTP"}
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="space-between" width="100%" mt={4}>
          <Button
            variant="outlined"
            size="large"
            onClick={onResend}
            sx={{ mx: 2 }}
          >
            Resend OTP
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ mx: 2 }}
            onClick={onConfirm}
            //  fullWidth
          >
            Confirm OTP
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
