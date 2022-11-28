import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export interface ISetEmailModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onInputChange: (event: any) => void;
  onResend: () => void;
  isMobile: boolean;
}

export default function SetupEmailTemplateModal({
  open,
  onClose,
  onConfirm,
  onInputChange,
  onResend,
  isMobile,
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
      // scroll="paper"
      aria-labelledby="provide-email"
      aria-describedby="provide-email-you-want-recepient-to-respond-to"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          minWidth: "33ch",
          px: {
            xs: theme.spacing(1),
            md: theme.spacing(8),
          },
          py: (theme) => theme.spacing(8),
          textAlign: "center",
        },
      }}
    >
      <DialogContent>
        <Stack spacing={12}>
          <Box>
            <Typography variant="subtitle1">Set Up Email Template</Typography>
          </Box>

          <Box>
            <Box
              mb={8}
              display="flex"
              alignItems="center"
              flexDirection={{ xs: "column", md: "row" }}
              width="100%"
            >
              <Box width="100%" mb={{ xs: 8, md: 0 }}>
                <TextField
                  fullWidth
                  placeholder="Microsoft"
                  id="organisationName"
                  name="organisationName"
                  label="Name of Organisation"
                  variant="outlined"
                />
              </Box>
              <Box width="100%" ml={{ xs: 0, md: 4 }}>
                <TextField
                  fullWidth
                  placeholder="Microsoft"
                  id="organisationName"
                  name="organisationName"
                  label="Name of Organisation"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box width="100%">
              <TextField
                fullWidth
                multiline
                id="body"
                placeholder="Description"
                name="body"
                label="Email Write up to Receipients"
                variant="outlined"
                rows={8}
              />
            </Box>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={4} width="100%" mt={12}>
          <Button
            variant="outlined"
            size={isMobile ? "small" : "large"}
            onClick={onResend}
            fullWidth
          >
            Use Default Info
          </Button>
          <Button
            variant="contained"
            size={isMobile ? "small" : "large"}
            onClick={onConfirm}
            fullWidth
          >
            Save
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
