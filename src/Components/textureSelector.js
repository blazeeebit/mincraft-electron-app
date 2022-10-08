import { useEffect, useState } from "react"
import useKeyboard from "../Hooks/useKeyboard"
import useStore from "../Hooks/useStore"
import {
    dirtImg,
    logImg,
    glassImg,
    grassImg,
    woodImg
} from '../Assets/images'

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    woodImg: woodImg,
    log: logImg
}

const TextureSelector = () => {

    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])

    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard()

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log
        }
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if (pressedTexture) {
            console.log("pressed ", pressedTexture[0])
            setTexture(pressedTexture[0])
        }
    }, [setTexture, dirt, grass, glass, wood, log])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])

    return visible && (
        <div
            className="absolute flex flex-row top-1/2 left-1/2 transform scale-[5] -translate-y-1/2 -translate-x-1/2">
            {
                Object.entries(images).map(([k, src]) => {
                    return (<img
                        key={k}
                        src={src}
                        alt={k}
                        className={`${k === activeTexture ? 'border-2 border-red-400' : ''}`} />)
                })
            }
        </div>
    )
}

export default TextureSelector