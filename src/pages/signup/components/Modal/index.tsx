import { ChangeEvent, useState } from "react";
import { TextField, Button } from "../../../../components";
import { logo } from "../../../../assets";
import { DatePicker } from "..";
import { Dialog } from "@headlessui/react";

interface Props {
  isInvisible: boolean;
  onClose: () => void;
}

export default function Modal({ isInvisible, onClose }: Props) {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  if (!isInvisible) return null;
  
  return (
    <>
      <Dialog open={isInvisible} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full  max-w-3xl rounded bg-white">
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
              <span className="text-lg text-info">Use a email</span>
              <h2 className="text-lg font-bold mt-3">Date of birth</h2>
              <p className="text-sm mt-2">
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                sit. Quis bibendum ante phasellus metus, magna lacinia sed
                augue. Odio enim nascetur leo mauris vel eget. Pretium id
                ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
                in molestie a sit. Elit congue.
              </p>
              <DatePicker />
              <Button text="Next" type="primary" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
