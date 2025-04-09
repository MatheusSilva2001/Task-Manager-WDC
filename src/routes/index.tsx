import { BrowserRouter } from "react-router-dom";
import { AuthRouter } from "./auth.routes";
import { AppRouter } from "./app.routes";

export function AppRoutes() {
  const login = false;

  const routes = login ? <AppRouter /> : <AuthRouter />;

  return <BrowserRouter>{routes}</BrowserRouter>;
}
