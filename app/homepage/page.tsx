import Link from "next/link";
import Image from "next/image";
import "@/styles/customCSS.css"; 

export default function Home() {
  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-50">
      <div className="flex justify-center gap-x-20 items-center max-w-6xl mx-auto">
        <Image src="/JTCPH.png" alt="Site Logo" width={50} height={50} />
        <h1 className="text-xl">Join The Cause</h1>
        <Image src="/JTCPH.png" alt="Site Logo" width={50} height={50} />
      </div>
    </header>

    <nav className="fixed top-20 left-0 w-full bg-gray-700 text-white flex items-center space-x-5 p-3 shadow-md z-40">
      <button className="nav-button">Home</button>
      <button className="nav-button">Get Involved</button>
      <button className="nav-button">Create An Event</button>
      <button className="nav-button">Resources</button>
      <button className="nav-button">FAQ's</button>
      <button className="nav-button">My Account</button>
    </nav>

    <main className="pt-44">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="box">
            <h2 className= "header">Box {num}</h2>
            <p>Content to be determined...</p>
            <button className="box-button">Click Me</button>
          </div>
        ))}
      </div>
    </main>
    
    <div className="pt-15">
      <div className= "box-border m-auto h-auto w-auto p-4 border-4 bg-white-500 lex justify-center text-white items-center">
        <h2 className="flex justify-center text-white items-center">Mission Statement:</h2>
        <p className="flex justify-center text-white items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>


    </>
  );
