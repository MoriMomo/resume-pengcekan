import React from 'react'
import Navbar from '~/components/Navbar'
import { useState } from 'react'

const upload = () => {

    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState('')

    return (
        <main className='bg-[url("/images/bg-main.svg")] bg-cover '>
            <Navbar />

            <section className="main-section">
                <div className="page-heading">
                    <h1>
                        smart feedback for your resume
                    </h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="../images/resume-scan.gif" alt="" className='w-full' />
                        </>

                    ) : (
                        <h2>Drop your resume</h2>
                    )}



                </div>
            </section>

        </main >
    )
}

export default upload