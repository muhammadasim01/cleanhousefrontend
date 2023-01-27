import { useState } from "react";
function CleanerStep({ first, second, third }) {
  // const [toggle, setToggle] = useState({
  //     basicInfo: true,
  //     backgroundCheck: false,
  //     uploadPhoto: false,
  //   });
  //   const basicInfo = () => {
  //     setToggle({
  //       basicInfo: true,
  //       backgroundCheck: false,
  //       uploadPhoto: false,
  //     });
  //   };
  //   const backgroundCheck = () => {
  //     setToggle({
  //       basicInfo: false,
  //       backgroundCheck: true,
  //       uploadPhoto: false,
  //     });
  //   };
  //   const uploadPhoto = () => {
  //     setToggle({
  //       basicInfo: false,
  //       backgroundCheck: false,
  //       uploadPhoto: true,
  //     });
  //   };
  return (
    <>
      {/* <div className="flex h-10  border-2 border-secondaryColor px-1 items-center bg-secondaryColor bg-opacity-10 rounded-lg ">
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
        </div> */}
      <div className="flex justify-between h-10  border-[1px] border-secondaryColor pl-2 pr-3 items-center bg-secondaryColor bg-opacity-10 rounded-lg ">
        <button className=" font-text text-[10px] font-extrabold text-darkColor flex items-center ">
          <p
            className={`h-[6px] w-[6px] border-[1px] border-secondaryColor ${
              first && "bg-secondaryColor"
            } rounded-full mx-[4px]`}
          ></p>
          Basic Info
        </button>
        <button className=" font-text text-[10px] font-bold text-darkColor flex items-center ">
          <p
            className={`h-[6px] w-[6px] border-[1px] border-secondaryColor  ${
              second && "bg-secondaryColor"
            } rounded-full mx-[4px]`}
          ></p>
          Background Check
        </button>
        <button className=" font-text text-[10px] font-bold text-darkColor flex items-center ">
          <p
            className={`h-[6px] w-[6px] border-[1px] border-secondaryColor ${
              third && "bg-secondaryColor"
            }  rounded-full mx-[4px]`}
          ></p>
          Upload Photo ID
        </button>
      </div>
    </>
  );
}

export default CleanerStep;
