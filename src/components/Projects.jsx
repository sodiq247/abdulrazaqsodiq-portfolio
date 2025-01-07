import { content } from "../Content";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { BiLink } from "react-icons/bi";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary min-h-fit" id="projects">
      <div className="min-h-fit md:container px-5  flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse ">
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl  max-w-xs md:max-w-[45vw] md:min-w-[22rem] drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-dark rounded-3xl p-5  border-b-8 border-[#FAF9FD] min-h-fit"
              >
                <img src={content.image} alt="..." className="" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button  className="font-bold text-gray self-end " >
                  <a
                    href={content.link}
                    onClick={() => setActive(i)}>
                    Visit project
                    </a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
