"use client";

import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";

import EditorToolbar, { modules, formats } from "@/constants/EditorToolbar";

type TextAreaProps = {
  name: string;
  label?: string;
  height?: string;
  value?: string;
  placeholder?: string;
};

const FormRichTextArea = ({
  name,
  label,
  height,
  value,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col w-full text-sm`}>
      <h1 className="mb-1 text-light_text dark:text-dark_text font-medium text-sm">
        {label ? label : null}
      </h1>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="">
            <EditorToolbar toolbarId={"t1"} />
            <ReactQuill
              className="w-full bg-dark_text dark:text-dark_bg rounded-br-md rounded-bl-md border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary outline-none leading-8 transition-colors duration-300 ease-in-out"
              style={{ height: `${height}px` }}
              theme="snow"
              {...field}
              defaultValue={value}
              placeholder={placeholder}
              modules={modules("t1")}
              formats={formats}
            />
          </div>
        )}
      />
    </div>
  );
};

export default FormRichTextArea;
