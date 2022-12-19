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
import { checkMissingFields } from "utils/validateExcel";

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

  React.useEffect(() => {
    context?.setCurrentStep(3);
    //  parseFile(context)
    if (!context?.uploaded?.tableData) {
      navigate("/");
    } else {
      console.log();
    }
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
                    key={row?.recipent_full_name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },

                      padding: 0,
                    }}
                  >
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{ color: !row?.recipent_full_name ? "red" : "" }}
                    >
                      {row?.recipent_full_name || (
                        <Typography
                          variant="overline"
                          color="red"
                          fontStyle="italic"
                          textTransform="capitalize"
                        >
                          [Missing Field]
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      {row?.recipient_email_address || (
                        <Typography
                          variant="overline"
                          color="red"
                          fontStyle="italic"
                          textTransform="capitalize"
                        >
                          [Missing Field]
                        </Typography>
                      )}
                    </TableCell>
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
            <Button
              onClick={() => navigate(-1)}
              size="small"
              sx={{
                width: "200px",
                height: "48px",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              Upload New List
            </Button>
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
              disableElevation
              disableFocusRipple
              disableRipple
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
              disabled={checkMissingFields(context?.uploaded?.tableData?.body)}
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
