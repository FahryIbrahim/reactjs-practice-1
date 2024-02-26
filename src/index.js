import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Indentity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function SocialButton({ icon }) {
  return (
    <button>
      <i className={`fa-brands ${icon}`}></i>
    </button>
  );
}

function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-facebook" />
        <SocialButton icon="fa-instagram" />
        <SocialButton icon="fa-twitter" />
      </div>
      <div className="social-buttons right">
        <SocialButton icon="fa-linkedin" />
        <SocialButton icon="fa-github" />
      </div>
    </>
  );
}

function Indentity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Black Cat</div>
      </div>
      <div className="title">Meow Engineer</div>
    </div>
  );
}
function Biodata() {
  return (
    <div className="desc">
      <p>
        My name is <b>Black Cat</b> and I am an Engineer.
      </p>
      <p>
        I have a black cat named Black Cat. He is an Engineer and his name
        perfectly matches his sleek and mysterious appearance. 
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">
        {text}
      </div>
    </button>
  )
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge text="☭ Communist" />
      <Badge text="💰 Billionaire" />
      <Badge text="⚒ Hooligans" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
