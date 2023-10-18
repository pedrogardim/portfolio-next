import TagStyledText from "../components/ui/TagStyledText";

export default function Home() {
  return (
    <main className="grid grid-cols-2 w-full h-full">
      <div className="grid grid-rows-home-column">
        <div></div>
        <div className="flex flex-col justify-center gap-y-4">
          <TagStyledText autoClosing className="text-4xl">
            Hi!
          </TagStyledText>
          <span className="text-primary text-5xl font-bold">
            I'm Pedro Gardim
          </span>
          <span className="text-white text-2xl font-bold">
            Full stack developer
          </span>
        </div>
        <div className="flex flex-col gap-y-4">
          {["projects", "profile", "contact", "github", "cv"].map((option) => (
            <TagStyledText button className="text-2xl" key={option}>
              {option}
            </TagStyledText>
          ))}
        </div>
      </div>
      <div className="grid grid-rows-home-column">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
