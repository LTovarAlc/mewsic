// App.js
import React, { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Header from "./components/header/header";

function App() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <section className="mewsic">
      <Header onSearchChange={setIsSearching} />
      <Dashboard isSearching={isSearching} />  {/* Pasa isSearching como prop */}
    </section>
  );
}

export default App;
