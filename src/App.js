import React, { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Header from "./components/header/header";

function App() {
  const [searchData, setSearchData] = useState({ isSearching: false, results: null });

  const handleSearchChange = (isSearching, results = null) => {
    setSearchData({ isSearching, results });
  };

  return (
    <section className="mewsic">
      <Header onSearchChange={handleSearchChange} />
      <Dashboard isSearching={searchData.isSearching} searchResults={searchData.results} />
    </section>
  );
}

export default App;
