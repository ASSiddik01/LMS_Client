"use client";

import CourseContent from "@/components/Course/CourseContent";
import CourseData from "@/components/Course/CourseData";
import CourseInformation from "@/components/Course/CourseInformation";
import CourseOptions from "@/components/Course/CourseOptions";
import PageHeading from "@/components/UI/PageHeading";
import { useState } from "react";

const CreateCourse = () => {
  const [active, setActive] = useState(2);
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

  console.log(courseInfo);
  const [benifits, setBenifits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContent, setCourseContent] = useState([
    {
      videoUrl: "",
      title: "Video Title",
      description: "",
      videoSection: "Section Title",
      links: [
        {
          title: "",
          url: "",
        },
      ],
    },
  ]);

  const [course, setCourse] = useState({});

  const handleSubmit = async () => {
    console.log("submit");
    const formatBenifits = benifits.map((benifit) => ({
      title: benifit.title,
    }));

    const formatPrerequisites = prerequisites.map((prerequisite) => ({
      title: prerequisite.title,
    }));

    const formatCourseContent = courseContent.map((content) => ({
      title: content.title,
      videoUrl: content.videoUrl,
      description: content.description,
      videoSection: content.videoSection,
      links: content.links.map((link) => ({
        title: link.title,
        url: link.url,
      })),
    }));

    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      price: courseInfo.price,
      estimatedPrice: courseInfo.estimatedPrice,
      tags: courseInfo.tags,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      thumbnail: courseInfo.thumbnail,
      benifits: formatBenifits,
      prerequisites: formatPrerequisites,
      courseContent: formatCourseContent,
    };

    setCourse(data);

    console.log(data);
  };

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
          {active === 1 && (
            <CourseData
              benifits={benifits}
              setBenifits={setBenifits}
              prerequisites={prerequisites}
              setPrerequisites={setPrerequisites}
              active={active}
              setActive={setActive}
            />
          )}
          {active === 2 && (
            <CourseContent
              courseContent={courseContent}
              setCourseContent={setCourseContent}
              active={active}
              setActive={setActive}
              handleSubmit={handleSubmit}
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
