import React from "react";
import "./App.css"
import Dashboard from "./pages/dashboard/dashboard";
import Header from "./components/header/header";

function App() {
  return (
    <section className="mewsic">
      <Header/>
      <Dashboard/>
    </section>
  );
}

export default App;
