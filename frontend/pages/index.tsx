import type {NextPage} from 'next'
import Header from "../components/Header";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
    return (
        <div className={"bg-[#0a192f] text-[#e6f1ff] h-screen snap-y snap-mandatory overflow-scroll z-0"}>
            {/*  TAB TITLE  */}
            <Head>
                <title>Jordi's Portfolio</title>
            </Head>

            {/*  HEADER  */}
            <Header/>

            {/*  HERO  */}
            <section id={"hero"} className={"snap-center"}>
                <Hero/>
            </section>

            {/*  ABOUT  */}

            {/*  EXPERIENCE  */}

            {/*  SKILLS  */}

            {/*  PROJECTS  */}

            {/*  CONTACT ME */}


        </div>
    )
}

export default Home;
