import Image from "next/image";
import Asite from "./components/Asite";
import Asiteb from "./components/Asiteb";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Topcard from "./components/Topcard";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-black max-h-screen overflow-hidden">
      <div className="basis-3/12">
      <Asite/>
      <Asiteb/>
      </div>


<div className="basis-9/12 bg-[#121212] m-2 rounded-sm overflow-y-scroll ">





<div className="relative">

  <div className="bg-card w-full h-72 z-10 absolute top-0">
   
  </div>

  <div className="relative z-20 ">
    <Navbar />
    <Topcard />
    <Card />
    <Card />
    <Card />
  </div>
</div>

</div>



      </main>
  );
}
