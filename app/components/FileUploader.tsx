import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface FileUploaderProps {

    onFileChange?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {

    const [setFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0] || null;
        setFile(selectedFile);
        onFileChange(selectedFile);
    }, [onFileChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf'] },
        maxSize: 20 * 1024 * 1024 // 20 MB
    });

    const file = acceptedFiles[0] || null;

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
                            <div>

                            </div>
                        ) : (
                            <div>
                                <p className="text-lg text-gray-500">
                                    <span className='font-semibold'>
                                        Click to upload or drag and drop a file here
                                    </span> or drag and drop
                                </p>
                                <p>
                                    <span className='text-sm text-gray-400'>
                                        PDF (max 20 Mb)
                                    </span>
                                </p>

                            </div>
                        )}
                    </div>

                }
            </div>
        </div>
    )

}
export default FileUploader