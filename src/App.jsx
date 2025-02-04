import React, { useState } from "react";
import "./index.css";
import Counter from "./components/Counter.jsx";
import BackgroundChanger from "./components/BackgroundColor.jsx";
import TodoList from "./components/TodoList.jsx";
import Timer from "./components/Timer.jsx";
import FilterList from "./components/FilterList.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import PostList from "./components/PostList.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import CountdownTimer from "./components/CountdownTimer.jsx";
import Tabs from "./components/Tabs.jsx";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const buttons = [
    { name: "Counter", component: <Counter /> },
    { name: "BackgroundChanger", component: <BackgroundChanger /> },
    { name: "TodoList", component: <TodoList /> },
    { name: "Timer", component: <Timer /> },
    { name: "FilterList", component: <FilterList /> },
    { name: "RegistrationForm", component: <RegistrationForm /> },
    { name: "PostList", component: <PostList /> },
    { name: "ImageGallery", component: <ImageGallery /> },
    { name: "CountdownTimer", component: <CountdownTimer /> },
    { name: "Tabs", component: <Tabs /> },
  ];

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h2>Atividade 7</h2>
        <h1 className="text-xl font-bold">
          Praticando conceitos essenciais do ReactJS
        </h1>
      </header>

      <div className="container">
        <div className="btns">
          <h1>Actions</h1>
          {buttons.map((button, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => handleButtonClick(button.component)}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className="contai-direita">
          {selectedComponent !== null ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Operações</h2>
              {selectedComponent}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">Select an Action</h2>
              <p>Choose a button on the left to perform an operation.</p>
            </div>
          )}
        </div>
        <div className="w-4/5 bg-white p-4 flex items-center justify-center">
          <div className="w-full h-[90%] border border-gray-400 rounded-lg p-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
