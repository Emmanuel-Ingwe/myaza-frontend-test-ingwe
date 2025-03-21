import Login from "../../../hooks/../components/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UIFRY | Login",
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
