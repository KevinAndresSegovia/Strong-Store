import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://cdn.pixabay.com/photo/2014/06/16/12/56/the-muscles-369784_960_720.png"
            alt="workout"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;