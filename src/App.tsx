import { Inspector } from "./components/Inspector/Inspector.component";

function App() {
  return (
    <Inspector>
      <div className="flex justify-center items-center flex-col bg-black text-white h-screen">
        <h1 className="font-bold">@joabsena/layout-inspect</h1>
        <p className="mt-2">element</p>
      </div>
    </Inspector>
  );
}

export default App;
