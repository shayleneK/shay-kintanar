import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className=" flex flex-wrap min-h-screen w-full p-2 items-center justify-center font-sans gap-5 text-primary ">
      <div className="flex flex-col w-9/10 max-w-[800px] p-2 bg-white rounded-lg shadow-md text-black">
        <p className="font-bold text-lg">Contact Me</p>
        {/* <form action="">
          <input
            type="text"
            name="email"
            id="email"
            className="border-b border-black"
          />
        </form> */}
        <p>Contact Number 0917 774 0508</p>
        <p>shaykintanar@gmail.com</p>
      </div>
    </div>
  );
}
