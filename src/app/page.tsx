import Navbar from "../components/Navbar"
import Header from "../components/Header"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Divider from "../components/Divider"
import Education from "@/components/Education"
import { getSocials } from "@/utils/sanity-utils"
import { getProfile } from "@/utils/sanity-utils"
import { Console } from "console"
import ThemeButton from "@/components/ThemeButton"
import { DarkTheme, LightTheme } from "@/utils/ThemeInfo"
export default async function Home() {

  const socialData = await getSocials();
  return (
    <div className={`h-screen w-screen overflow-x-hidden bg-[#F1F6F9] dark:bg-[#222831]`}>
 <Navbar props={socialData}/>
 <ThemeButton />
 <div className="md:flex flex-col space-y-12">
 <Header />
 <Divider />
 <About />
 <Divider />
 <Skills />
 <Divider />
 <Education />
 <Divider />
 <Projects />
 <Divider />
 <Blogs />
 <Divider />
 <Contact />
 </div>
 <Footer props={socialData}/>
    </div>
  )
}
