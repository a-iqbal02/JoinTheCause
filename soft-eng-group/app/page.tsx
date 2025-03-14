import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      
      <div id="Bar"></div>
      <div id="ContentBar">
        <p id="HomeButton">Home</p>
      </div>

      <div id="MainContent">

        <div id="UserInfo">
          <p id="Username">Username</p>
          <span id="ProfilePicture"></span>
          <p id="AboutMe">About me + Skills etc.</p>
        </div>

        <div id="Upcoming">
          <p id="Label">Upcoming Events</p>
        </div>

        <div id="PostBox">
          <div id="PostBar"></div>
          <Link href="" id="Post">Create a new post</Link>
          <p id="PostLabel">My Posts</p>
        </div>
        
        <div id="HostBox">
          <Link href="" id="Host">Host a new event</Link>
        </div>

      </div>
    </main>
  )
}
