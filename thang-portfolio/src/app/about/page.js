import Layout from "../../components/Layout";
import SkillList from "../../components/SkillList";
import TimeLine from "../../components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen text-white bg-black flex-col items-center justify-between">
      
      <Layout>  
        <div className="flex flex-col items-center justify-center w-full py-12">
          <p className="text-center text-6xl uppercase ">Timeline</p>
          <div className="w-full mt-8">
            <TimeLine />
          </div>
        </div>
      </Layout>
      <Layout>  
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="w-full">
            <SkillList/>
          </div>
        </div>
      </Layout>
    </main>
  );
}
