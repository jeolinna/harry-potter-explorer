import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetails";
import SpellsPage from "./pages/SpellsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/characters",
    element: <CharactersPage />,
  },
  {
    path: "/characters/:id",
    element: <CharacterDetailsPage />,
  },
  {
    path: "/spells",
    element: <SpellsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
