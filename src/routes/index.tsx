import { BrowserRouter } from "react-router-dom";
import { AuthRouter } from "./auth.routes";

export function AppRoutes() {
    const login = true;

    const routes = login ? <AppRoutes/> : <AuthRouter/>; 

    return <BrowserRouter>{routes}</BrowserRouter>
}