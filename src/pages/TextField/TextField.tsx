import Box from "@mui/material/Box";
import DocumentLayout from "shared/Layout/DocumentLayout";

const navItems = [
  { navNumber: 1, navName: "Upload Certificate" },
  { navNumber: 2, navName: "Name Field" },
  { navNumber: 3, navName: "Upload List" },
];

const TextField = () => {
  return (
    <Box>
      <DocumentLayout
        currentComponent={1}
        // @ts-ignore
        formStepperTitle="Clearance Digitization Progress"
        formStepperNavItems={navItems}
        backArrow={true}
      >
        <Box>Hello</Box>
      </DocumentLayout>
    </Box>
  );
};

export default TextField;
