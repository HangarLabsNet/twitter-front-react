interface Props {
  text?: string;
  type?: "primary" | "secondary" | "danger" | "success" | "warning";
}

export default function Button({ text, type }: Props) {
  const color = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
  } as {
    [key: string]: string;
  };

  return (
    <button className={`w-full py-3 rounded-full ${color[type as string]}`}>
      <span className="text-lg font-semibold">{text}</span>
    </button>
  );
}
