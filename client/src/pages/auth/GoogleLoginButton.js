import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = ({ onSuccess }) => {
  const handleSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google User:", decoded);
      onSuccess(decoded); // Pass user info back to parent component
    }
  };

  const handleError = () => {
    console.error("Google Login Failed");
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default GoogleLoginButton;