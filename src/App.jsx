import { Canvas } from "@react-three/fiber";
import Experience from "./componenets/Experience";
import "./App.css";
import Interface from "./componenets/Interface";
import CameraControls from "./componenets/CameraControls";

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [1, 1.5, 2.9], fov: 40 }}
      >
        <CameraControls />
        <ambientLight />
        <directionalLight castShadow position={[-5, 5, 7]} intensity={3} />
        <Experience />
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;
