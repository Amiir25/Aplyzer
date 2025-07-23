import logo from './logo.PNG';
import logoFooter from './logo-footer.PNG';

// Tool images
import coverLetterImage from './tools/cover-letter.png';
import matchResumeImage from './tools/match-resume.png';
import resumeReviewImage from './tools/resume-review.png';
import trackApplicationsImage from './tools/track-applications.png';

// Look Inside images
import image1 from './look-inside/image-1.png';
import image2 from './look-inside/image-2.png';
import image3 from './look-inside/image-3.png';
import image4 from './look-inside/image-4.png';

// Images
export const assets = {
    logo,
    logoFooter,
    coverLetterImage,
    matchResumeImage,
    resumeReviewImage,
    trackApplicationsImage,
};

// Tools
export const tools = [
    {
        title: "Track Your Applications",
        desc: "Keep all your job applications organized with real-time status updates and reminders.",
        image: trackApplicationsImage,
    },
    {
        title: "Upload Your Resume",
        desc: "Let Aplyzer analyze your resume with AI and suggest personalized improvements.",
        image: resumeReviewImage,
    },
    {
        title: "Match to Job Descriptions",
        desc: "Paste any job posting and see how well your resume matches — and how to improve it.",
        image: matchResumeImage,
    },
    {
        title: "Generate Tailored Cover Letters",
        desc: "Let Aplyzer craft personalized, job-specific cover letters in seconds.",
        image: coverLetterImage,
    },
];

// Look Inside
export const lookInside = {
    image1,
    image2,
    image3,
    image4,
};