import React from "react";
import { Card } from "./Card";
import todoApp from "../assets/todoApp.png";
import weatherForcastApp from "../assets/weatherForcastApp.png";
import spotifyCloneImg from "../assets/spotifyClone.png";
import passwordGenAPP from "../assets/passwordGenAPP.png";
import currencyConverter from "../assets/currencyConverter.png";
import shoppingappimg from "../assets/ecommerceShopping.png";
import pathFinderImg from "../assets/pathFinder.png";


function MyProjects() {
    const projects = [
        {
            id: 6,
            projectImg: "/assets/ecommerceShopping-DPlLdj53.png",
            projectName: "E-commerce Web Application",
            skill: ["React.js", "Redux", "Firebase", "Razorpay"],
            description: [
                "Built a full-stack e-commerce web application with role-based access control for admins and users.",
                "Implemented product search, filtering, carousel, and pagination for streamlined content management.",
                "Used Firebase for authentication and data storage, and integrated Razorpay for payment processing.",
            ],
            url: "https://kreteria-shopping-hub.vercel.app/",
        },
        {
            id: 7,
            projectImg: "/assets/pathFinder-B575lzCa.png",
            projectName: "Shortest Path Finding Visualizer",
            skill: ["HTML", "JavaScript", "Algorithms"],
            description: [
                "Implemented A*, Dijkstra’s, and BFS algorithms to visualize the shortest path with obstacles in the grid.",
                "Developed features for users to set start/end points and place obstacles, enhancing control and pathfinding accuracy.",
            ],
            url: "https://paathfinder.netlify.app/",
        },
        {
            id: 1,
            projectImg: "/assets/todoApp-B5KeKsFU.png",
            projectName: "TodoApp",
            skill: ["React", "Tailwind CSS", "JavaScript", "react-router-dom"],
            description: [
                "Design an intuitive and easy-to-use interface for seamless task management.",
                "Allow users to delete, edit, and check the tasks they no longer need.",
            ],
            url: "https://mytoodooo.netlify.app/",
        },
        {
            id: 2,
            projectImg: "/assets/spotifyClone-ztsnvg1k.png",
            projectName: "Spotify Clone",
            skill: ["React", "Tailwind CSS", "JavaScript", "Spotify API"],
            description: [
                " Developed a Spotify clone using React.js.",

                "Implemented user authentication, playlist management, song playback, and search functionality.",
            ],
            url: "https://github.com/anuukriti/spotify-clone",
        },
        {
            id: 3,
            projectImg: "/assets/weatherForcastApp-DPEVdu-I.png",
            projectName: "Weather Forcast App",
            skill: ["HTML", "CSS", "JavaScript", "API"],
            description: [
                "Built a web app to see the current weather condition and weather forecast for searched locations.",
                "Integrated OpenWeather API to get weather forecast data.",
            ],
            url: "https://weather-app-anukriti.netlify.app/",
        },
        {
            id: 4,
            projectImg: "/assets/currencyConverter-G9Ih2jra.png",
            projectName: "Currency Converter App",
            skill: ["React", "Tailwind CSS", "JavaScript", "API", "Algorithm"],
            description: [
                "Built a responsive Currency Converter App using React.",
                "Integrated currency API to all the currency data.",
            ],
            url: "https://exchangethecurrency.netlify.app/",
        },
        {
            id: 5,
            projectImg: "/assets/passwordGenAPP-lS9ADBlJ.png",
            projectName: "Random Password Generator",
            skill: ["React", "Tailwind CSS", "JavaScript", "Algorithm"],
            description: [
                "Built a random password generator to generate passwords according to user-given criteria.",
                "User can choose length and options to include numbers and symbols in the password.",
            ],
            url: "https://passwordgem.netlify.app/",
        },
    ];

    console.log(projects[0].projectImg);
    return (
        <div className="h-auto text-white w-full bg-[url('https://i.pinimg.com/564x/0f/52/26/0f5226c06adec25af88c2ed830a44f84.jpg')] px-10 py-10 bg-repeat-round">
            <div className="h-auto w-full mb-5 flex item-center justify-center text-center text-2xl font-Font1 font-semibold">
                <h1>Projects</h1>
            </div>
            <div className="h-full w-full overflow-y-scroll overflow-x-hidden sm:px-10">
                {projects.map((p) => (
                    <Card
                        key={p.id}
                        Img={p.projectImg}
                        Name={p.projectName}
                        skill={p.skill}
                        description={p.description}
                        url={p.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default Work;
