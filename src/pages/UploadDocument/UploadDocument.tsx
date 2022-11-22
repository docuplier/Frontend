import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import TabButtons from "components/TabButtons/TabButtons";

const tabItems = [
  {
    id: 1,
    name: "Certificates",
  },
  {
    id: 2,
    name: "Badges",
  },
  {
    id: 3,
    name: "Tags",
  },
  {
    id: 4,
    name: "Invitations",
  },
];

const UploadDocument = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUpload = (data: File) => {
    console.log(data);
  };
  return (
    <Container
      sx={{
        height: isMobile ? "100%" : "100vh",
        pt: theme.spacing(5),
        pb: theme.spacing(10),
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4} sx={{ height: "100%" }}></Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <TabButtons activeTab={1} isMobile={isMobile} data={tabItems} />
            </Grid>
            <Grid item xs={12}>
              <Dropzone
                accept={{ "image/jpeg": [], "image/png": [], ".pdf": [] }}
                onUpload={handleUpload}
                theme={theme}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadDocument;
