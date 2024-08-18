import Layout from "../components/Layout";
import logo from "../../public/pictures/logo.png";
import Image from "next/image";
import TimeLine from "../components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen text-white bg-black flex-col items-center justify-between">
      
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full space-x-8"> 
          <div className="w-1/2"> 
            <Image
              src={logo}
              alt="Thang Le"
              className="w-full h-auto rounded-3xl"
              priority={true} // Improves image loading
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl">"You only live once. If you do it right, that's all you</h1>
            <h1 className="text-2xl">NEED."</h1>
            <p className="text-xl pt-10">Thang Le</p>
            <p className="text-lg">Developer, Investor, Teacher, and Learner.</p>
            <p className="pt-10">
              Thank you to my family, friends, and anyone who supported me in this journey.
            </p>
          </div>
        </div>
      </Layout>
      
      <Layout>  
        <div className="flex flex-col items-center justify-center w-full py-12">
          <p className="text-center text-6xl uppercase">Timeline</p>
          <div className="w-full mt-8">
            <TimeLine />
          </div>
        </div>
      </Layout>
    </main>
  );
}
