import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import Events from "../Event/Events";
import Bootcamp from "../Bootcamp/Bootcamp";
import Team from "../Team/Team";
import JoinUs from "../Form/JoinUs";
import ContactUs from "../Form/ContactUs";
import Page from "../Layout/Page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Home />} />
        <Route path="Bootcamp" element={<Bootcamp />} />
        <Route path="Events" element={<Events />} />
        <Route path="Team" element={<Team />} />
        <Route path="JoinUs" element={<JoinUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;
