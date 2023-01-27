import { useState } from "react";
function CleanerStep() {
    const [toggle, setToggle] = useState({
        basicInfo: true,
        backgroundCheck: false,
        uploadPhoto: false,
      });
      const basicInfo = () => {
        setToggle({
          basicInfo: true,
          backgroundCheck: false,
          uploadPhoto: false,
        });
      };
      const backgroundCheck = () => {
        setToggle({
          basicInfo: false,
          backgroundCheck: true,
          uploadPhoto: false,
        });
      };
      const uploadPhoto = () => {
        setToggle({
          basicInfo: false,
          backgroundCheck: false,
          uploadPhoto: true,
        });
      };
  return (
    <>
    <div className="flex h-10  border-2 border-secondaryColor px-1 items-center bg-secondaryColor bg-opacity-10 rounded-lg ">
          <button
            onClick={basicInfo}
            className="font-text text-[10px] font-extrabold text-darkColor flex items-center w-[34%]"
          >
            <p
              className={`h-2 w-2 border-2 border-secondaryColor ${
                toggle.basicInfo && "bg-secondaryColor"
              } rounded-full mx-[3px]`}
            ></p>
            Basic Info
          </button>
          <button
            onClick={backgroundCheck}
            className="font-text text-[10px] font-bold text-darkColor flex items-center w[22%]"
          >
            <p
              className={`h-2 w-2 border-2 border-secondaryColor ${
                toggle.backgroundCheck && "bg-secondaryColor"
              } rounded-full mx-1`}
            ></p>
            Background Check
          </button>
          <button
            onClick={uploadPhoto}
            className="font-text text-[10px] font-bold text-darkColor flex items-center w-[22%]"
          >
            <p
              className={`h-2 w-2 border-2 border-secondaryColor ${
                toggle.uploadPhoto && "bg-secondaryColor"
              }  rounded-full mx-1`}
            ></p>
            Upload Photo ID
          </button>
        </div>
    </>
  )
}

export default CleanerStep