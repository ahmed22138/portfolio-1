import Hero from "@/components/hero";

import Skill from "./skill/page";
import ContactPage from "./contact/page";



export default async function Home() {
  
  return (
   <div>
   


    <Hero />

  <Skill/>


    <ContactPage/>
   </div>
  );
}
