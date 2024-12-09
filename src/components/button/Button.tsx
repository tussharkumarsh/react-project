interface IProps {
  onBtnClick: Function,
  text: string;
}

function Button({ onBtnClick, text }: IProps) {
  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        onBtnClick();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
