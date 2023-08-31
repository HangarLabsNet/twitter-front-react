import * as ASSETS from "../../../../assets";

export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      icon: ASSETS.home,
    },
    {
      name: "Explore",
      icon: ASSETS.explore,
    },
    {
      name: "Notifications",
      icon: ASSETS.bell,
    },
    {
      name: "Messages",
      icon: ASSETS.message,
    },
    {
      name: "Bookmarks",
      icon: ASSETS.bookmark,
    },
    {
      name: "Lists",
      icon: ASSETS.lists,
    },
    {
      name: "Profile",
      icon: ASSETS.profile,
    },
    {
      name: "More",
      icon: ASSETS.dots,
    },
  ];

  return (
    <>
      <div className="py-5 flex flex-col items-center fixed w-[15%]">
        <div className="w-[55%] text-center">
          <img src={ASSETS.logo} alt="logo" width={25} />
        </div>
        <div>
          <ul className="mt-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <div className="flex items-center space-x-3 cursor-pointer py-5 px-1 w-full hover:text-primary">
                  <img src={item.icon} alt={item.name} width={25} />
                  <span className="text-lg font-bold ">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
