import Link from "next/link";

export default function Projects() {
  return (
    <main className="grid justify-center grid-cols-2 w-full h-full my-16">
      <div className="flex flex-col justify-center border border-secondary">
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
            <button className="text-3xl text-white font-bold mb-2">
              {option}
            </button>
          </Link>
        ))}
      </div>
      <div className="flex justify-center border border-primary"></div>
    </main>
  );
}
