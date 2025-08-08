// Import the Navbar component from the components directory
import Navbar from "~/components/Navbar";
// Import the Route type for type checking
import type { Route } from "./+types/home";
// Import the resumes data from constants
import { resumes } from "../../constants";
// Import the ResumeCard component to display each resume
import ResumeCard from "~/components/ResumeCard";
// Import the custom hook to access the application's store
import { usePuterStore } from "../lib/puter";
// Import React and useEffect for component logic
import React, { useEffect } from 'react'
// Import useNavigate for navigation between routes
import { useNavigate } from 'react-router';

// Define the meta function to set page metadata
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" }, // Set the page title
    { name: "description", content: "smart feedback for your resume" }, // Set the page description
  ];
}

// Main Home component
export default function Home() {
  // Destructure auth from the custom store hook
  const { auth, } = usePuterStore()
  // Get the navigate function for programmatic navigation
  const navigate = useNavigate()

  // useEffect to check authentication status on mount or when it changes
  useEffect(() => {
    // If the user is not authenticated, redirect to the auth page
    if (!auth.isAuthenticated) navigate('/auth?next=/'); {
      // Redirect to dashboard or another page (comment placeholder)
    }
  }, [auth.isAuthenticated]) // Dependency array for useEffect

  // Render the main content
  return (
    // Main container with background image
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">

      {/* Render the Navbar at the top */}
      <Navbar />
      {/* {window.puter.ai.chat()}  // Placeholder for AI chat feature */}

      {/* Main section for page content */}
      <section className="main-section">
        {/* Page heading */}
        <div className="page-heading">
          <h1>Track your Applications and resume Ratings</h1>
          <h2>Get insights on your resume performance </h2>
        </div>

        {/* If there are resumes, display them in a grid */}
        {resumes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {/* Map over each resume and render a ResumeCard */}
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



