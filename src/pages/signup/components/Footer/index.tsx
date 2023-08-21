export default function FooterSignUp() {
  const footerLinks = [
    "About",
    "Help Center",
    "Terms of Service",
    "Cookie Policy",
    "Ads info",
    "Blog",
    "Status",
    "Carrers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
    "© 2021 Twitter Inc.",
  ];

  return (
    <div className="w-full mt-10 sm:mt-0 h-[5vh] whitespace-nowrap bg-white text-center flex items-center justify-center overflow-x-auto">
      {footerLinks.map((link) => (
        <span
          key={link}
          className="text-black mr-4 font-roboto text-[13px] cursor-pointer"
        >
          {link}
        </span>
      ))}
    </div>
  );
}
