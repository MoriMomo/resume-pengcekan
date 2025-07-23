import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

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
          <h2>Get insights on your resume performance </h2>
        </div>


        {resumes.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">

            {resumes.map((resume) => (
              <div key={resume.id} className="w-full">
                <ResumeCard resume={resume} />
              </div>
            ))}
          </div>

        )}
      </section>






    </main>
  );
}


