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
        className="rounded-full filter"
      />
      <div className="flex flex-col justify-center space-y-1">
        <h1 className="text-4xl font-bold">Kevin Dam</h1>
        <div>Software Engineer</div>
      </div>
    </div>
    <div className="flex flex-col space-y-2">
      <h2 className="text-2xl font-bold">Bio</h2>
      <p>Hello, welcome to my website!</p>
      <p>
        I&#39;m Kevin, a passionate software engineer who loves to solve
        problems by writing code.
      </p>
      <p>
        My interests that aren&#39;t programming are always shifting, but the
        ones I always come back to are reading and playing video games.
      </p>
    </div>
  </Container>
);

export default Home;
