function ServicesButton({ buttonText }) {
  return (
    <button
      className={`bg-primaryColor flex items-center w-[290px] justify-center py-[10px] px-4  rounded-lg`}
    >
      <p
        className={`font-subHeading text-[22px] leading-[30px] font-bold text-lightColor`}
      >
        {buttonText}
      </p>
    </button>
  );
}

export default ServicesButton;
