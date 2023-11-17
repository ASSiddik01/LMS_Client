"use client";
import { styled } from "@mui/material/styles";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { courseInformation } from "@/schemas/course";
import FormInput from "../Forms/FormInput";
import FormRichTextArea from "../Forms/FormRichTextArea";
import Image from "next/image";
import Button from "@mui/material/Button";
import { BiUpload } from "react-icons/bi";
import { useState } from "react";

type FormValues = {
  name: string;
  description: string;
  price: string;
  estimatedPrice: string;
  tags: string;
  level: string;
  demoUrl: string;
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CourseInformation = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}: {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
}) => {
  const [loadImage, setLoadImage] = useState();

  const imagehandler = async (e: any) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      const reader: any = new FileReader();
      reader.onload = async () => {
        setLoadImage(reader.result);
        const base64 = await reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const info = { ...data, thumbnail: loadImage };
    setCourseInfo(info);
    setActive(active + 1);
  };
  return (
    <div className="md:w-[90%] ">
      <h5 className="text-2xl text-light_text dark:text-dark_text duration-300">
        Course Information
      </h5>
      <Form submitHandler={onSubmit} resolver={yupResolver(courseInformation)}>
        <div className="my-2">
          <FormInput
            name="name"
            type="text"
            placeholder="Type course name"
            label="Name"
            required
          />
        </div>
        {/* <div className="my-2">
          <FormRichTextArea
            value=""
            height="250"
            name="description"
            label="Description"
            placeholder="Course description"
          />
        </div> */}
        <div className="my-2">
          <FormInput
            name="tags"
            type="text"
            placeholder="Type course tags"
            label="Course Tags"
            required
          />
        </div>
        <div className="md:flex gap-4 ">
          <div className="md:w-1/2 my-2">
            <FormInput
              name="price"
              type="text"
              placeholder="Type course price"
              label="Price"
              required
            />
          </div>
          <div className="md:w-1/2 my-2">
            <FormInput
              name="estimatedPrice"
              type="text"
              placeholder="Type course estimated price"
              label="Estimated Price"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-4 ">
          <div className="md:w-1/2 my-2">
            <FormInput
              name="level"
              type="text"
              placeholder="Type course level"
              label="Level"
              required
            />
          </div>
          <div className="md:w-1/2 my-2">
            <FormInput
              name="demoUrl"
              type="text"
              placeholder="Type course demo url"
              label="Demo Url"
              required
            />
          </div>
        </div>
        <div className="my-2 flex flex-col">
          {loadImage && (
            <Image
              width={800}
              height={200}
              className="mb-4 rounded-md"
              src={loadImage}
              alt="profile"
            />
          )}
          <Button
            sx={{ textTransform: `capitalize` }}
            className="!text-light_text  !bg-dark_text dark:!bg-dark_text py-2 px-6 text-lg hover:opacity-80 duration-300 rounded-md !border !border-light_primary dark:!border-dark_primary capitalize !shadow-none"
            component="label"
            variant="outlined"
            startIcon={<BiUpload />}
          >
            Thumbnail
            <VisuallyHiddenInput
              name="file"
              id="avater"
              onChange={imagehandler}
              type="file"
            />
          </Button>
        </div>
        <div className="flex justify-between">
          <div></div>
          <button
            type="submit"
            className="text-dark_text dark:text-dark_bg bg-light_primary dark:bg-dark_primary border-0 py-2 px-6  rounded-md text-lg hover:opacity-80 duration-300"
          >
            Next
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CourseInformation;
