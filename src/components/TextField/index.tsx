interface Props {
  label?: string;
  type?: string;
  className?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({
  label,
  type,
  className,
  value,
  name,
  onChange,
}: Props) {
  return (
    <div
      className={`my-6 px-5 py-4 border flex items-center rounded ${className}`}
    >
      <input
        placeholder={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border-none outline-none w-full"
      />
    </div>
  );
}
