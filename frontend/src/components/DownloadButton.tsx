import React, {useState} from 'react'

type Props = {
    className?: string
}

export default function DownloadButton({className}: Props) {
    const [isDownloading, setIsDownloading] = useState(false)
    
    const handleDownload = async () => {
        setIsDownloading(true)
        
        try {
            const response = await fetch('/static/Jordi_Jaspers_Resume.pdf')
            const blob = await response.blob()
            const fileURL = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = fileURL
            a.download = 'Resume - Jordi Jaspers.pdf'
            a.click()
        } catch (error) {
            console.error('Error downloading resume:', error)
        } finally {
            setIsDownloading(false)
        }
    }
    
    return (
        <div className={className}>
            <button
                type="button"
                className={`${
                    isDownloading
                        ? 'bg-amber dark:bg-light-navy dark:hover:bg-lightest-navy'
                        : 'bg-slate dark:text-slate dark:hover:text-white dark:bg-light-navy hover:bg-amber hover:text-white'
                } flex items-center rounded-lg px-4 py-2 text-white`}
                onClick={() => {
                    handleDownload().then().catch((error) => console.error(error));
                }}
                disabled={isDownloading}
            >
                <div className={`${isDownloading ? 'block' : 'hidden'} mr-3 animate-spin text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </div>
                <span className="font-medium">{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
            </button>
        </div>
    )
}
