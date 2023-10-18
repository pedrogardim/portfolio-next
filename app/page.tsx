import TagStyledText from "../components/ui/TagStyledText";

export default function Home() {
  return (
    <main className="grid grid-cols-2 w-full h-full">
      <div className="grid grid-rows-home-column">
        <div></div>
        <div className="flex flex-col justify-center gap-y-4">
          <TagStyledText autoClosing className="text-4xl font-bold">
            Hi!
          </TagStyledText>
          <span className="text-primary text-5xl font-bold">
            I'm Pedro Gardim
          </span>
          <span className="text-white text-xl font-bold">
            Full stack developer
          </span>
        </div>
        <div></div>
      </div>
      <div className="grid grid-rows-home-column">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
