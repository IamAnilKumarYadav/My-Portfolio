import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        We are a team of highly skilled MERN Stack developers passionate about creating innovative
         and robust web applications. With expertise in MongoDB, Express.js, React, and Node.js, 
         we have the ability to develop scalable and experience in building modern and interactive web applications using the MERN Stack.
        </p>

        <br />

        <p className="text-xl">
        React, our preferred front-end library, allows us to build dynamic and responsive user interfaces that deliver exceptional user experiences. 
        Whether it's a single-page application or a complex web portal, our expertise in React enables us to develop feature-rich and highly interactive UIs.
        </p>
      </div>
    </div>
  );
};

export default About;
