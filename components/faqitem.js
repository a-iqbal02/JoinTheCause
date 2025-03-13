export default function faqitem({ question, answer, isOpen, toggle }) {
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={toggle}
        className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold hover:bg-gray-50"
      >
        {question}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <p className="p-4 text-gray-600">{answer}</p>}
    </div>
  );
}
