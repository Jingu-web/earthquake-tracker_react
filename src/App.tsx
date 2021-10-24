import { FC } from "react";

import Leaflet from "./components/Leaflet";
import Navbar from "./components/Navbar";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Leaflet />
      </div>
    </div>
  );
};

export default App;
