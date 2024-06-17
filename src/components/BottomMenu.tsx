import { CloseOutlined } from "@ant-design/icons";
import MenuHome from "../images/menu_home.svg";
import MenuPools from "../images/menu_pools.svg";
import MenuAccount from "../images/menu_account.svg";

const BottomMenu = () => {
  const MenuOptions = [
    {
      title: "Home",
      img: MenuHome,
      clicked: () => {
        console.log("clicked home");
      },
    },
    {
      title: "Pools",
      img: MenuPools,
      clicked: () => {
        console.log("clicked pools");
      },
    },
    {
      title: "Account",
      img: MenuAccount,
      clicked: () => {
        console.log("clicked account");
      },
    },
  ];

  return (
    <div className="w-full h-full flex gap-5 flex-col items-center">
      <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-3xl">
        <div className="rounded-2xl bg-[#517da2] h-fit py-4 px-6 flex items-start justify-between">
          {MenuOptions.map((items) => (
            <div
              className={`flex flex-col gap-2 items-center justify-center cursor-pointer`}
              onClick={items.clicked}
            >
              <img src={items.img} alt="" />
              <p className="text-sm">{items.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
