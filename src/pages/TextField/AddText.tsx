import React, { useRef, useState } from "react";
// import Select from "react-select";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { paths } from "Routes";
import { styled } from "@mui/material";
// @ts-ignore
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
// @ts-ignore
import { FONTS } from "constants/appConstants";
import { pxToRem } from "utils/pxToRem";
import { number } from "yup/lib/locale";

const AddText = () => {
  const [dimension, setDimension] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const [displayTextBox, setDisplayTextBox] = useState(false);
  const [selectedFont, setSelectedFont] = useState(FONTS[0]?.value);
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>();
  console.log("ref", ref);
  const draggableRef = useRef<HTMLDivElement>();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = useOutletContext();

  const eventLogger = (e: DraggableEvent, data: DraggableData) => {
    const val = ref?.current?.getBoundingClientRect();
    console.log("val", val);
    const draggableVal = draggableRef?.current?.getBoundingClientRect();
    console.log("draggableVal", draggableVal);
    setDimension({
      left: val?.left! - draggableVal?.left!,
      right: val?.right! - draggableVal?.right!,
      bottom: val?.bottom! - draggableVal?.bottom!,
      top: val?.top! - draggableVal?.top!,
      x: val?.x! - draggableVal?.x!,
      y: val?.y! - draggableVal?.y!,
      width: val?.width!,
      height: val?.height!,
    });
  };

  console.log("dimen", dimension);

  const handleTextBox = () => {
    setDisplayTextBox(true);
  };

  React.useEffect(() => {
    context?.setCurrentStep(1);
  }, []);

  const handleFontChange = (evt: any) => {
    const val = evt.target.value;
    setSelectedFont(val);
  };

  return (
    <Stack spacing={12}>
      <Box display="flex" width="100%" justifyContent="center">
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          sx={{
            //  backgroundColor: "red",
            "@media screen and (max-width:768px)": {
              width: "100%",
            },
          }}
          //   flexWrap="wrap"
        >
          {" "}
          <Box display="flex" alignItems="flex-end" mx={6}>
            {" "}
            <Button
              variant="contained"
              fullWidth={isMobile}
              sx={{
                height: "48px",
                px: isMobile ? 4 : 12,
              }}
              onClick={() => handleTextBox()}
            >
              {isMobile ? "Add Text" : "Add A Text Box"}
            </Button>
          </Box>
          <Box mx={6} width="28%">
            <Typography variant="body2">Select Font</Typography>
            <FormControl fullWidth size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedFont}
                onChange={handleFontChange}
                sx={{
                  height: "48px",
                }}
                MenuProps={{ PaperProps: { sx: { maxHeight: 250 } } }}
                IconComponent={KeyboardArrowDownIcon}
              >
                {FONTS.map((font: any) => (
                  <MenuItem value={font.value}>{font.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: `2px dashed ${theme.palette.common.white}`,
          borderRadius: "8px",
        }}
        p={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box position="relative">
          <Box ref={ref}>
            <img
              src={context?.uploaded?.doc}
              style={{
                position: "relative",
                margin: "auto",
                textAlign: "center",
              }}
              width="100%"
            />
          </Box>
          <Box
            sx={{ position: "absolute", top: dimension?.top }}
            ref={draggableRef}
          >
            {displayTextBox && (
              <Draggable
                axis="both"
                handle=".handle"
                position={undefined}
                grid={[25, 25]}
                bounds={{
                  left: dimension?.left!,
                  right: dimension?.right!,
                  top: dimension?.top!,
                  bottom: dimension?.bottom!,
                }}
                scale={1}
                // onStart={eventLogger}
                onDrag={eventLogger}
                onStop={eventLogger}
              >
                <div className="handle">
                  {" "}
                  <Box component="form">
                    <Box
                      width={{ xs: 200, sm: "100%", md: 350 }}
                      height="31.5px"
                      borderRadius="5px"
                      display="flex"
                      justifyContent="center"
                      textAlign="center"
                      alignItems="center"
                      sx={{
                        cursor: "move",
                        border: "1px solid #3B4CF1",
                        color: "#0B0D27",
                      }}
                    >
                      {" "}
                      <Typography
                        fontSize={{ sm: pxToRem(8), md: pxToRem(14) }}
                        sx={{
                          fontFamily: selectedFont,
                        }}
                        variant="body2"
                        // color="#8F9099"
                      >
                        {" "}
                        Drag This Text Box to Preferred Name Position
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </Draggable>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        marginTop="30px"
        sx={{
          flexWrap: "Wrap",
        }}
      >
        <Button
          sx={{
            height: "48px",
            border: "1px solid #fff",
            color: "#fff",
            px: 14,
            mb: 4,

            "@media screen and (max-width:768px)": {
              px: 6,
            },
            "&:hover": {
              border: "none",
            },
          }}
          onClick={() => {
            navigate(paths.CERTIFICATES);
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{
            //  width: "200px",
            height: "48px",
            px: 14,
            mb: 4,
            "@media screen and (max-width:768px)": {
              px: 6,
            },
          }}
          onClick={() => {
            context?.setUploaded((prev: any) => ({
              ...prev,
              dimension,
              selectedFont,
            }));
            navigate(paths.CERTIFICATES_UPLOAD_LIST);
          }}
        >
          Continue
        </Button>
      </Box>
    </Stack>
  );
};

export default AddText;

const InputField = styled(TextareaAutosize)({
  borderRadius: "5px",
});
