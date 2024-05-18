import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Home() {
    const [text] = useTypewriter({
        words: [
            "Anukriti",
            "a Web Developer",
            "a Graphic Desiginer",
            "a Software Engineer",
        ],
        loop: {},
    });

    return (
        <div className="w-full h-full bg-black">
            <div className="w-full  h-full bg-[url('./assets/bg-black.jpg')] bg-center bg-contain">
                <div className="h-full w-full bg-black md:bg-black/50 p-4 pl-2 sm:pl-10 sm:pt-10">
                    <h1 className=" text-white lg:h-auto h-[120px] text-3xl sm:text-5xl font-serif sm:mt-10 ml-5">
                        Hi, I am <br className="lg:hidden" />
                        <span className="font-semibold cursor-pointer font-Font1 hover:text-fuchsia-400 transition-all ease-in-out text-fuchsia-500">
                            {" "}
                            {text}
                        </span>
                        <Cursor />
                    </h1>
                    <h3 className="text-white font-sans mb-10 pl-5 lg:pt-5  text-justify text-sm sm:text-md w-full pr-5 md:w-[90%] lg:w-[60%] xl:w-[40%] tracking-wider">
                        Welcome to my Portfolio, I am a 3rd year undergraduate
                        student at IIT (BHU) Varanasi. With a unique blend of
                        technical expertise and creative flair, I enjoy
                        designing graphics and developing websites. I enjoy
                        taking on challenging tasks that encourage me to think
                        and create outside the box and contribute to my personal
                        growth.
                    </h3>
                    <div className=" w-full gap-2 h-auto flex flex-col sm:flex-row sm:ml-5 justify-center px-5 sm:px-0 sm:justify-start text-sm md:text-md">
                        <Link
                            to={"./work"}
                            className="text-white bg-fuchsia-700 font-sans font-bold hover:bg-fuchsia-500 transition-all ease-in-out border rounded-xl text-center px-5 py-3"
                        >
                            My Works
                        </Link>
                        <Link
                            to={"./Achievement"}
                            className="text-white bg-fuchsia-700 font-sans font-bold hover:bg-fuchsia-500 transition-all ease-in-out border rounded-xl text-center px-5 py-3"
                        >
                            My Achievements
                        </Link>
                    </div>
                    <div className="lg:px-20 sm:mt-16 mt-16 lg:py-10 text-white w-full h-auto md:mt-[200px] flex md:justify-end justify-center text-center md:text-right">
                        <ul className="flex flex-col md:flex-row md:justify-center lg:justify-end  md:gap-10 text-sm md:text-xl w-full md:text-md lg:text-2xl mb-5 h-auto">
                            <Link
                                to={"https://github.com/anuukriti"}
                                target="_blank"
                                className="md:bg-none rounded-xl py-3 sm:py-4 hover:bg-fuchsia-500/50 md:hover:bg-transparent md:hover:text-fuchsia-500 border-fuchsia-950/70  md:border-none border-t-2 border-b cursor-pointer transition-all ease-in-out"
                            >
                                Github
                            </Link>
                            <Link
                                to={"https://www.linkedin.com/in/anukriti9/"}
                                target="_blank"
                                className="md:bg-none rounded-xl py-3 sm:py-4 hover:bg-fuchsia-500/50 border-fuchsia-950/70 md:hover:text-fuchsia-500 md:hover:bg-transparent  md:border-none border-y-2 cursor-pointer transition-all ease-in-out"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                to={"https://dribbble.com/Kritianu"}
                                target="_blank"
                                className="md:bg-none rounded-xl py-3 sm:py-4 hover:bg-fuchsia-500/50 md:hover:bg-transparent md:hover:text-fuchsia-500 border-fuchsia-950/70  md:border-none border-y cursor-pointer transition-all ease-in-out"
                            >
                                Dribbble
                            </Link>
                            <Link
                                to={
                                    "https://drive.google.com/file/d/1YCDyoJVPyT2FYkFjk_X3V-N18EzeP-qY/view?usp=sharing"
                                }
                                target="_blank"
                                className="md:bg-none rounded-xl py-3 sm:py-4 hover:bg-fuchsia-500/50 md:hover:bg-transparent md:hover:text-fuchsia-500 border-fuchsia-950/70  md:border-none border-y-2 cursor-pointer transition-all ease-in-out"
                            >
                                Resume
                            </Link>
                            <Link
                                to={"./About"}
                                target="_blank"
                                className="md:bg-none rounded-xl py-3 sm:py-4 hover:bg-fuchsia-500/50 md:hover:bg-transparent md:hover:text-fuchsia-500 border-fuchsia-950/70  md:border-none border-b-2 border-t cursor-pointer transition-all ease-in-out"
                            >
                                Contact
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
