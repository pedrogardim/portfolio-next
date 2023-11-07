"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/ui/Button";
import Tilt from "react-parallax-tilt";

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
  return (
    <main className="grid justify-center grid-cols-2 w-full h-full my-16">
      <div className="flex flex-col justify-center">
        <h1 className="text-secondary text-4xl font-bold mb-4">Projects</h1>
        {[
          "Agape",
          "Modulab",
          "Musabeat",
          "Scriptura API",
          "Mastermind",
          "GameboyJS",
        ].map((option) => (
          <Link href="/projects" key={option}>
            <button className="text-3xl text-white font-bold mb-2 hover:text-primary">
              {option}
            </button>
          </Link>
        ))}
      </div>
      <div className="grid justify-stretch grid-rows-2 text-lg text-center">
        <div>
          <Tilt
            className="w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
            gyroscope
          >
            {MOCK_PROJECT.images.map((e, i) => (
              <Image
                src={e}
                alt=""
                key={e}
                layout="fill"
                objectFit="contain"
                className="absolute w-full h-full"
                style={{
                  transform: `translateZ(${i * 30}px)`,
                }}
              ></Image>
            ))}
          </Tilt>
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <span className="text-white line-clamp-4">
            {MOCK_PROJECT.description}
          </span>
          <div>
            <div className="text-primary line-clamp-2">
              <span className="text-secondary">Frontend </span>
              {MOCK_PROJECT.stack.frontend}
            </div>
            <div className="text-primary line-clamp-2">
              <span className="text-secondary">Backend </span>
              {MOCK_PROJECT.stack.backend}
            </div>
          </div>
          <div className="flex gap-x-4 justify-center">
            <Link href={MOCK_PROJECT.demoUrl} target="_blank">
              <Button>Try It</Button>
            </Link>
            <Link href={MOCK_PROJECT.repoUrl} target="_blank">
              <Button variant="secondary">Repo</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
