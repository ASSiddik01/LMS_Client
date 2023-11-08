"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UploadImage from "@/components/UI/UploadImage";
import { changePasswordSchema } from "@/schemas/changePassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { BsFillCameraFill } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

type PasswordFormValues = {
  oldPassword: string;
  newPassword: string;
};

const Profile = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultValues = {
    name: "Shama",
    email: "Shama@",
    phone: "43124",
    address: "cd",
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(data);
  };

  const passwordSubmit: SubmitHandler<PasswordFormValues> = async (
    data: any
  ) => {
    console.log(data);
  };

  return (
    <div className="p-5 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/5 w-full ">
        <div className="relative">
          <Image
            className="rounded-full mx-auto mb-4"
            width={150}
            height={150}
            src="https://i.ibb.co/MgsTCcv/avater.jpg"
            alt="profile"
          />
          <div className="edit absolute right-5 top-2">
            <BsFillCameraFill
              onClick={handleClickOpen}
              size="24"
              className="dark:text-dark_text text-light_text hover:dark:text-dark_primary hover:text-light_primary duration-300"
            />
          </div>
          <div className="edit absolute right-[65px] bottom-1">
            <HiOutlineShieldCheck
              size="26"
              className="dark:bg-dark_bg  dark:text-dark_primary bg-light_secondary text-light_primary duration-300 rounded-full p-1"
            />
          </div>
        </div>
        <h4 className="text-light_primary dark:text-dark_primary text-center">
          User Name
        </h4>
        <p className="text-light_text dark:text-dark_text text-center">email</p>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
      >
        <div className="bg-light_secondary dark:bg-dark_secondary p-4">
          <UploadImage />
        </div>
      </Dialog>
      <div className="md:w-2/5 w-full">
        <h3 className="text-2xl text-light_primary dark:text-dark_primary">
          Profile Details
        </h3>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div className="my-[10px]">
            <FormInput
              name="name"
              type="text"
              placeholder="Type your name"
              label="Name"
              required
            />
          </div>
          <div className="my-[10px]">
            <FormInput
              name="email"
              type="email"
              placeholder="Type your email"
              label="Email"
              required
              disabled
            />
          </div>
          <div className="my-[10px]">
            <FormInput
              name="phone"
              type="text"
              placeholder="Type your phone"
              label="Phone Number"
              required
            />
          </div>
          <div className="my-[10px]">
            <FormInput
              name="address"
              type="text"
              placeholder="Type your address"
              label="Address"
              required
            />
          </div>
          <button
            type="submit"
            className="text-dark_text dark:text-dark_bg bg-light_primary dark:bg-dark_primary border-0 py-2 px-6  rounded text-lg hover:opacity-80 duration-300"
          >
            Update
          </button>
        </Form>
      </div>
      <div className="md:w-2/5 w-full">
        <h3 className="text-2xl text-light_primary dark:text-dark_primary">
          Change Password
        </h3>
        <Form
          submitHandler={passwordSubmit}
          resolver={yupResolver(changePasswordSchema)}
        >
          <div className="my-[10px]">
            <FormInput
              name="oldPassword"
              type="password"
              placeholder="Type your old password"
              label="Old Password"
              required
            />
          </div>
          <div className="my-[10px]">
            <FormInput
              name="newPassword"
              type="password"
              placeholder="Type your new password"
              label="New Password"
              required
            />
          </div>
          <button
            type="submit"
            className="text-dark_text dark:text-dark_bg bg-light_primary dark:bg-dark_primary border-0 py-2 px-6  rounded text-lg hover:opacity-80 duration-300"
          >
            Change Password
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
