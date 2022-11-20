import { Box, Grid, Typography } from "@mui/material";
import certificate from "assets/certificate.svg";
import badge from "assets/badge.svg";
import tag from "assets/tag.svg";
import invitation from "assets/invitation.svg";

const data = [
  {
    logo: certificate,
    title: "Certificates",
    description:
      "Diam senectus eleifend nunc id sem dictum. Aliquet mauris consectetur eu dignissim et congue odio. Enim, viverra interdum iaculis diam.",
  },
  {
    logo: badge,
    title: "Badges",
    description:
      "Diam senectus eleifend nunc id sem dictum. Aliquet mauris consectetur eu dignissim et congue odio. Enim, viverra interdum iaculis diam.",
  },
  {
    logo: tag,
    title: "Tags",
    description:
      "Diam senectus eleifend nunc id sem dictum. Aliquet mauris consectetur eu dignissim et congue odio. Enim, viverra interdum iaculis diam.",
  },
  {
    logo: invitation,
    title: "Invitations",
    description:
      "Diam senectus eleifend nunc id sem dictum. Aliquet mauris consectetur eu dignissim et congue odio. Enim, viverra interdum iaculis diam.",
  },
];

const UseCasesSection = () => {
  return (
    <Grid container spacing={10} p={16}>
      <Grid item width="100%">
        <Typography variant="h1" textAlign="center">
          Use Cases
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={5}>
          {data.map((v) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Box>
                <img src={v.logo} alt="" width="100%" />
              </Box>
              <Typography variant="h4">{v.title}</Typography>
              <Typography variant="body1" textAlign="center">
                {v.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UseCasesSection;
