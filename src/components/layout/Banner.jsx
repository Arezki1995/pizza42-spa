import { useAuth0 } from "@auth0/auth0-react";

export default function Banner() {

  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      {
        (isAuthenticated && !user.email_verified) ?
          (
            <div className="email-verification-banner">
              An email is sent to mailbox to finalize your account setup.
              A verified email <b>is required</b> in order to place an Order.
            </div>
          ) : null

      }
    </>

  );
}