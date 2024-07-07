import React from "react";
import { BiShow } from "react-icons/bi";
import { motion } from "framer-motion";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    window.open(course.link, "_blank");
  }

  return (
    <motion.div
      className="w-[300px] h-[320px] bg-[#4484ce] bg-opacity-80 rounded-ms overflow-hidden rounded-md"
      whileInView={{
        opacity: [0, 1],
        scale: [0.5, 1],
        transition: {
          duration: 1,
        },
      }}
    >
      <div className="relative">
        <img src={course.image.url} alt={course.title}></img>
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3">
          <button
            onClick={clickHandler}
            className=" transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-500 p-2 rounded-full"
          >
            <BiShow
              fontSize="1.75rem"
              className="text-gray-500 hover:text-white"
            />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
