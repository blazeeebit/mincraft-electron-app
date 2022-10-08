import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PovCamera from "./Components/camera";
import Cubes from "./Components/cubes";
import Ground from "./Components/ground";
import Player from "./Components/player";
import TextureSelector from "./Components/textureSelector";

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <Sky sunPosition={[
          100, 100, 20
        ]} />
        <ambientLight intensity={0.5} />
        <PovCamera />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute text-white top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        +
      </div>
      <TextureSelector />
    </div>
  );
}

export default App;
