import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
export interface ISetEmailModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data?: { name: string; email: string }) => void;
  onInputChange: (event: any) => void;
  productName?: string;
  loading: boolean;
}

const schema = Yup.object({
  email: Yup.string()
    .email("Email is not valid")
    .required("Email field is required"),
}).required();

export default function SetupEmailModal({
  open,
  onClose,
  onConfirm,
  productName,
  loading,
}: ISetEmailModalProps) {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const onSubmit = (data: any) => {
    onConfirm({ ...data, name: productName });
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
            <Controller
              name="email"
              control={control}
              render={({ field }: any) => (
                <TextField
                  {...field}
                  error={errors?.email?.message}
                  fullWidth
                  size="small"
                  label="Email Address"
                  InputLabelProps={{ shrink: true }}
                  helperText={errors?.email?.message}
                />
              )}
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
            type="submit"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            size="large"
            fullWidth
            disabled={loading}
            startIcon={loading && <CircularProgress size={16} />}
          >
            Confirm Email
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
