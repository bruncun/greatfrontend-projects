import { Routes, Route } from "react-router";
import TestimonialCard from "./solutions/testimonial-card";

function App() {
  return (
    <Routes>
      <Route path="/testimonial-card" element={<TestimonialCard />} />
    </Routes>
  );
}

export default App;
