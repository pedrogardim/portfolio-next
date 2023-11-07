"use client";
import { useState } from "react";
import ProjectInfo from "../../components/projects/ProjectInfo";
import Button from "../../components/ui/Button";

const MOCK_PROJECT = {
  description:
    "An innovative Meet & Connect application blending innovative UI with gamification, tailored to connect users based on shared interests. Experience intuitive interactions in a space designed for engagement and common passions.",
  stack: {
    frontend: "React Native, Expo, Tailwind, ReduxTK",
    backend: "Node.js, Fastify, MongoDB",
  },
  repoUrl: "https://github.com/pedrogardim",
  demoUrl: "https://github.com/pedrogardim/modulab",
  images: [
    "https://images.pexels.com/photos/18894573/pexels-photo-18894573/free-photo-of-edificio-bosque-arboles-vintage.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  ],
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  return (
    <main className="grid justify-center grid-rows-1 grid-cols-1 md:grid-cols-2 w-full h-full my-16">
      <div
        className={`md:flex flex-col justify-center items-start ${
          selectedProject !== null ? "hidden" : "flex"
        }`}
      >
        <h1 className="text-secondary text-4xl font-bold mb-4">Projects</h1>
        {[
          "Agape",
          "Modulab",
          "Musabeat",
          "Scriptura API",
          "Mastermind",
          "GameboyJS",
        ].map((option, i) => (
          <button
            key={option}
            className={`text-3xl font-bold mb-2 hover:text-primary ${
              selectedProject === i ? "text-primary" : "text-white"
            }`}
            onClick={() => setSelectedProject((p) => (p === i ? null : i))}
          >
            {selectedProject === i && (
              <span className="text-secondary">{">"}</span>
            )}
            {option}
          </button>
        ))}
      </div>
      <div
        className={`relative ${selectedProject !== null ? "flex" : "hidden"}`}
      >
        <Button
          onClick={() => setSelectedProject(null)}
          className="absolute top-0 right-0 font-bold z-10 flex md:hidden"
        >
          X
        </Button>
        <ProjectInfo data={MOCK_PROJECT} />
      </div>
    </main>
  );
}
