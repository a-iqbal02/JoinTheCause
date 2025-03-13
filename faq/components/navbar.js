import Link from 'next/link';

export default function navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 font-semibold hover:underline">
          HOME
        </Link>
        <Link href="/involved" className="text-gray-700 font-semibold hover:underline">
          GET INVOLVED
        </Link>
        <Link href="/create" className="text-gray-700 font-semibold hover:underline">
          CREATE
        </Link>
        <Link href="/resources" className="text-gray-700 font-semibold hover:underline">
          RESOURCES
        </Link>
        <Link href="/" className="text-gray-700 font-semibold hover:underline">
          FAQ&apos;S
        </Link>
      </div>
      <button className="px-4 py-2 border rounded text-gray-700 font-semibold hover:bg-gray-50">
        MY ACCOUNT
      </button>
    </nav>
  );
}
