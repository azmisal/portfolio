
const RESUME_VIEW_URL =
    "https://drive.google.com/file/d/1WCYTMnpw45F6qA2wRRtfFWmDJ9K8SXcX/view?usp=sharing";

const RESUME_DOWNLOAD_URL =
    "https://drive.google.com/uc?export=download&id=1WCYTMnpw45F6qA2wRRtfFWmDJ9K8SXcX";

export function resumeDownload() {
    // Open preview in another tab
    window.open(
        RESUME_VIEW_URL,
        "_blank",
        "noopener,noreferrer"
    );

    // Trigger download
    const link =
        document.createElement("a");

    link.href = RESUME_DOWNLOAD_URL;

    link.setAttribute(
        "download",
        "Azmi-Saleem-Resume.pdf"
    );

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}
