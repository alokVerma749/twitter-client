'use client'
import { GoogleLogin } from '@react-oauth/google';

const AuthCard = () => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-sm tracking-wide text-gray-400'>Signup to get you own personlized timeline</p>
      <div className='col-span-3 self-start'>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
      <p className='text-xs text-gray-400'>By signin up you agree to the terms of serveice and privacy policies. Including cookies use.</p>
    </div>
  )
}

export default AuthCard;
