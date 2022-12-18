import {
  Box,
  Button,
  Stack,
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
import { useNavigate, useOutletContext } from "react-router-dom";
import SetupEmailModal from "components/SetupEmailModal/SetupEmailModal";
import React, { useState } from "react";
import OtpModal from "components/otpModal/OtpModal";
import SetupEmailTemplateModal from "components/SetupEmailTemplateModal/SetupEmailTemplateModal";
import { paths } from "Routes";
import { parse } from "node:path/win32";

const Preview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const context: any = useOutletContext();
  const [pathName, setPathName] = useState<string>();
  const [modalControl, setModalControl] = useState({
    openOtp: false,
    openEmailSetup: false,
    openEmailTemplateSetup: false,
    step: 1,
  });

  // const parseFile = (file: any) => {
  //   setPathName(file?.uploaded?.list);
  //   Papa.parse(file, {
  //         header: true,
  //         delimiter: ",",
  //         skipEmptyLines: "greedy",
  //         complete: (results: any) => {
  //           let resultsData: ImportType[] = [];
  //         }})
  // };

  console.log("pathName", pathName);

  // const parseFile = (file: any) => {
  //   setLoading(true);
  //   setPathName(file.path);
  //   Papa.parse(file, {
  //     header: true,
  //     delimiter: ",",
  //     skipEmptyLines: "greedy",
  //     complete: (results: any) => {
  //       let resultsData: ImportType[] = [];
  //       try {
  //         for (const [index, result] of results.data.entries()) {
  //           const firstName = result["First Name"];
  //           const lastName = result["Last Name"];
  //           const dayOfBirth = result["Day of Birth"];
  //           const monthOfBirth = result["Month of Birth"];
  //           const yearOfBirth = result["Year of Birth"];
  //           const email = result.Email;
  //           const phone = `+${result["Phone number(234)"]}`;
  //         }}

  React.useEffect(() => {
    context?.setCurrentStep(3);
    //  parseFile(context)
  }, []);

  console.log("context", context);

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
    {
      name: "Chibuike",
      email: "chibuike@gmail.com",
    },
    {
      name: "Judith",
      email: "judith@gmail.com",
    },
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

  const handleContinue = () => {
    if (modalControl.step === 2 || modalControl.step === 4)
      return setModalControl((prev) => ({
        ...prev,
        openOtp: true,
      }));

    if (modalControl.step === 3)
      return setModalControl((prev) => ({
        ...prev,
        openEmailTemplateSetup: true,
      }));
    if (modalControl.step > 4) return navigate(paths.CERTIFICATES_SUCCESS);
  };

  const list = data?.map(({ name, email }) => createData(name, email));
  return (
    <Stack spacing={12}>
      <Box
        sx={{
          border: `2px dashed ${theme.palette.common.white}`,
          borderRadius: "8px",
          position: "relative",
          mt: 2,
        }}
        p={6}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
          Recipients
        </Typography>
        <Box
          sx={{
            backgroundColor: "#0B0D27",
            mt: 2,
            height: "550px",
            overflowY: "scroll",
            scrollbarWidth: "thin",
            msOverflowStyle: "auto",
            "::-webkit-scrollbar": {
              display: "block",
              width: "4px",
              paddingBottom: "15rem",
              height: "5px !important",
              backgroundColor: "#0B0D27",
            },

            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#7682F5",
              borderRadius: "10px",
              height: "5px",
            },
          }}
        >
          {" "}
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: isMobile ? 300 : 650,
                backgroundColor: (theme) => theme.palette.common.black,
                height: "0vh",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {context?.uploaded?.tableData?.headers?.map((val: any) => (
                    <TableCell key={val.field}>{val.title}</TableCell>
                  ))}
                  {/* {rows?.map((props) => (
                    <TableCell>{props}</TableCell>
                  ))} */}
                </TableRow>
              </TableHead>
              <TableBody>
                {context?.uploaded?.tableData?.body?.map((row: any) => (
                  <TableRow
                    key={row.receipent_full_name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },

                      padding: 0,
                    }}
                  >
                    <TableCell component="td" scope="row">
                      {row.receipent_full_name}
                    </TableCell>
                    <TableCell>{row.recipient_email_address}</TableCell>
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
        <>
          {isMobile ? (
            <Button
              sx={{
                width: "200px",
                height: "40px",
                mr: 4,
                mb: 4,
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
              Download
            </Button>
          ) : (
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
          )}
        </>

        <Box display="flex">
          <Button
            sx={{
              width: "200px",
              height: "40px",
              mr: 4,
              mb: 4,
              border: "1px solid #fff",
              color: "#fff",
              display: isMobile ? "none" : "flex",
              "& .MuiButtonBase-root": {
                backgroundColor: "red",
              },
              "&:hover": {
                border: "none",
              },
            }}
          >
            Download to Print
          </Button>{" "}
          {modalControl.step > 1 ? (
            <Button
              variant="contained"
              sx={{ px: 6, height: "40px", mb: 4 }}
              onClick={handleContinue}
            >
              Continue
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ width: "200px", height: "40px", mb: 4 }}
              onClick={() =>
                setModalControl((prev) => ({ ...prev, openEmailSetup: true }))
              }
            >
              Email to Recipients
            </Button>
          )}
        </Box>
        <SetupEmailModal
          open={modalControl.openEmailSetup}
          onClose={() =>
            setModalControl((prev) => ({ ...prev, openEmailSetup: false }))
          }
          onConfirm={() => {
            setModalControl((prev) => ({
              ...prev,
              openEmailSetup: false,
              step: 2,
            }));
          }}
          onInputChange={(e: any) => console.log(e)}
        />
        <OtpModal
          open={modalControl.openOtp}
          onClose={() =>
            setModalControl((prev) => ({ ...prev, openOtp: false }))
          }
          onConfirm={() =>
            setModalControl((prev) => ({
              ...prev,
              openOtp: false,
              step: ++prev.step,
            }))
          }
          onInputChange={(e: any) => console.log(e)}
          onResend={() => console.log("resend clicked")}
        />
        <SetupEmailTemplateModal
          open={modalControl.openEmailTemplateSetup}
          onClose={() =>
            setModalControl((prev) => ({
              ...prev,
              openEmailTemplateSetup: false,
            }))
          }
          onConfirm={() =>
            setModalControl((prev) => ({
              ...prev,
              openEmailTemplateSetup: false,
              step: 4,
            }))
          }
          onInputChange={(e: any) => console.log(e)}
          onResend={() => console.log("resend clicked")}
          isMobile={isMobile}
        />
      </Box>
    </Stack>
  );
};

export default Preview;
