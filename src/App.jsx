import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts.jsx";
import ContactUserCard from "./Components/ContactUserCard.jsx";
import NavBar from "./Components/NavBar.jsx";
import Title from "./Components/Post.jsx";
import Posts from "./Components/Posts.jsx";
import Profile from "./Components/UserProfile.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Profile />
      <Posts />
      <Title />
      <Contacts />
      <ContactUserCard />
    </>
  );
}

export default App;
