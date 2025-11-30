import React from 'react';
import { FaCode, FaPaintBrush, FaChartLine, FaBullhorn } from 'react-icons/fa';

export const careerPaths = [
    {
        id: 'software-development',
        title: 'Software Development',
        shortDescription: 'Craft the digital world by building stunning applications and websites.',
        longDescription: 'Software development involves designing, creating, testing, and maintaining software applications. It is a highly sought-after skill in today\'s tech-driven world, offering opportunities in web development, mobile apps, game development, and more.',
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Databases'],
        salary: '₹8 - 25 LPA',
        icon: <FaCode />,
        tags: ['High Demand', 'Creative'],
    },
    {
        id: 'ux-ui-design',
        title: 'UX/UI Design',
        shortDescription: 'Design intuitive and beautiful user experiences that people love to use.',
        longDescription: 'UX/UI Design focuses on creating user-friendly interfaces that are both aesthetically pleasing and easy to navigate. It combines elements of psychology, art, and technology to enhance user satisfaction.',
        skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Wireframing'],
        salary: '₹6 - 20 LPA',
        icon: <FaPaintBrush />,
        tags: ['Creative', 'User-Focused'],
    },
    {
        id: 'data-science',
        title: 'Data Science',
        shortDescription: 'Uncover hidden patterns in data to predict future trends.',
        longDescription: 'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It\'s crucial for data-driven decision-making in businesses.',
        skills: ['Python', 'R', 'Machine Learning', 'Statistics', 'SQL'],
        salary: '₹10 - 30 LPA',
        icon: <FaChartLine />,
        tags: ['Analytical', 'High Demand'],
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        shortDescription: 'Connect with audiences online and grow brands through creative campaigns.',
        longDescription: 'Digital Marketing involves promoting products or services using digital channels. Key areas include Search Engine Optimization (SEO), content marketing, social media, and email marketing to reach a wider audience.',
        skills: ['SEO', 'Google Analytics', 'Social Media', 'Content Creation'],
        salary: '₹4 - 15 LPA',
        icon: <FaBullhorn />,
        tags: ['Marketing', 'Communication'],
    },
];

export const counselors = [
    { id: 1, name: 'Dr. Anjali Sharma', expertise: 'Tech Careers, Resume Building', available: true, img: 'https://i.pravatar.cc/150?img=1', rating: 4.9, experience: '8+ years' },
    { id: 2, name: 'Mr. Rohan Verma', expertise: 'Creative Arts, Portfolio Review', available: false, img: 'https://i.pravatar.cc/150?img=2', rating: 4.7, experience: '6+ years' },
    { id: 3, name: 'Ms. Priya Singh', expertise: 'Management, Interview Prep', available: true, img: 'https://i.pravatar.cc/150?img=3', rating: 4.8, experience: '10+ years' },
    { id: 4, name: 'Mr. Sameer Khan', expertise: 'Data Science & Analytics', available: true, img: 'https://i.pravatar.cc/150?img=4', rating: 4.9, experience: '7+ years' },
];