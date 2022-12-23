import type {NextPage} from 'next'
import Header from "../components/Header";
import Head from "next/head";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from '../components/Skills';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from "../components/About";

const Home: NextPage = () => {

    return (
        <div className={"bg-white text-navy dark:bg-navy dark:text-white h-screen snap-y snap-mandatory overflow-scroll z-0"}>
            {/*  TAB TITLE  */}
            <Head>
                <title>Welcome | Jordi Jaspers</title>
            </Head>

            {/*  HEADER  */}
            <Header/>

            {/*/!*  HERO  *!/*/}
            <section id={"hero"}>
                <Hero/>
            </section>

            {/*  ABOUT  */}
            <section id={"About"}>
                <About/>
            </section>

            {/*  EXPERIENCE  */}
            <section id={"Experience"}>
                <Experience/>
            </section>

            {/*  SKILLS  */}
            <section id={"Skills"}>
                <Skills/>
            </section>

            {/*  PROJECTS  */}
            <section id={"Services"}>
                <Services/>
            </section>

            {/*  CONTACT ME */}
            <section id={"Contact"}>
                <Contact/>
            </section>

            {/* FOOTER */}
            <footer className={"flex flex-row items-center justify-center p-8 w-full"}>
                <a className={"font-mono link-underline link-underline-black "}
                   href={"https://github.com/Jordi-Jaspers/Portfolio-V2"}>
                    © Designed and built by Jordi Jaspers
                </a>
            </footer>
        </div>
    )
}

export default Home;
