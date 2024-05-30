import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

function App() {
  return (
    <div className="font-serif max-w-[2500px] container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
