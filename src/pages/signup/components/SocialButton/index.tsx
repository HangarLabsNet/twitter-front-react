import { apple, google } from "../../../../assets";

interface Props {
  text: string;
  src?: "apple" | "google";
  setShowModal?: (value: boolean) => void;
}

export default function SocialButton({ text, src, setShowModal }: Props) {
  const logos = {
    apple,
    google,
  };

  const handleClick = () => {
    setShowModal!(true);
  };

  return (
    <button
      className="w-full h-16 bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300"
      onClick={handleClick}
    >
      {src && <img src={logos[src]} alt={text} className="w-8 h-8 mr-2" />}
      {text}
    </button>
  );
}
