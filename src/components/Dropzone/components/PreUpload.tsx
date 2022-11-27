import { Box, Button, Grid, Theme, Typography } from "@mui/material";
import uploadIcon from "assets/uploadIcon.svg";
export interface IPreUploadProps {
  theme: Theme;
  onUploadClick: (data?: string) => void;
  fileName?: string;
}
const PreUpload = ({ theme, onUploadClick, fileName }: IPreUploadProps) => {
  return (
    <Grid container spacing={6}>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={uploadIcon} alt="" width="80" />
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body1" color={fileName && "success.main"}>
          {fileName ? fileName : "Drag and Drop here"}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ maxWidth: 200 }}
          onClick={() => onUploadClick(fileName)}
        >
          {fileName ? "Upload" : "Select"} File
        </Button>
        {!fileName && (
          <Typography variant="caption" color={theme.palette.grey[800]} mt={2}>
            (Maximum of 5 MB)
          </Typography>
        )}
      </Grid>
      {!fileName && (
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            px={4}
            height={40}
            display="flex"
            alignItems="center"
            sx={{
              background: theme.palette.action.disabledBackground,
              borderRadius: "8px",
            }}
          >
            <Typography variant="body2" color={theme.palette.grey[800]}>
              PDF, PNG, JPEG files are supported
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default PreUpload;
