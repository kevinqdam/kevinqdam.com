import { type NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Kevin Dam</h1>
        <div>Grug at FaceTube</div>
      </div>
    </div>
    <h2 className="pb-4 font-bold">About</h2>
    <p>
      I like type on keyboard see stuff on screen ok here is lorem ipsum text:
    </p>
    <br />
    <p className="italic">{LOREM_IPSUM}</p>
  </Container>
);

export default Home;
