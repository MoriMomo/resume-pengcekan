import { resumes } from '../../constants'
import React from 'react'
import { Link } from 'react-router'

// Explanation:
// The ResumeCard component receives a 'resume' object as a prop, typed as 'Resume'.
// It returns a Link component that navigates to a detail page for the specific resume using its 'id'.
// The link currently displays the text "ResumeCard".
const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback } }: { resume: Resume }) => {
    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-75">
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='text-lg font-semibold'>{companyName}</h3>
                <p className='text-sm text-gray-500'>{jobTitle}</p>
            </div>
            <div className='flex flex-shrink-0'>

            </div>
        </Link>
    )
}

export default ResumeCard