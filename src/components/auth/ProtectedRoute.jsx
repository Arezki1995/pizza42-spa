import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Message from "../nav/Message";
import LoginButton from "../auth/LoginButton";
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className="auth-loading">Loading...</div>;

  if (!isAuthenticated) {
    return (
      <Message
        title="Info"
        text="You need to login in order to continue"
      >
      <LoginButton />

      </Message>
    );

  }

  return children;
}