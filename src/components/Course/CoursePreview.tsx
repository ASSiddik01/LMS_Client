import VideoPlayer from "./VideoPlayer";

type props = {
  active: number;
  setActive: (active: number) => void;
  course: any;
  handleCourseCreate: any;
};

const CoursePreview = ({
  active,
  setActive,
  course,
  handleCourseCreate,
}: props) => {
  return (
    <div className="md:w-[90%]">
      <h5 className="text-2xl text-light_text dark:text-dark_text duration-300">
        Course Preview
      </h5>
      <div className="w-full relative mt-5">
        <div className="video_player">
          <VideoPlayer videoUrl={course?.demoUrl} title={course?.title} />
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
