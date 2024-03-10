import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
<TimelineObserver
  initialColor="#e5e5e5"
  fillColor="#53b374"
  handleObserve={(setObserver) => (
    <Timeline
      callback={onCallback}
      className="timeline"
      setObserver={setObserver}
    />
  )}
/>;
