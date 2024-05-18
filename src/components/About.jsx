import React from "react";
import myPhoto from "../assets/me.jpg";
import { Link } from "react-router-dom";

function About() {
    // console.log(myPhoto);
    return (
        <div className="h-full w-full bg-black sm:px-10 px-5 py-5 text-white mt-5">
            <div className="w-full h-full flex flex-col lg:flex-row">
                <div className="sm:px-10 h-full">
                    <img
                        src={myPhoto}
                        alt="profile_photo"
                        className="rounded-xl shadow-xl shadow-gray-800"
                    />
                </div>
                <div className="sm:px-10 h-full w-full flex py-8 lg:py-0 flex-col items-start ">
                    <p className="font-Font2 tracking-widest text-md  leading-8 text-justify">
                        <span className="text-xl ">Hi, </span> I am a 3rd year
                        undergraduate student at IIT (BHU) Varanasi. I am a
                        dedicated developer with skills in website development,
                        web design, graphic design, and software development. I
                        work as a design head in the Society of Chemical
                        Engineering (SoChem) in IIT BHU. I enjoy taking on
                        challenging tasks that encourage me to think and create
                        outside the box and contribute to my personal growth.
                    </p>

                    <p className="text-xl font-semibold py-5">
                        You can also visit my Profile: <br />
                    </p>
                    <div className="flex flex-col justify-center sm:justify-start w-full text-center sm:flex-row gap-5 mt-5">
                        <Link
                            to={"https://github.com/anuukriti"}
                            target="_blank"
                            className="hover:text-fuchsia-500 py-2 border border-transparent hover:border-white bg-fuchsia-300 rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Github
                        </Link>
                        <Link
                            to={"https://dribbble.com/Kritianu"}
                            target="_blank"
                            className="hover:text-fuchsia-500 py-2 hover:border border-transparent hover:border-white bg-fuchsia-300 rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Dribbble
                        </Link>
                        <Link
                            to={"https://www.linkedin.com/in/anukriti9/"}
                            target="_blank"
                            className="hover:text-fuchsia-500 py-2 hover:border border-transparent hover:border-white bg-fuchsia-300 rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            LinkedIn
                        </Link>
                    </div>

                    <p className="sm:text-xl mt-5">
                        My email:{" "}
                        <span className=" font-medium">
                            anukriti.student.che21@itbhu.ac.in
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
