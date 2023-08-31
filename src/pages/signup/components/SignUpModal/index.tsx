import { ChangeEvent, useState } from "react";
import { Button, Modal, SocialButton, TextField } from "../../../../components";
import { logo } from "../../../../assets";
import { DatePicker } from "..";

export default function SignupModal() {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => setOpen(!open);

  return (
    <>
      <SocialButton
        text="Sign up with phone or email"
        onClick={handleClose}
      />
      <Modal open={open} onClose={handleClose}>
        <form action="">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Logo of twitter"
                className="w-8 h-8 justify-center"
              />
            </div>
            <h2 className="text-2xl font-bold font-roboto">
              Create an account
            </h2>
            <TextField
              label="Name"
              name="name"
              value={values.name}
              type="text"
              onChange={handleChange}
            />
            <TextField
              label="Phone number"
              name="phoneNumber"
              value={values.phoneNumber}
              type="text"
              onChange={handleChange}
            />
            <button className="text-lg text-info">Use a email</button>
            <h2 className="text-lg font-bold mt-3">Date of birth</h2>
            <p className="text-sm mt-2">
              Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
              sit. Quis bibendum ante phasellus metus, magna lacinia sed augue.
              Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper
              blandit viverra dignissim eget tellus. Nibh mi massa in molestie a
              sit. Elit congue.
            </p>
            <DatePicker />
            <Button text="Next" type="primary" />
          </div>
        </form>
      </Modal>
    </>
  );
}
