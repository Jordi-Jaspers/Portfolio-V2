import React from 'react'

type Props = {
    className?: string
}

export default function DownloadButton({className}: Props) {
    const [isDownloading, setIsDownloading] = React.useState(false)
    const download = () => {
        setIsDownloading(true)
        fetch('../public/static/Jordi_Jaspers_Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume - Jordi Jaspers.pdf';
                alink.click();
                setTimeout(() => {
                    setIsDownloading(false)
                }, 1000)
            })
        })
    }

    const handleDownloadComplete = () => {
        setIsDownloading(false)
    }

    return (
        <div className={`${className} `}>
            <button type="button" className={`${className} flex items-center rounded-lg dark:text-slate dark:hover:text-white dark:bg-light-navy dark:hover:bg-lightest-navy bg-slate hover:bg-amber hover:text-white px-4 py-2 text-white`} onLoad={handleDownloadComplete} onClick={download}>
                <div className={`${isDownloading ? "flex" : "hidden"}`}>
                    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24">
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </div>
                <span className="font-medium"> {isDownloading ? 'Downloading...' : 'Download'} </span>
            </button>
        </div>
    )
}
