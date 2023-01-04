function ServicesButton({ buttonText }) {
  return (
    <button className="bg-primaryColor flex items-center justify-center py-2 px-4 rounded-lg">
      <p className="font-text text-[22px] leading-7 font-bold text-lightColor">
        {buttonText}
      </p>
    </button>
  );
}

export default ServicesButton;
