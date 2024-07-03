import { useState } from "react";
import { usePosts } from "../context/PostContext";

export const Header = () => {
  const postCtx = usePosts();
  const [titleInput, setTitleInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const handleButton = () => {
    if (titleInput && textInput) {
      postCtx?.dispatch({
        type: "add",
        payload: { title: titleInput, body: textInput },
      });
      setTitleInput("");
      setTextInput("");
    }
  };
  return (
    <header>
      <h1 className="text-3xl mt-5">Titulo da página</h1>
      <div className="max-w-xl flex flex-col gap-4 border border-dotted border-gray-400 my-4 p-3">
        <input
          type="text"
          placeholder="Digite um título"
          className="border border-gray-300 p-2 text-black text-xl"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <textarea
          placeholder="Digite o corpo"
          className="h-24 border border-gray-300 p-2 text-black text-xl"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
        <button
          onClick={handleButton}
          className="bg-blue-500 p-3 text-white rounded-md hover:opacity-80 cursor-pointer"
        >
          Adicionar
        </button>
      </div>
    </header>
  );
};
