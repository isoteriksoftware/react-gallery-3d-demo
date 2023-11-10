import { useAppRoutes } from "./routes";

function App() {
  const routes = useAppRoutes();

  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {routes}
    </main>
  );
}

export default App;
