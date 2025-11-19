import "./App.css";
import { withProviders } from "./providers";
import { Outlet } from "react-router";
import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
} from "@mui/material";
import {Link as RouterLink} from "react-router";

export const App = withProviders(() => {
  return (
    <>
      <AppBar position="fixed" sx={{ alignItems: "center" }}>
        <Toolbar sx={{gap: 1}}>
             <Link
           component={RouterLink}
           to={'/tasklist'}
           
            
          >
            Список задач
          </Link>
          <Link
           component={RouterLink}
           to={'/registration'}
           
            
          >
            Регистрация
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
});
