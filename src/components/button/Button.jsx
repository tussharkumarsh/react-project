function Button({ onBtnClick, text }) {
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
