import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ProductIcon from '@mui/icons-material/Inventory'
import InfoIcon from '@mui/icons-material/Info';

export default function nav({ pagina }) {
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen(!open)
  }

  const drawerList = (
    <List>
      <Tooltip title="Home" placement='right'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <ListItem>
            <IconButton>
              <HomeIcon />
              <Typography>
                Home
              </Typography>
            </IconButton>
          </ListItem>
        </Link>
      </Tooltip>
      <Divider />
      <Tooltip title="Productos" placement='right'>
        <Link to={'/productos'} style={{ textDecoration: 'none' }}>
          <ListItem>
            <IconButton>
              <ProductIcon />
              <Typography>
                Productos
              </Typography>
            </IconButton>
          </ListItem>
        </Link>
      </Tooltip>
      <Divider />
      <Tooltip title="Sobre nosotros" placement='right'>
        <Link to={'/información'} style={{ textDecoration: 'none' }}>
          <ListItem>
            <IconButton>
              <InfoIcon />
              <Typography>
                Sobre nosotros
              </Typography>
            </IconButton>
          </ListItem>
        </Link>
      </Tooltip>
      <Divider />
      <Tooltip title="Contactanos" placement='right'>
        <Link to={'/contacto'} style={{ textDecoration: 'none' }}>
          <ListItem>
            <IconButton>
              <ProductIcon />
              <Typography>
                Contactanos
              </Typography>
            </IconButton>
          </ListItem>
        </Link>
      </Tooltip>
      <Divider />
    </List>
  )
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {pagina}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClose={handleDrawer}>
        {drawerList}
      </Drawer>
    </>
  );
}