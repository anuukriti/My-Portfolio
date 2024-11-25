import React from "react";
import myPhoto from "../assets/me.jpg";
import { Link } from "react-router-dom";

function About() {
    // console.log(myPhoto);
    return (
        <div className=" h-auto w-full bg-black sm:px-10 px-5 py-5 text-white mt-5">
            <div className="w-full h-full flex flex-col lg:flex-row">
                <div className="sm:px-10 h-full">
                    <img
                        src={myPhoto}
                        alt="profile_photo"
                        className="rounded-xl shadow-xl shadow-gray-800"
                    />
                </div>
                <div className="sm:px-10 h-auto w-full flex py-8 lg:py-0 flex-col items-start ">
                    <p className="font-Font1 tracking-widest text-md  leading-8 text-justify">
                        <span className="text-4xl ">Hi,</span> <br />  I am final
                        year undergraduate student at IIT (BHU) Varanasi.<span className="text-fuchsia-400 "> I have hands-on experience as a UI/UX Designer and Frontend Engineer at Charan Enterprises, as well as serving as the Design Head for the Society of Chemical Engineering (SoChem) at IIT BHU. </span>. I have deep interest in website development,
                        UI/UX desigining, graphic design, and software development.<br /><br />I enjoy taking on
                        challenging tasks that encourage me to think and create
                        outside the box and contribute to my personal growth. <span className="text-fuchsia-400 font-semibold">I am open to new opportunities. Please review my profile and feel free to contact me.</span>
                    </p>

                    <p className="text-fuchsia-400 font-semibold font-Font1 tracking-widest text-md  leading-8 text-justify py-5">
                        
                            My Top Skills: 
                    </p>
                    <div>
                        <ul className="flex flex-col flex-wrap justify-center sm:justify-start w-full text-center sm:flex-row gap-5" >
                        <li
                            className="py-2 border-2 border-transparent cursor-pointer hover:border-white bg-blue-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            React JS
                        </li>

                        <li
                            className="py-2 border-2 border-transparent cursor-pointer hover:border-white bg-blue-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Tailwind CSS
                        </li>

                        <li
                            className="py-2 border-2 border-transparent cursor-pointer hover:border-white bg-blue-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            JavaScript
                        </li>

                        <li
                            className="py-2 border-2 border-transparent cursor-pointer hover:border-white bg-blue-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Appwrite
                        </li>

                        <li
                            className="py-2 border-2 border-transparent cursor-pointer hover:border-white bg-blue-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Figma
                        </li>
                        <li
                            className="py-2 border-2 border-transparent cursor-pointer hover:border-white bg-blue-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Adobe Illustrator
                        </li>
                        </ul>
                    </div>

                    <p className="text-fuchsia-400 font-semibold font-Font1 tracking-widest text-md  leading-8 text-justify py-5">
                        
                            My Social Links: 
                    </p>
                    <div className="flex flex-col justify-center sm:justify-start w-full text-center sm:flex-row gap-5">
                        <Link
                            to={"https://github.com/anuukriti"}
                            target="_blank"
                            className="py-2 border-2 border-transparent hover:border-white bg-fuchsia-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Github
                        </Link>
                        <Link
                            to={"https://dribbble.com/Kritianu"}
                            target="_blank"
                            className="py-2 border-2 border-transparent hover:border-white bg-fuchsia-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            Dribbble
                        </Link>
                        <Link
                            to={"https://www.linkedin.com/in/anukriti9/"}
                            target="_blank"
                            className="py-2  borde-2 border-transparent hover:border-white bg-fuchsia-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            to={"mailto:anukriti.student.che21@itbhu.ac.in"}
                            className="py-2 border-2 border-transparent hover:border-white bg-fuchsia-400 hover:bg-fuchsia-300 transition-all ease-linear rounded-2xl px-5 text-fuchsia-950 font-bold p-2"
                        >
                            {" "}
                            Email me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
