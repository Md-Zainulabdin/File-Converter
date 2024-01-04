import Dropzone from "@/components/Dropzone";
import React from "react";

const Home = () => {
  return (
    <div className="space-y-16 pb-8">
      <div className="hero pt-12">
        <div className="space-y-6">
          <h1 className="text-3xl text-center font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Free Unlimited File Converter
          </h1>

          <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
            Unleash your creativity with ConvertifyX – the ultimate online tool for
            unlimited and free multimedia conversion. Transform images, audio,
            and videos effortlessly, without restrictions. Start converting now
            and elevate your content like never before!
          </p>
        </div>
      </div>

      {/* DropZone Area */}
      <Dropzone />
    </div>
  );
};

export default Home;
