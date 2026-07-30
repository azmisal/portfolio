
const RESUME_VIEW_URL =
    "https://drive.google.com/file/d/199s2BG5diii-ayTqrARK5QJ26ZYYJ27U/view?usp=sharing&utm_source=chatgpt.com";

const RESUME_DOWNLOAD_URL =
    "https://drive.google.com/uc?export=download&id=199s2BG5diii-ayTqrARK5QJ26ZYYJ27U&utm_source=chatgpt.com";

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
