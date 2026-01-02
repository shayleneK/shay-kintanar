import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full p-2 items-center  font-sans text-primary ">
      <div className="flex flex-wrap w-2/3 items-stretch gap-4 justify-center">
        <Image
          src="/Kintanar_ID.JPG"
          width={250}
          height={700}
          className="rounded-lg shadow-md"
          style={{ objectFit: "contain" }}
          alt="Picture of the author"
        />
        <div className="flex flex-col w-full lg:w-2/3 p-10 gap-4 bg-white rounded-lg text-black">
          <p className="font-bold">Hey!</p>
          <p>
            I’m Shay Kintanar, a full-stack developer with a focus on building
            clean, reliable, and user-centered web applications. I enjoy working
            across the stack to turn ideas into thoughtful digital experiences,
            balancing functionality, performance, and design.
          </p>
          <p></p>
          <p>
            I’m constantly learning, refining my craft, and navigating the
            occasional creative shilly shally dilly dally that comes with
            building things from scratch.
          </p>
        </div>
      </div>
      {/* <div className="w-2/3 p-2">
        <h1>My skills</h1>
        <div className="flex gap-2 flex-wrap">
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>Python</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>Laravel</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>Vite + Vue</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>NextJS</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>React</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>JavaScript</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>MongoDB</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>PostgreSQL</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>Express</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>Java</p>
          </div>
          <div className="rounded-4xl h-6 px-3 items-center justify-center bg-primary text-background">
            <p>C++</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
