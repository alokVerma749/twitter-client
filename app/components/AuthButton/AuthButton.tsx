interface propType {
  authProvider?: string
}

const AuthButton = ({ authProvider = "Google" }: propType) => {
  return (
    <button className='bg-[#1D9BF0] p-3 w-64 text-sm font-bold'>Login via {authProvider}</button>
  )
}

export default AuthButton;
