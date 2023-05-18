import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar dark:bg-[#020111] bg-white overflow-x-hidden text-black">
      <div
        id="section1"
        className=" snap-start snap-always h-screen bg-slate-100"
      >
        section1
      </div>
      <div
        id="section2"
        className=" snap-start snap-always h-screen bg-slate-200"
      >
        section2
      </div>
      <div
        id="section3"
        className=" snap-start snap-always h-screen bg-slate-300"
      >
        section3
      </div>
      <div
        id="section4"
        className=" snap-start snap-always h-screen bg-slate-400"
      >
        section4
      </div>
    </div>
  );
}
