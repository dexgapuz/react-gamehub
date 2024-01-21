import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
