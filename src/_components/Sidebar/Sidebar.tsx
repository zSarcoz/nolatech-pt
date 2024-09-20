import * as React from "react"

import Link from "next/link"

import {
  CssBaseline,
  Toolbar,
  List,
  Drawer,
  Typography,
  Divider,
  IconButton,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge
} from "@mui/material"

import { Notifications, AccountCircle, Logout } from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"

import useStates from "./_states/useStates"

import { ReactNode } from "react"

interface SidebarProps {
  children: ReactNode
  title: string
}

export default function Sidebar({ children, title }: SidebarProps) {
  const {
    isMobile,
    drawerWidth,
    Main,
    AppBar,
    DrawerHeader,
    theme,
    open,
    handleDrawerOpen,
    handleDrawerClose,
    handleLogout
  } = useStates()

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "rgba(3, 80, 150, 0.8)", // Color de fondo con transparencia
          backdropFilter: "blur(10px)"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2
              },
              open && { display: "none" }
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="hidden lg:flex"
          >
            {title}
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.25)" },
              marginLeft: 0,
              width: "100%",
              maxWidth: "300px",
              mx: "auto"
            }}
          ></Box>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#01a3b0",
                  color: "white"
                }
              }}
            >
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }} onClick={handleLogout}>
            <Logout />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#efefef",
            boxSizing: "border-box"
          }
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: "#efefef" }}>
          {["Dashboard", "Evaluaciones"].map((text, index) => (
            <Link
              key={index}
              href={
                index !== 0
                  ? `/dashboard/${text.toLowerCase()}`
                  : `/${text.toLowerCase()}`
              }
            >
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
          pl: isMobile ? 2 : 40,
          pr: 2,
          pt: 5,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          marginLeft: open ? 0 : `-${drawerWidth}px`
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
      {/* <Main open={open} sx={{ maxWidth: "84%" }}>
        <DrawerHeader />
        {children}
      </Main> */}
    </Box>
  )
}
