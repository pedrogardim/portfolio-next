import Image from "next/image";
import TagStyledText from "../components/ui/TagStyledText";
import AutoWrittingCode from "../components/home/AutoWrittingCode";

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
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="bg-primary rounded-full w-40 h-40 flex justify-center items-center overflow-hidden">
            <Image
              src="/assets/profilepic.png"
              width={200}
              height={200}
              alt="Picture of me"
            />
          </div>
          <p className="text-white text-lg text-center w-full">
            I am a developer based in Valencia, Spain. I've been working on web
            projects since 2021. I'm excited about continuous learning and
            passionate about solving problems!
          </p>
        </div>
        <div className="border border-secondary overflow-hiden">
          <AutoWrittingCode />
        </div>
      </div>
    </main>
  );
}
