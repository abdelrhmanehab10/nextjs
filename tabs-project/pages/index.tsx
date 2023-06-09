import Head from "next/head";
import { Inter } from "next/font/google";
import Tabs from "@/components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabs Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center md:justify-center md:h-[70vh]">
        <h1 className={`
        relative
        text-4xl 
        font-bold 
        mt-16 
        tracking-widest 
        before:content-[''] 
        before:w-[80px]
        before:h-[4px]
        before:bg-main
        before:absolute
        before:-bottom-3
        before:left-1/2
        before:-translate-x-1/2
        `}
        >Ecpierence</h1>
        <Tabs />
      </main>
    </>
  );
}
