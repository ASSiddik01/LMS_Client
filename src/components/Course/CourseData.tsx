"use client";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { BiUpload } from "react-icons/bi";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { AddSharp } from "@mui/icons-material";
import toast from "react-hot-toast";
type FormValues = {
  title: string;
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

type props = {
  benifits: { title: string }[];
  setBenifits: (benifits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData = ({
  benifits,
  setBenifits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}: props) => {
  const addNewBenifitInput = async () => {
    setBenifits([...benifits, { title: "" }]);
  };
  const addNewPrerequisitesInput = async () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    let updateBenifits = [];
    let updatePrerequisites = [];
    for (var key in data) {
      if (key.includes("benifit") && data.hasOwnProperty(key)) {
        updateBenifits.push({ title: data[key] });
      } else {
        updatePrerequisites.push({ title: data[key] });
      }
    }
    setBenifits(updateBenifits);
    setPrerequisites(updatePrerequisites);
    if (
      updateBenifits[updateBenifits.length - 1]?.title !== "" &&
      updateBenifits[updateBenifits.length - 1]?.title !== undefined &&
      updatePrerequisites[updatePrerequisites.length - 1]?.title !== "" &&
      updatePrerequisites[updatePrerequisites.length - 1]?.title !== undefined
    ) {
      setActive(active + 1);
    } else {
      toast.error(`All blank fileds are required`);
    }
  };

  const handlePrev = () => {
    setActive(active - 1);
  };

  return (
    <div className="md:w-[90%] ">
      <h5 className="text-2xl">Course Data</h5>
      <Form submitHandler={onSubmit}>
        <div className="benifits">
          <p className="text-md">Course Benifits</p>
          {benifits.map((benifit: any, i: number) => (
            <div key={i} className="my-[10px]">
              <FormInput
                name={`benifit ${i}`}
                type="text"
                placeholder={`Type course Benifit ${i + 1} `}
                //   label={`Benifit ${i + 1} `}
                //   required
              />
            </div>
          ))}
          <div className="my-[10px] flex flex-col">
            <Button
              onClick={addNewBenifitInput}
              sx={{ textTransform: `capitalize` }}
              className="!text-light_text  !bg-dark_text dark:!bg-dark_text py-2 px-6 text-lg hover:opacity-80 duration-300 rounded-md !border !border-light_primary dark:!border-dark_primary capitalize !shadow-none"
              component="label"
              variant="outlined"
              startIcon={<AddSharp />}
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="prerequisites">
          <p className="text-md">Course Prerequisites</p>
          {prerequisites.map((benifit: any, i: number) => (
            <div key={i} className="my-[10px]">
              <FormInput
                name={`prerequisite ${i}`}
                type="text"
                placeholder={`Type course prerequisite ${i + 1} `}
                //   label={`Benifit ${i + 1} `}
                //   required
              />
            </div>
          ))}
          <div className="my-[10px] flex flex-col">
            <Button
              onClick={addNewPrerequisitesInput}
              sx={{ textTransform: `capitalize` }}
              className="!text-light_text  !bg-dark_text dark:!bg-dark_text py-2 px-6 text-lg hover:opacity-80 duration-300 rounded-md !border !border-light_primary dark:!border-dark_primary capitalize !shadow-none"
              component="label"
              variant="outlined"
              startIcon={<AddSharp />}
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className="text-dark_text dark:text-dark_bg bg-light_primary dark:bg-dark_primary border-0 py-2 px-6  rounded-md text-lg hover:opacity-80 duration-300"
          >
            Previous
          </button>
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
export default CourseData;
