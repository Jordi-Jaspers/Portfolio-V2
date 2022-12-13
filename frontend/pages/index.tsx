import type {NextPage} from 'next'
import Header from "../components/Header";
import Head from "next/head";
import Hero from "../components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import('../components/About'), {
    ssr: false
});

const Home: NextPage = () => {

    return (
        <div className={"bg-navy text-white h-screen snap-y snap-mandatory overflow-scroll z-0"}>
            {/*  TAB TITLE  */}
            <Head>
                <title>Welcome | Jordi Jaspers</title>
            </Head>

            {/*  HEADER  */}
            <Header/>

            {/*  HERO  */}
            <section id={"hero"} className={"snap-center"}>
                <Hero/>
            </section>

            {/*  ABOUT  */}
            <section id={"About"} className={"snap-center"}>
                <About/>
            </section>

            {/*  EXPERIENCE  */}

            {/*  SKILLS  */}

            {/*  PROJECTS  */}

            {/*  CONTACT ME */}

        </div>
    )
}

export default Home;
