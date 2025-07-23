import { resumes } from '../../constants'
import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'

// Explanation:
// The ResumeCard component receives a 'resume' object as a prop, typed as 'Resume'.
// It returns a Link component that navigates to a detail page for the specific resume using its 'id'.
// The link currently displays the text "ResumeCard".
const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-75 min-h-[220px] w-full">
            <div className='resume-card-header'>
                <div className='flex flex-col gap-2 '>
                    <h3 className='text-lg font-semibold '>{companyName}</h3>
                    <p className='text-sm text-gray-500 '>{jobTitle}</p>
                </div>
                <div className='flex flex-shrink-0 '>
                    <ScoreCircle score={feedback.overallScore} />

                </div>
            </div>

            <div className='gradient-border animate-in fade-in duration-1000'>
                <div className='w-full h-full'>
                    <img src={imagePath} alt="Resume Preview" className=' w-full h-[350px] max-sm:h-[200px] object-cover object-top' />
                </div>

            </div>
        </Link>

    )
}

export default ResumeCard