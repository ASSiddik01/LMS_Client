"use client";

import { AddSharp, DeleteForever, ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";

type props = {
  courseContent: any;
  setCourseContent: (courseContent: any) => void;
  active: number;
  setActive: (active: number) => void;
  handleSubmit: any;
};

const CourseContent = ({
  courseContent,
  setCourseContent,
  active,
  setActive,
  handleSubmit: handleCourseSubmit,
}: props) => {
  const [collapsed, setCollapsed] = useState(
    Array(courseContent.length).fill(false)
  );
  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDafault();
  };

  const handleCollapsed = (i: number) => {
    const updatedCollasped = [...collapsed];
    updatedCollasped[i] = !updatedCollasped[i];
    setCollapsed(updatedCollasped);
  };

  const handleRemoveLink = (i: number, linkI: number) => {
    const updateData = [...courseContent];
    updateData[i].links.splice(linkI, 1);
    setCourseContent(updateData);
  };

  const addNewLink = (i: number) => {
    const updateData = [...courseContent];
    updateData[i].links.push({ title: "", url: "" });
    setCourseContent(updateData);
  };

  const handleAddContent = (item: any) => {
    if (
      item.title === "" ||
      item.description === "" ||
      item.videoUrl === "" ||
      item.links[0].title === "" ||
      item.links[0].url === ""
    ) {
      toast.error("All fields are required");
    } else {
      let newVideoSection = "";
      if (courseContent.length > 0) {
        const lastVideoSection =
          courseContent[courseContent.length - 1].videoSection;
        if (lastVideoSection) {
          newVideoSection = lastVideoSection;
        }
      }

      const newContent = {
        videoUrl: "",
        title: "",
        description: "",
        videoSection: newVideoSection,
        links: [
          {
            title: "",
            url: "",
          },
        ],
      };

      setCourseContent([...courseContent, newContent]);
    }
  };

  return (
    <div className="md:w-[90%] ">
      <h5 className="text-2xl">Course Content</h5>
      <form onSubmit={handleSubmit}>
        {courseContent?.map((item: any, i: number) => {
          const showSectionInput =
            i === 0 || item.videoSection !== courseContent[i - 1].videoSection;

          return (
            <div
              key={i}
              className={`w-full bg-light_secondary p-4 rounded-md border-b ${
                showSectionInput ? "mt-2" : "mb-0"
              } `}
            >
              {showSectionInput && (
                <>
                  <div className="">
                    <input
                      placeholder="Section Title"
                      value={item.videoSection}
                      type="text"
                      className={`bg-dark_text dark:text-dark_bg rounded-md border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary text-base outline-none py-0 px-3 leading-8 transition-colors duration-300 ease-in-out w-full mb-2 `}
                      onChange={(e) => {
                        const updateData = [...courseContent];
                        updateData[i].videoSection = e.target.value;
                        setCourseContent(updateData);
                      }}
                    />
                  </div>
                </>
              )}
              <div className="w-full flex justify-between items-start my-0">
                {collapsed[i] ? (
                  <>
                    {item.title ? (
                      <p className="text-light_text dark:text-dark_text">
                        {i + 1}. {item.title}
                      </p>
                    ) : (
                      <>
                        <p className="text-light_text dark:text-dark_text">
                          {i + 1}. Video Title
                        </p>
                      </>
                    )}
                  </>
                ) : (
                  <div></div>
                )}

                {/* arrow */}
                <div className="flex items-start">
                  <DeleteForever
                    className={`mr-2 ${
                      i > 0 ? "cursor-pointer" : "cursor-no-drop"
                    } `}
                    onClick={() => {
                      if (i > 0) {
                        const updateData = [...courseContent];
                        updateData.splice(i, 1);
                        setCourseContent(updateData);
                      }
                    }}
                  />

                  <ExpandMore
                    className="!transition-all !duration-300"
                    sx={{
                      transform: collapsed[i]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    onClick={() => handleCollapsed(i)}
                  />
                </div>
              </div>
              {!collapsed[i] && (
                <>
                  <div className="my-2">
                    <h1 className="mb-1 text-light_text dark:text-dark_text font-medium  text-sm">
                      Video Title
                    </h1>
                    <input
                      placeholder="Video Title"
                      value={item.title}
                      type="text"
                      className={`bg-dark_text dark:text-dark_bg rounded-md border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary text-base outline-none py-0 px-3 leading-8 transition-colors duration-300 ease-in-out w-full mb-2 `}
                      onChange={(e) => {
                        const updateData = [...courseContent];
                        updateData[i].title = e.target.value;
                        setCourseContent(updateData);
                      }}
                    />
                  </div>
                  <div className="my-2">
                    <h1 className="mb-1 text-light_text dark:text-dark_text font-medium text-sm">
                      Video URL
                    </h1>
                    <input
                      placeholder="Video URL"
                      value={item.videoUrl}
                      type="text"
                      className={`bg-dark_text dark:text-dark_bg rounded-md border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary text-base outline-none py-0 px-3 leading-8 transition-colors duration-300 ease-in-out w-full mb-2 `}
                      onChange={(e) => {
                        const updateData = [...courseContent];
                        updateData[i].videoUrl = e.target.value;
                        setCourseContent(updateData);
                      }}
                    />
                  </div>
                  <div className="my-2">
                    <h1 className="mb-1 text-light_text dark:text-dark_text font-medium text-sm">
                      Video Description
                    </h1>
                    <textarea
                      rows={5}
                      placeholder="Video Description"
                      value={item.description}
                      className={`bg-dark_text dark:text-dark_bg rounded-md border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary text-base outline-none py-0 px-3 leading-8 transition-colors duration-300 ease-in-out w-full mb-2 !h-min`}
                      onChange={(e) => {
                        const updateData = [...courseContent];
                        updateData[i].description = e.target.value;
                        setCourseContent(updateData);
                      }}
                    />
                  </div>
                  <div className="my-2 rounded-md border border-light_primary dark:border-dark_primary p-4">
                    {item?.links.map((link: any, linkI: number) => (
                      <div key={linkI} className="">
                        <div className="flex justify-between items-center">
                          <h1 className="mb-1 text-light_text dark:text-dark_text font-medium text-sm">
                            Link {linkI + 1}
                          </h1>
                          <DeleteForever
                            className={`${
                              linkI === 0 ? "cursor-no-drop" : "cursor-pointer"
                            } `}
                            onClick={() => {
                              linkI === 0 ? null : handleRemoveLink(i, linkI);
                            }}
                          />
                        </div>
                        <input
                          placeholder="Link Title"
                          value={link.title}
                          type="text"
                          className={`bg-dark_text dark:text-dark_bg rounded-md border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary text-base outline-none py-0 px-3 leading-8 transition-colors duration-300 ease-in-out w-full mb-2 `}
                          onChange={(e) => {
                            const updateData = [...courseContent];
                            updateData[i].links[linkI].title = e.target.value;
                            setCourseContent(updateData);
                          }}
                        />
                        <input
                          placeholder="Link Url"
                          value={link.url}
                          type="text"
                          className={`bg-dark_text dark:text-dark_bg rounded-md border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary text-base outline-none py-0 px-3 leading-8 transition-colors duration-300 ease-in-out w-full mb-2 `}
                          onChange={(e) => {
                            const updateData = [...courseContent];
                            updateData[i].links[linkI].url = e.target.value;
                            setCourseContent(updateData);
                          }}
                        />
                      </div>
                    ))}

                    <div className="my-[10px] flex flex-col">
                      <Button
                        onClick={() => {
                          addNewLink(i);
                        }}
                        sx={{ textTransform: `capitalize` }}
                        className="!text-light_text  !bg-dark_text dark:!bg-dark_text py-2 px-6 text-lg hover:opacity-80 duration-300 rounded-md !border !border-light_primary dark:!border-dark_primary capitalize !shadow-none"
                        component="label"
                        variant="outlined"
                        startIcon={<AddSharp />}
                      >
                        Add New Link
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {/* new content */}
              {i === courseContent.length - 1 && (
                <div className="my-[10px] flex flex-col">
                  <Button
                    onClick={() => {
                      handleAddContent(item);
                    }}
                    sx={{ textTransform: `capitalize` }}
                    className="!text-light_text  !bg-dark_text dark:!bg-dark_text py-2 px-6 text-lg hover:opacity-80 duration-300 rounded-md !border !border-light_primary dark:!border-dark_primary capitalize !shadow-none"
                    component="label"
                    variant="outlined"
                    startIcon={<AddSharp />}
                  >
                    Add New Content
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </form>
    </div>
  );
};
export default CourseContent;
