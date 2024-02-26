import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const socialMedia = [
  {
    icon: "fa-facebook",
    href: "https://www.facebook.com/fahry.ibra.1/",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/fahryibrahim29/",
  },
  {
    icon: "fa-twitter",
    href: "https://twitter.com/FahryIbrahim26",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/fahry-ibrahim-8b798a266/",
  },
  {
    icon: "fa-github",
    href: "https://github.com/FahryIbrahim",
  },
];

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

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa-brands ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);
  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton icon={data.icon} link={data.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButton icon={data.icon} link={data.href} />
        ))}
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
      <div className="height">{text}</div>
    </button>
  );
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
