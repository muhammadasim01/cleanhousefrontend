function ServicesSecondryButton({ buttonText }) {
  return (
    <button className="bg-secondaryColor  flex items-center justify-center py-[10px] px-8 w-[290px] rounded-lg">
      <p className="font-text text-[22px] leading-[30px] font-bold text-lightColor">
        {buttonText}
      </p>
    </button>
  );
}

export default ServicesSecondryButton;
