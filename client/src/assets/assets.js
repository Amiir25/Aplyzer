import logo from './logo.PNG';
import logoFooter from './logo-footer.PNG';

// Hero background
import bgHero from './bg-hero.png';

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

// Dashboard Images
import file from './dashboard/file-icon-3d.png';
import user from './dashboard/user-check-icon-3d.png';
import x from './dashboard/x-icon-3d.png';
import clock from './dashboard/clock-icon-3d.png';

// Images
export const assets = {
    logo,
    logoFooter,
    bgHero,
    coverLetterImage,
    matchResumeImage,
    resumeReviewImage,
    trackApplicationsImage,

    // Dashboard
    file,
    user,
    x,
    clock
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
        title: "Generate Cover Letters",
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

// Happy Clients
export const happyClients = [
    {
        id: 1,
        name: "Emma Rodriguez",
        job: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        rating: 5,
        review: "Aplyzer helped me completely rework my resume in ways I never thought of. The AI suggestions were specific — not just generic fluff — and they actually helped me highlight my skills better. Within two weeks, I had multiple callbacks. I honestly wish I had this tool earlier."
    },
    {
        id: 2,
        name: "Liam Johnson",
        job: "Job Seeker",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        rating: 4,
        review: "Before Aplyzer, I was tracking job applications in a messy spreadsheet and forgetting follow-ups all the time. Now I have a clear view of where I applied, what stage I’m in, and reminders to stay on top. It brought real structure to my job hunt."
    },
    {
        id: 3,
        name: "Sophia Lee",
        job: "Product Designer",
        image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
        rating: 5,
        review: "I never liked writing cover letters — it always took forever and felt repetitive. Aplyzer’s cover letter generator changed everything. It tailors each one to the job description and my resume, so it actually sounds like I wrote it. Total game-changer."
    }
];

// FAQs
export const faqs = [
    {
        id: 1,
        question: "What is Aplyzer?",
        answer: `
            Aplyzer is an AI-powered job application assistant that helps you track your job search, improve your resume, match it to job descriptions, and generate tailored cover letters — all in one place.
        `
    },
    {
        id: 2,
        question: "Who is Aplyzer for?",
        answer: `
            Aplyzer is built for job seekers of all kinds — whether you're a student, software engineer, designer, or career switcher. If you want to improve your job applications, Aplyzer can help.
        `
    },
    {
        id: 3,
        question: "How does the AI resume analysis work?",
        answer: `
            Aplyzer uses advanced AI (powered by models like OpenAI’s GPT) to analyze your resume for clarity, keyword alignment, formatting, and relevance. It provides personalized suggestions to help you stand out to recruiters and applicant tracking systems (ATS).
        `
    },
    {
        id: 4,
        question: "Can Aplyzer really match my resume to a job description?",
        answer: `
            Yes! Just paste a job description, and Aplyzer compares it to your resume using natural language processing. It gives you a match score and highlights areas where your resume could be stronger or more aligned with the job.
        `
    },
    {
        id: 5,
        question: "Is Aplyzer free to use?",
        answer: `
            Yes, the core features are free. You can track jobs, upload resumes, and get basic AI feedback. In the future, premium features may be added, but the essentials will remain free for individual job seekers.
        `
    },
    {
        id: 6,
        question: "How does Aplyzer help with cover letters?",
        answer: `
            You can generate a tailored cover letter by providing your resume and a job description. Aplyzer uses AI to craft a personalized letter that sounds natural, highlights your strengths, and fits the job you're applying for.
        `
    },
    {
        id: 7,
        question: "Is my data safe?",
        answer: `
            Absolutely. Aplyzer doesn't share your data with third parties. Uploaded resumes and job data are stored securely and only used to provide feedback — not for training AI or any external use.
        `
    },
    {
        id: 8,
        question: "Will my resume or job data be saved securely?",
        answer: `
            Yes. We care about your privacy. Your data stays private and secure, and we don’t share or sell it. You can delete your resume and applications at any time.
        `
    },
    {
        id: 9,
        question: "Can I customize the cover letters Aplyzer generates?",
        answer: `
            Absolutely. Aplyzer gives you a strong AI-generated draft, but you can fully edit and personalize it before using it in your application.
        `
    },
    {
        id: 10,
        question: "Do I need to install anything?",
        answer: `
            Nope! Aplyzer is completely web-based. Just open your browser, log in, and start using it — no downloads or installations required.
        `
    },
    {
        id: 11,
        question: "Can I track multiple applications at once?",
        answer: `
            Yes! Aplyzer is built to manage your entire job hunt. You can add and track as many job applications as you want, each with its own status, notes, deadlines, and reminders.
        `
    },
    {
        id: 12,
        question: "How accurate is the job description matching?",
        answer: `
            Aplyzer uses advanced AI to compare your resume with job descriptions and highlight alignment gaps. While it’s not a human recruiter, it gives valuable insights into how well your resume matches and what to improve.

        `
    },
    {
        id: 12,
        question: "Can I use Aplyzer even if I’m not actively applying right now?",
        answer: `
            Definitely. You can use Aplyzer to prepare your resume, experiment with job matching, or build a database of saved opportunities for later. It's your personal job search workspace, whether you're applying today or planning ahead.
        `
    },
    
];