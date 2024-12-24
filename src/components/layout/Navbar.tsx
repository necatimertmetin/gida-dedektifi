import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Paper,
  TextField,
  InputBase,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

interface NavbarProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, darkMode }) => {
  return (
    <Paper elevation={6}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Sol Taraf - Logo */}
          <Box
            component="img"
            src={darkMode ? "/logo-white.png" : "/logo.png"} // Dinamik logo seçimi
            alt="Logo"
            sx={{ height: 50 }}
          />

          {/* Ortada - Arama Çubuğu (Inset Paper) */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
                width: "60%",
                padding: "0 10px", // Kenar boşlukları
                boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.2)", // Inset gölge
                border: "1px solid rgba(0, 0, 0, 0.12)", // Kenar çizgisi
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Ara"
                inputProps={{ "aria-label": "Ara" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>

          {/* Sağ Taraf - Tema Değiştirme Butonu */}
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Navbar;
