
interface ButtonProps {
  style: string;
  text: string;
}

const Button = (props: ButtonProps) => {
  const { style, text } = props;
  return (
    <div className={'bg-[#1D9BF0] rounded-2xl px-3 py-2 w-fit text-sm font-bold ' + style}>
      {text}
    </div>
  );
}

export default Button;
