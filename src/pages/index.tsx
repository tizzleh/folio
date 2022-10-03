import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Ty's Website</title>
        <meta name="description" content="Ty's Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="">
          <ol className="mt-7 mr-9 flex justify-end gap-4">
            <li className="bg-sky-400 hover:bg-sky-800">
                <a href="#">Home</a>
              </li>
              <li className="bg-sky-400 hover:bg-sky-800">
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  <a href="#">Projects</a>
                </button>
              </li>
              <li>
                  <a
                    className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  href="#">Contact</a>
              </li>

            </ol>
        </nav>
      </header>
      <main>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <a href="#">Dark Mode</a>
        </button>

      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};
