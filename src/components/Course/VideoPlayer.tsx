type props = {
  videoUrl: string;
  title: string;
};

const VideoPlayer = ({ videoUrl, title }: props) => {
  return (
    <div className="md:w-[90%]">
      <h5 className="text-2xl text-light_text dark:text-dark_text duration-300">
        VideoPlayer
      </h5>
      <div className="w-full relative mt-5">
        <div className="video_player"></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
