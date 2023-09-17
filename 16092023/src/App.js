import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;