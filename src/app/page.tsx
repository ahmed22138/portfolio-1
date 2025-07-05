import Hero from "@/components/hero";

import Skill from "./skill/page";
import ContactPage from "./contact/page";
import { client } from "@/sanity/lib/client";


export default async function Home() {
  
  return (
   <div>
   


    <Hero />

  <Skill/>


    <ContactPage/>
   </div>
  );
}
