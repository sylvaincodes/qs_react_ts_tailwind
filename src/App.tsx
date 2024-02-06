import React from "react";

function App() {
  return (
    <div className="font-body flex flex-row justify-center items-center min-h-screen bg-primary-300 p-6">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl font-medium">Hello world</h1>
        <p className="text-lg">
          c&apos;est un projet vide avec les outils déja pré-configurés :{" "}
        </p>
        <ul className="flex flex-col gap-5 font-normal">
          <li>Réact</li>
          <li>Vite &nbsp;{" "}
            <span className="bg-secondary-50 p-2">npm run build</span></li>
          <li>
            Typescript &nbsp;{" "}
            <span className="bg-secondary-50 p-2">npm run typecheck</span>
          </li>
          <li>Tailwind</li>
          <li>Eslint et Prettier &nbsp;{" "}
            <span className="bg-secondary-50 p-2">npm run lint</span></li>
          <li>Test &nbsp;{" "}
            <span className="bg-secondary-50 p-2">npm run test</span></li>
          <li>Ci workflow &nbsp;{" "}
            <span className="bg-secondary-50 p-2">git push</span></li>
        </ul>
      </div>
    </div>
  );
}
export default App;
