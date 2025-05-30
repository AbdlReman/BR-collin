import React from "react";
import Image from "next/image";
import images from "../../../../public/assets/images/images";
const ImpactSection = () => {
  return (
    <section className=" py-12 md:py-20 bg-white text-center w-full px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Creating Impact Around The World
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      With our global catalog spanning the latest skills and topics, people and organizations
      everywhere are able to adapt to change and thrive.
    </p>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-3 h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] md:h-[400px] 2xl:w-full xl:w-[1380px] lg:w-[1300px] md:w-[900px] w-full">
      <div className="2xl:w-190 xl:w-130 lg:w-110 md:w-100 w-full rounded-xl overflow-hidden shadow-md mx-[10px] h-[280px]">
        <Image
          src={images.Impact}
          alt="Happy learner"
          className="object-cover w-full h-[280px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-3 2xl:w-135 xl:w-100 lg:w-95 md:w-90 w-full h-[280px]">
        <div className="bg-red-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">500+</h3>
          <p className="text-sm text-gray-600">Learners & counting</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">800+</h3>
          <p className="text-sm text-gray-600">Courses & Video</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">100+</h3>
          <p className="text-sm text-gray-600">Registered Enrolls</p>
        </div>
        <div className="bg-red-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">1000+</h3>
          <p className="text-sm text-gray-600">Certified Students</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ImpactSection;
