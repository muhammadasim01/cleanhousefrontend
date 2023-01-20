function ServicesButton({ buttonText, custom, customWidth }) {
  return (
    <button
      className={`bg-primaryColor flex items-center w-[290px] justify-center py-[10px] px-4 ${customWidth} rounded-lg`}
    >
      <p
        className={`font-subHeading text-[22px] ${custom} leading-[30px] font-bold text-lightColor`}
      >
        {buttonText}
      </p>
    </button>
  );
}

export default ServicesButton;
