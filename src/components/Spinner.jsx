import { Spinner, Flex } from "@chakra-ui/react";

export const TempSpinner = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      height={"375px"}
    >
      <Spinner
        thickness="8px"
        speed="1s"
        emptyColor="#1f1f1f"
        color="#27ae60"
        size="xl"
      />
    </Flex>
  );
};
