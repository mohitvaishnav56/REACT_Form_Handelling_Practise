import React, { useState } from "react";
import Navbar from "./components/NAvbar";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [show, changeShow] = useState(false);
  const [data, setData] = useState([
    {
      song: "Senorita",
      artist: "Shawn Mende",
      image:
        "https://images.unsplash.com/photo-1736366285834-9be3c816db79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Vub3JpdGF8ZW58MHx8MHx8fDA%3D",
      isFavourite: false,
    },
  ]);

  const handleForm = () => changeShow((prev) => !prev);

  const handleFormSubmit = (data) => {
    changeShow((prev) => !prev);
    return setData((prev) => [...prev, { ...data, isFavourite: false }]);
    
  };

  const handleRemove = (identity) =>
    setData((prev) => prev.filter((_, index) => index !== identity));

  const handleClick = (identity) =>
    setData((prev) =>
      prev.map((val, index) =>
        index === identity ? { ...val, isFavourite: !val.isFavourite } : val
      )
    );

  return (
    <div className="App w-full min-h-screen bg-zinc-100">
      <Navbar data={data} handleForm={handleForm} />
      <Cards
        data={data}
        handleRemove={handleRemove}
        handleClick={handleClick}
      />
      <Form
        show={show}
        handleForm={handleForm}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
