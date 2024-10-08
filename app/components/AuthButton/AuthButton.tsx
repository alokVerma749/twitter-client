import { GoogleLogin } from '@react-oauth/google';

const AuthButton = () => {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}

export default AuthButton;
