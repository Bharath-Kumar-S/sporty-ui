import { useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <h1>Frontend Web App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quam
        saepe explicabo expedita culpa! Possimus praesentium placeat, vero
        exercitationem natus nisi voluptate nobis dolore iusto cupiditate
        reiciendis tenetur labore saepe!
      </p>
      {visible && (
        <button title="this is a button" onClick={() => setVisible(false)}>
          Get Started
        </button>
      )}
    </>
  );
}

export default App;
