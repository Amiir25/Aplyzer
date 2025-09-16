import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

// Summarize Job Description
export const summarizeJobDesc = async (req, res) => {
    const { description } = req.body;
    if (!description) return res.status(400).json({ message: 'Job description is required' });

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            message: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant that summarizes job postings clearly for job seekers.',
                },
                {
                    role: 'user',
                    content: `Summarize this job description into 5-6 bullet points:\n\n${description}`,
                },
            ],
        });

        const summary = completion.choices[0].message.content;
        res.json({ summary });
    } catch (error) {
        console.error(error);
        res.json(500).json({ message: 'Error summarizing job description' });
    }
}