import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../auth/LogoutButton.jsx";

function Profile() {
    const { user } = useAuth0();


    return (
        <>
            {user ? (
                <>

                    <div className="card profile-card">
                        <div className="profile-title">Profile</div>
                        <div className="profile-subtitle">(Auth0 user object)</div>
                        <img
                            src={user.picture}
                            alt={user.name || 'User'}
                            className="profile-picture"
                        />
                        <div className="profile-details">
                            <div className="profile-nickname" >
                                <span><b>Nickname: </b>{user.nickname}</span>
                            </div>
                            <div className="profile-name" >
                                <span><b>Username: </b>{user.name}</span>
                            </div>
                            <div className="profile-email">
                                <span><b>Email: </b>{user.email ?? "email unavailable"}</span>
                            </div>
                            <div className="profile-email-verified">
                                <span><b>Email verified: </b>{(user.email_verified) ? ("Yes") : ("No")}</span>
                            </div>
                            <div className="profile-update-date" >
                                <span><b>Updated at: </b>{user.updated_at}</span>
                            </div>
                        </div>
                        <LogoutButton />
                    </div>

                </>

            ) : null
            }

        </>
    );
};

export default Profile;