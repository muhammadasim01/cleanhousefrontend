function ServicesSecondryButton({ buttonText }) {
  return (
    <button className="bg-secondaryColor flex items-center justify-center py-2 px-8 w-[250px] rounded-lg">
      <p className="font-text text-[22px] leading-7 font-bold text-lightColor">
        {buttonText}
      </p>
    </button>
  );
}

export default ServicesSecondryButton;
