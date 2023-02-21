import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ListaProductos = () => {
  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorias
  </MenuButton>
  <MenuList>
    <MenuItem>Mancuernas</MenuItem>
    <MenuItem>Discos</MenuItem>
    <MenuItem>Barras</MenuItem>
    <MenuItem>Accesorios</MenuItem>
  </MenuList>
</Menu>
  )
}

export default ListaProductos