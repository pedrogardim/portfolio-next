"use client";
import { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { spaceMono } from "../../utils/fonts";
import useTypingText from "../../hooks/useTypingText";

const code = `const i = {};
i.am = ['Pedro Gardim','Web developer'];
i.code = ['React','NodeJS','CSS','Express','TS'];
i.workWith = ['Github','Jira','Agile','Scrum'];
i.aspireTo = 'Work on a dynamic and vibrant company!';
i.speak = ['English','Spanish','Portuguese'];
i.love = ['Challenges','Family','Music','Videogames'];
`;

const longestLine = Math.max(
  ...code.split(/\r?\n|\r|\n/g).map((line) => line.length)
);

export default function AutoWrittingCode() {
  const [textFontSize, setTextFontSize] = useState(0);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const typingCode = useTypingText(code);

  const updateFontFize = () =>
    setTextFontSize(
      ((parentRef.current?.offsetWidth || 0) / longestLine) * 1.58
    );

  useEffect(() => {
    updateFontFize();
    window.addEventListener("resize", updateFontFize);
    return () => window.removeEventListener("resize", updateFontFize);
  }, []);

  return (
    <div ref={parentRef} className="hidden md:flex">
      <SyntaxHighlighter
        language="typescript"
        useInlineStyles={false}
        customStyle={{
          background: "transparent",
          color: "white",
          ...spaceMono.style,
          fontSize: textFontSize,
          lineHeight: 1,
        }}
        PreTag={"span"}
        CodeTag={"span"}
      >
        {typingCode}
      </SyntaxHighlighter>
    </div>
  );
}
