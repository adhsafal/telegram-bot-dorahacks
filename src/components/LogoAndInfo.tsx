import FullLogo from "../images/full_logo.svg";
import TopInfo from "./TopInfo";

const LogoAndInfo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-5">
      <img src={FullLogo} alt="" />
      <div className="h-[0.5px] bg-white w-full opacity-20 my-5"></div>
      <TopInfo />
    </div>
  );
};

export default LogoAndInfo;
