import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="tex-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dicta
          atque cumque, esse aspernatur repellendus iste, assumenda animi
          adipisci praesentium non, velit consectetur quia ipsam. Tempora
          maiores ipsa architecto non.
        </p>
        <b></b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          repellendus ex cum? Dolor, distinctio! Perferendis, illum quae. Sequi,
          consequuntur porro vel quidem praesentium, veritatis molestiae
          mollitia, recusandae accusantium harum magnam.
        </p>
      </div>
    </div>
  );
};

export default About;
