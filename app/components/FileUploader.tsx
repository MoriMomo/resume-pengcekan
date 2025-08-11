import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUploader = () => {
    const [file, setFile] = React.useState<File | null>(null)

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className='w-full gradient-border'>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    <div className="space-y-4 cursor-pointer">
                        <div className="mx-auto w-16 h-16 flex items-center justify-center">
                            <img src="/icons/info.svg" alt="upload" className="size-30" />
                        </div>
                        {file ? (
                            <p>{file.name}</p>
                        ) : (
                            <p>No file selected</p>
                        )}
                    </div>
                }
            </div>
        </div>
    )

}
export default FileUploader