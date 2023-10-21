import Navbar from "../components/Navbar"
import Header from "../components/Header"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Divider from "../components/Divider"
import { getSocials } from "@/utils/sanity-utils"
import { getProfile } from "@/utils/sanity-utils"
import { Console } from "console"
export default async function Home() {

  const socialData = await getSocials();
  return (
    <div className="h-screen w-full overflow-x-hidden bg-[#FFF8F0]">
 <Navbar props={socialData}/>
 <Header />
 <Divider />
 <About />
 <Divider />
 <Skills />
 <Divider />
 <Projects />
 <Divider />
 <Blogs />
 <Divider />
 <Contact />
 <Footer />
    </div>
  )
}
