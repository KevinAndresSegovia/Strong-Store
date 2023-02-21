import React from 'react'
import { Box, Flex, MenuList, Spacer } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import logo from '../assets/logo.svg'
import ListaProductos from './ListaProductos'



const NavBar = () => {
  return (
<Flex>
  <Box>
  <img src={logo} className="logo store" alt="strong store" />
  </Box>
  <Spacer/>
  <Box><ListaProductos /></Box>
  <Spacer />
  <Box>
    <CartWidget></CartWidget>
  </Box>
</Flex>
  )
}

export default NavBar