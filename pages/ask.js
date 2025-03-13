'use client';

import { useState } from 'react';
import navbar from '../components/navbar';

export default function Ask() {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Question submitted:', question);
  };

  const featuredArticles = [
    { title: 'How to get involved in community projects', link: '#' },
    { title: 'Volunteer opportunities in your area', link: '#' },
    { title: 'Community impact stories', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <navbar />
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md mt-10">
        <h1 className="text-3xl font-bold mb-6">Ask Your Question</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full p-4 border rounded mb-4"
            rows={4}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Question
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
          <ul className="space-y-2">
            {featuredArticles.map((article, index) => (
              <li key={index}>
                <a href={article.link} className="text-blue-500 hover:underline">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
