import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

export default function NavProfile() {
  
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="nav-profile">
      {isAuthenticated ? (
        <>
          <div>
            <img src={user.picture} alt={user.name} className="nav-profile-picture" />
          </div>
          <div className="nav-profile-details">
            <span className="nav-profile-username">{user.name}</span>
            <LogoutButton />
          </div>

        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}