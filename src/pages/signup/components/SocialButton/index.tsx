import { apple, google } from "../../../../assets";

interface Props {
  text: string;
  src?: "apple" | "google";
}

export default function SocialButton({ text, src }: Props) {
  const logos = {
    apple,
    google,
  };

  return (
    <button className="w-full h-16 bg-transparent border border-gray-300 border-opacity-80 rounded-full font-roboto text-base font-normal leading-normal flex items-center justify-center hover:bg-gray-200 hover:opacity-100 transition duration-300">
      {src && <img src={logos[src]} alt={text} className="w-8 h-8 mr-2" />}
      {text}
    </button>
  );
}
