import Link from "next/link";
import ProjectInfo from "../../components/projects/ProjectInfo";

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
      <ProjectInfo data={MOCK_PROJECT} />
    </main>
  );
}
