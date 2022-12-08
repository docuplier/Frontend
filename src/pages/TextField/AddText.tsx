import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import { paths } from "Routes";
import { styled } from "@mui/material";
// @ts-ignore
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

const AddText = () => {
  const [dimension, setDimension] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });
  const [displayTextBox, setDisplayTextBox] = useState(false);
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>();
  const draggableRef = useRef<HTMLDivElement>();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = useOutletContext();

  const eventLogger = (e: DraggableEvent, data: DraggableData) => {
    const val = ref?.current?.getBoundingClientRect();
    const draggableVal = draggableRef?.current?.getBoundingClientRect();
    setDimension({
      left: val?.left! - draggableVal?.left!,
      right: val?.right! - draggableVal?.right!,
      bottom: val?.bottom! - draggableVal?.bottom!,
      top: val?.top! - draggableVal?.top!,
    });
  };

  const handleTextBox = () => {
    setDisplayTextBox(true);
  };

  React.useEffect(() => {
    context?.setCurrentStep(1);
  }, []);

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
            <ButtonBox
              variant="contained"
              sx={{ height: "48px", px: 12 }}
              onClick={() => handleTextBox()}
            >
              Add A Text Box
            </ButtonBox>
            <Button
              variant="contained"
              sx={{
                display: "none",
                height: "40px",
                // px: 4,
                width: "100%",

                "@media screen and (max-width:768px)": {
                  display: "flex",
                },
              }}
              onClick={() => handleTextBox()}
            >
              {" "}
              Add Text
            </Button>
          </Box>
          <Box mx={6} width="28%">
            <Typography variant="body2">Select Font</Typography>
            <TextField
              select
              fullWidth
              // size="small"
              sx={{
                width: "100%",

                "& .MuiOutlinedInput-root": {
                  height: "48px",
                },
              }}
            ></TextField>
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
        <Box ref={ref} position="relative">
          <img
            src={context?.uploaded?.doc}
            style={{
              position: "relative",
              margin: "auto",
              textAlign: "center",
            }}
            width="100%"
          />
          <Box sx={{ position: "absolute", top: 0 }} ref={draggableRef}>
            {displayTextBox && (
              <Draggable
                axis="both"
                handle=".handle"
                //defaultPosition={{ x: 0, y: 0 }}
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
                      width="350px"
                      height="25px"
                      borderRadius="5px"
                      display="flex"
                      justifyContent="center"
                      textAlign="center"
                      alignItems="center"
                      sx={{ border: `2px solid #3B4CF1 `, color: "#0B0D27" }}
                    >
                      {" "}
                      <Typography>
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

        {/* <DragResizeContainer
          className="resize-container"
          resizeProps={{
            minWidth: 10,
            minHeight: 10,

            // enable: canResizable(isResize)
          }}
          //  onDoubleClick={clickScreen}
          layout={layout}
          dragProps={{ disabled: false }}
          //  onLayoutChange={onLayoutChange}
          //  scale={scale}
        >
          {layout.map((single) => {
            return (
              <Box
                key={single.key}
                className="child-container size-auto border"
              >
                text test
              </Box>
            );
          })}
        </DragResizeContainer> */}
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

const ButtonBox = styled(Button)({
  "@media screen and (max-width:768px)": {
    display: "none",
  },
});
