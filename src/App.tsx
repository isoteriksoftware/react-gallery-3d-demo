import { useAppRoutes } from "./routes";
import Navigation from "./components/navigation/Navigation.tsx";

function App() {
  const routes = useAppRoutes();

  return (
    <div className="relative w-screen h-screen">
      <main className="w-full h-full">{routes}</main>

      <div className="absolute top-0 left-0 z-10 w-full">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
