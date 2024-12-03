import { Canvas } from "@react-three/fiber";
import Experience from "./componenets/Experience";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Interface from "./componenets/Interface";

function App() {
  return (
    <div className="App">
      <Canvas shadows camera={{ position: [1, 1.5, 2.9], fov: 40 }}>
        <OrbitControls />
        <ambientLight />
        <directionalLight castShadow position={[-5, 5, 7]} intensity={3} />
        <Experience />
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;
