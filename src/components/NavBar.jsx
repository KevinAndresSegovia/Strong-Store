import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from '../assets/logo.svg'
import {
  Flex,
  Box,
  Spacer,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="blackAlpha.700" color="#262626">
        <Flex alignItems="center" gap="2">
        <Link to={"/"}><Avatar
            size="xl"
            src={logo}
          /></Link>
          <Box p="10" w="300px" h="100">
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogo"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="solid"
                  colorScheme="white"
                  m="5"
                >
                  Catálogo
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="solid"
                colorScheme="white"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorías
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Mancuernas"}`}>
                  <MenuItem>Mancuernas</MenuItem>
                </Link>
                <Link to={`/category/${"Barras"}`}>
                  <MenuItem>Barras</MenuItem>
                </Link>
                <Link to={`/category/${"Accesorios"}`}>
                  <MenuItem>Accesorios</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;