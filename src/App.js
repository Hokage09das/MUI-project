import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Addbutton from "./components/Addbutton";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Stack
          direction='row'
          spacing={2}
          justifyContent='space-around'
        >
          <Sidebar
            setMode={setMode}
            mode={mode}
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Addbutton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
