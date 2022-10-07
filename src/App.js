import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./Components/ground";
import Player from "./Components/player";

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <Sky sunPosition={[
          100, 100, 20
        ]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
