'use client';

import Layout from "../components/Layout";
import logo from "../../public/pictures/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const textContent = [
  { text: `"You only live once. If you do it right, that's all you need."`, className: "text-2xl", delay: 0 },
  { text: "Thang Le", className: "text-xl pt-10", delay: 1.5 },
  { text: "Developer, Investor, Teacher, and Learner.", className: "text-lg", delay: 2 },
  { text: "Thank you to my family, friends, and anyone who supported me in this journey.", className: "pt-10", delay: 3.0 },
];

export default function Home() {
  return (
    <main className="flex min-h-screen text-white bg-black flex-col items-center justify-between">
      <Layout className="pt-10">
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
            {textContent.map((item, index) => (
              <motion.p
                key={index}
                className={item.className}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={item.delay}
              >
                {item.text}
              </motion.p>
            ))}
          </div>
        </div>
      </Layout>
    </main>
  );
}
