import { Check } from "@mui/icons-material";

const CourseOptions = ({
  active,
  setActive,
}: {
  active: number;
  setActive: (active: number) => void;
}) => {
  const options = [
    "Course Information",
    "Course Data",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div className="">
      {options.map((option: string, i: number) => (
        <div key={i} className="w-full flex py-3 items-center gap-2">
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center relative ${
              active + 1 > i
                ? "bg-light_primary dark:bg-dark_primary"
                : "bg-light_secondary dark:bg-dark_text"
            } `}
          >
            <Check className="text-dark_text dark:text-dark_bg duration-300" />
            {i !== options.length - 1 && (
              <div
                className={`absolute h-[25px] w-1 bottom-[-70%] ${
                  active + 1 > i
                    ? "bg-light_primary dark:bg-dark_primary"
                    : "bg-light_secondary dark:bg-dark_text"
                } `}
              ></div>
            )}
          </div>
          <h4
            className={`${
              active === i
                ? "text-light_primary dark:text-dark_primary"
                : "text-light_text dark:text-dark_text"
            }`}
          >
            {option}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;
