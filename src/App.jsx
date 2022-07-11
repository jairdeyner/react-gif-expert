import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

const App = () => {
  const [categories, setCategories] = useState(["naruto"]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;

    setCategories([value, ...categories]);
  };

  return (
    <div className="App">
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default App;
