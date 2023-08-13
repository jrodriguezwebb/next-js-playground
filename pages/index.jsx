import { useState } from "react";

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return "Un titulo por defecto";
  }
}

function Header({ title, titulo2, titulo3 }) {
  console.log(`${title}`);
  return <h1>{title ? title : "Un titulo por defecto"}</h1>;
}

function OtroComponente() {
  return <p>Otro elemento</p>;
}

export default function HomePage() {
  const names = [
    "Ada Lovelace",
    "Ada Lovelace",
    "Grace Hopper",
    "Margaret Hamilton",
  ];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="React 💙" titulo2="I luv" titulo3="Y vamos durisimo 🚀" />
      <Header />
      <OtroComponente />

      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
