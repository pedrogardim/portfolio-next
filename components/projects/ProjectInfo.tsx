"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Button from "../../components/ui/Button";

interface ProjectData {
  description: string;
  stack: {
    frontend: string;
    backend: string;
  };
  repoUrl: string;
  demoUrl: string;
  images: string[];
}

export default function ProjectInfo({ data }: { data: ProjectData }) {
  return (
    <div className="grid justify-stretch grid-rows-2 text-lg text-center">
      <div>
        <Tilt
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          gyroscope
        >
          {data.images.map((e, i) => (
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
        <span className="text-white line-clamp-4">{data.description}</span>
        <div>
          <div className="text-primary line-clamp-2">
            <span className="text-secondary">Frontend </span>
            {data.stack.frontend}
          </div>
          <div className="text-primary line-clamp-2">
            <span className="text-secondary">Backend </span>
            {data.stack.backend}
          </div>
        </div>
        <div className="flex gap-x-4 justify-center">
          <Link href={data.demoUrl} target="_blank">
            <Button>Try It</Button>
          </Link>
          <Link href={data.repoUrl} target="_blank">
            <Button variant="secondary">Repo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
