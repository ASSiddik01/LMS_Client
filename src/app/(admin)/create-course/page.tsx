"use client";

import CourseInformation from "@/components/Course/CourseInformation";
import CourseOptions from "@/components/Course/CourseOptions";
import PageHeading from "@/components/UI/PageHeading";
import { useState } from "react";

const CreateCourse = () => {
  const [active, setActive] = useState(0);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [benifits, setBenifits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState({
    videoUrl: "",
    title: "",
    description: "",
    videoSection: "",
    links: [
      {
        title: "",
        url: "",
      },
    ],
    suggestion: "",
  });

  const [courseData, setCourseData] = useState({});

  return (
    <div className="">
      <PageHeading title="Add new course" />
      <div className="flex md:flex-col flex-col-reverse">
        <div className="md:w-[80%]">
          {active === 0 && (
            <CourseInformation
              courseInfo={courseInfo}
              setCourseInfo={setCourseInfo}
              active={active}
              setActive={setActive}
            />
          )}
        </div>
        <div className="md:w-[20%] md:h-screen md:fixed right-0">
          <CourseOptions active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
