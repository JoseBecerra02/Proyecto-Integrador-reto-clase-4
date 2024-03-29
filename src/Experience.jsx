import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Magma from './Magma'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import { PointLightHelper } from 'three'
import { HemisphereLightHelper } from 'three'
import { SpotLightHelper } from 'three'
import { RectAreaLight } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()
    const pointLightRef = useRef()
    const hemisphereLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    useHelper(spotLightRef, SpotLightHelper, 1)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        
        <hemisphereLight  ref={hemisphereLightRef} color={"yellow"} position={[10, 10, 6]} intensity={1.5}/>
        {/*<pointLight  ref={pointLightRef} color={"yellow"} castShadow position={[10, 10, 6]} intensity={1.5}/>*/}
        {/*<rectAreaLight  ref={rectAreaLightRef} color={"yellow"} height={5} position={[0, 0, 5]} intensity={10.5}/>*/}
        {/*<spotLight  ref={spotLightRef} color={"yellow"} castShadow position={[3, 0.5, 0]} intensity={1.5}/>*/}
        
        <Magma/>
        <Floor/>
    </>
}