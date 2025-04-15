import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import logoReprogramaJucas from "../../assets/logo-rj.png";
import { FormSingUp } from "../../components/FormSignUp";

export function SignUp() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="signUpForm">
        <h2>Crie sua conta</h2>
        <FormSingUp />

        <div className="messageChangePage">
          <span>Já tem uma conta? </span>
          <button onClick={() => navigate("/")} disabled={false}>
            Login
          </button>
        </div>
      </div>
      <div className="signUpLogo">
        <div>
          <Link to={""}>
            <img src={logoReprogramaJucas} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
