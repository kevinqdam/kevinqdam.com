import { type NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";

const Home: NextPage = () => (
  <Container>
    <div className="flex flex-row space-x-6 pb-8">
      <Image
        alt="Kevin Dam profile picture"
        height={125}
        width={125}
        src="/bagel.jpg"
        sizes="30vw"
        priority
        className="rounded-full filter bg-gradient-to-r from-slate-500 to-teal-700 dark:from-slate-500 dark:to-rose-500 p-1"
      />
      <div className="flex flex-col justify-center space-y-1">
        <h1 className="text-4xl font-bold">Kevin Dam</h1>
        <div>Software Engineer</div>
      </div>
    </div>
    <div className="flex flex-col space-y-6">
      <p className="text-2xl">
        A passionate software engineer who loves to solve problems by writing
        code.
      </p>
      <p>Currently, I am building the web at Amazon Web Services ☁️</p>
    </div>
  </Container>
);

export default Home;
