import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import Dropzone from "components/Dropzone/Dropzone";
import SharedStepper from "components/SharedStepper/SharedStepper";
import TabButtons from "components/TabButtons/TabButtons";
import LogoWhite from "assets/logo-white.svg";
import { useNavigate } from "react-router-dom";

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

const steps = [
  { value: 1, label: "Upload Certificate" },
  { value: 2, label: "Name Field" },
  { value: 3, label: "Upload List" },
  { value: 4, label: "Preview" },
];

const Preview = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUpload = (data: File) => {
    console.log(data);
  };

  function createData(name: string, email: string) {
    return { name, email };
  }

  const rows = ["Recipient Name", "Recipient Email"];

  const data = [
    {
      name: "Henry",
      email: "henry@gmail.com",
    },
    {
      name: "Chibuike",
      email: "chibuike@gmail.com",
    },
    {
      name: "Judith",
      email: "judith@gmail.com",
    },
  ];

  const list = data?.map(({ name, email }) => createData(name, email));
  return (
    <Box
      pl={10}
      pr={20}
      sx={{
        height: isMobile ? "100%" : "100vh",
        pt: theme.spacing(5),
        pb: theme.spacing(10),
      }}
    >
      <Grid container>
        <Grid item xs={12} md={3} sx={{ height: "100%" }}>
          <Stack spacing={10}>
            <img src={LogoWhite} alt="" width={isMobile ? 126.8 : "50%"} />
            <SharedStepper orientation="vertical" steps={steps} current={4} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TabButtons activeTab={1} isMobile={isMobile} data={tabItems} />
            </Grid>
            <Grid item xs={12}>
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                marginBottom="30px"
              ></Box>
              <Box
                sx={{
                  border: `2px dashed ${theme.palette.common.white}`,
                  borderRadius: "8px",
                  position: "relative",
                }}
                px={4}
                py={2}
              >
                <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                  Recipients
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#0B0D27",
                    mt: 2,
                    overflowY: "scroll",
                    scrollbarWidth: "thin",
                    msOverflowStyle: "auto",
                    "::-webkit-scrollbar": {
                      display: "block",
                      width: "4px",
                      paddingBottom: "15rem",
                      height: "5px !important",
                      backgroundColor: "#7682F5",
                    },

                    "::-webkit-scrollbar-thumb": {
                      backgroundColor: "white",
                      borderRadius: "10px",
                      height: "5px",
                    },
                  }}
                >
                  {" "}
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          {rows?.map((props) => (
                            <TableCell>{props}</TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {list.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                marginTop="30px"
              >
                <Typography
                  variant="body1"
                  sx={{
                    width: "200px",
                    height: "48px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  Upload New List
                </Typography>
                <Box>
                  {" "}
                  <Button
                    sx={{
                      width: "200px",
                      height: "48px",
                      mr: 4,
                      border: "1px solid #fff",
                      color: "#fff",
                      "& .MuiButtonBase-root": {
                        backgroundColor: "red",
                      },
                      "&:hover": {
                        border: "none",
                      },
                    }}
                  >
                    Download to Print
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ width: "200px", height: "48px" }}
                  >
                    Email to Recipients
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Preview;
