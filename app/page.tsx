import Image from "next/image";
import Link from "next/link";
import TagStyledText from "../components/ui/TagStyledText";
import AutoWrittingCode from "../components/home/AutoWrittingCode";

export default function Home() {
  return (
    <main className="flex flex-col justify-center md:grid md:grid-cols-2 grid-rows-home-column w-full h-full grid-flow-col gap-y-6 md:gap-0 my-16 md:my-0">
      <div className="order-1 flex justify-center">
        <div className="md:hidden bg-primary rounded-full w-30 h-30 flex justify-center items-center overflow-hidden">
          <Image
            src="/assets/profilepic.png"
            width={128}
            height={128}
            alt="Picture of me"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-1 md:gap-y-4 order-2 items-center md:items-start">
        <TagStyledText autoClosing className="text-2xl md:text-4xl">
          Hi!
        </TagStyledText>
        <span className="text-primary text-2xl md:text-5xl font-bold">
          I'm Pedro Gardim
        </span>
        <span className="text-white text-lg md:text-2xl font-bold">
          Full stack developer
        </span>
      </div>
      <div className="flex flex-col gap-y-4 order-3 items-center md:items-start">
        {["projects", "profile", "contact", "github", "cv"].map((option) => (
          <Link href={`/${option}`} key={option}>
            <TagStyledText button className="text-lg md:text-2xl">
              {option}
            </TagStyledText>
          </Link>
        ))}
      </div>
      <div className="order-4"></div>
      <div className="flex flex-col justify-center items-center gap-y-4 order-2 md:order-5">
        <div className="hidden bg-primary rounded-full w-40 h-40 md:flex justify-center items-center overflow-hidden">
          <Image
            src="/assets/profilepic.png"
            width={200}
            height={200}
            alt="Picture of me"
          />
        </div>
        <p className="text-white text-sm md:text-lg text-center w-full">
          I am a developer based in Valencia, Spain.{" "}
          <span className="hidden md:visible">
            I've been working on web projects since 2021.{" "}
          </span>
          I'm excited about continuous learning and passionate about solving
          problems!
        </p>
      </div>
      <div className="order-6">
        <AutoWrittingCode />
      </div>
    </main>
  );
}
