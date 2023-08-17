import { ChangeEvent, useState } from "react";
import { Button, TextField } from "../../components";
import { logo } from "../../assets";

export default function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col pt-14 items-center">
      <div className="text-left w-1/4 m-auto">
        <img src={logo} alt="Logo of twitter" width={43} height={43} />
        <h1 className="text-4xl mt-12 font-bold">Log in to Twitter</h1>
        <form action="" className="mt-12" noValidate>
          <TextField
            label="Phone number, email address"
            name="email"
            value={values.email}
            type="email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button text="Log In" type="primary" />
        </form>
      </div>
    </div>
  );
}
