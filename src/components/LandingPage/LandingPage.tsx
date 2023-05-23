import Hero from "./Hero"
import Features from "./Features"
import Footer from "./Footer"
import Contact from "./Contact";
import Header from "./Header"

export default function LandingPage(){

    const links = [
        { link: "https://example.com", label: "Contact" },
        { link: "https://example.com", label: "Privacy" },
        { link: "https://example.com", label: "Blog" },
      ];
    
    return(
        <>
        <Header/>
         <Hero/>
        <Features/>
        <Contact/>
        <Footer links={links}/>
        
        </>
       
    )
}