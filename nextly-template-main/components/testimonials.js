import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Tax Plus was a lifesaver! They took care of both my <Mark>income tax and GST filing</Mark>, 
            making the whole process incredibly smooth. 
            No more scrambling between different systems – 
            it was all streamlined and efficient.
            </p>

            <Avatar
              image={userOneImg}
              name="Ashia Kumari"
              title="Sr. Devloper NP"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            I used to dread tax season, but <Mark>Tax Plus has changed the game.</Mark> 
            Their platform is user-friendly and their support is fantastic. 
            They ensure I maximize my deductions for income tax while also 
            taking care of my GST compliance. Highly recommend!
            </p>

            <Avatar
              image={userTwoImg}
              name="Rakesh Swain"
              title="Lead Devloper NP"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Running a small business can be overwhelming, 
            but <Mark>Tax Plus takes the stress out of tax filing.</Mark>  
            They handle both my income tax return and my GST, 
            allowing me to focus on what I do best. They're knowledgeable, 
            professional, and always available to answer my questions.
            </p>

            <Avatar
              image={userThreeImg}
              name="Nalini Kanta"
              title="Co-founder of HUT Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;