import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Faqitem from '../components/faqitem';

const faqs = [
  {
    question: 'What is JoinTheCause?',
    answer:
      'JoinTheCause is a platform that connects people with volunteer opportunities and community initiatives.',
  },
  {
    question: 'Who should use JoinTheCause?',
    answer:
      'Anyone looking to contribute to their community, whether as a volunteer, organizer, or supporter.',
  },
  {
    question: 'Is JoinTheCause free?',
    answer:
      'Yes! It is completely free to use for both individuals and organizations.',
  },
  {
    question: 'How do I create an account?',
    answer:
      "You can sign up by clicking the 'My Account' button and following the registration process.",
  },
];

export default function Index() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10 bg-white shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: FAQ List */}
          <div>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">FAQs</h2>
            <div>
              {faqs.map((faq, index) => (
                <Faqitem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Image & Text */}
          <div className="flex flex-col items-center justify-center bg-gray-200 p-6">
            <Link href="/ask">
              <div className="cursor-pointer">
                {/* Replace '/your-image.jpg' with your actual image path.
                    If you don't have an image, you can uncomment the span below */}
                <img
                  src="/your-image.jpg"
                  alt="FAQ illustration"
                  className="w-full max-w-sm mb-4"
                />
                {/*
                <span className="text-gray-500 font-semibold text-lg">
                  *Picture*
                </span>
                */}
              </div>
            </Link>
            <p className="text-xl text-gray-600 text-center">
              Have Questions? <br /> We got Answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
