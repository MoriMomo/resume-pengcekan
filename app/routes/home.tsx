import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "smart feedback for your resume" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Applications and resume Ratings</h1>
          <h2>Get insights on your resume performance</h2>
        </div>
      </section>


      {/* sebuah tempat untuk iupload semua data resume kemungkinan besar perlu backend */}
      {/* {[
        {
       
        }
      ]} */}

    </main>
  );
}


