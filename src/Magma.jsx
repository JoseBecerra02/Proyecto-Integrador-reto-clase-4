import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Magma() {
    const PATH = "/static/textures/door/"
    
    const props = useTexture({
        map: PATH + 'Lava_005_COLOR.jpg',
        displacementMap: PATH + 'Lava_005_DISP.png',
        normalMap: PATH + 'Lava_005_NORM.jpg',
        roughnessMap: PATH + 'Lava_005_ROUGH.jpg',
        aoMap: PATH + 'Lava_005_OCC.jpg',
        metalnessMap: PATH + 'Lava_005_MASK.jpg'
    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12}>
            <sphereGeometry />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}