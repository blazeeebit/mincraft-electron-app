import { nanoid } from 'nanoid'
import createStore from 'zustand'

const useStore = createStore((set) => ({
    texture: 'dirt',
    cubes: [],
    addCube: (x,y,z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x,y,z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: (x,y,z) => {
        set((prev) => ({
            cubes: prev.cubes.filter(cube => {
                const [X,Y,Z] = cube.pos
                return X !== x || Y !== y || Z !== z
            })
        }))
    },
    setTexture: (texture) => {
        set(() => ({
            texture
        }))
    },
    saveWorld: () => {},
    resetWorld: () => {}
}))

export default useStore