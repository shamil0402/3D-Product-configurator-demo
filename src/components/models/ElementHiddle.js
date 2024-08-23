
import React, { useEffect } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
// import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFeltMaterial, useCarpettMaterial, } from './Materials'


export function ElemetHuddel(props) {

    const { nodes, materials } = useGLTF('models/new/ElementHiddle.glb')

    const feltMaterial = useFeltMaterial('ElementHuddle-Interio-AO-furniture', 4, 4)
    const carpetMaterial = useCarpettMaterial('ElementHuddle-Carpet-AO-furniture', 4, 4)

    const texturesUrl = useStore((s) => s.texturesUrl);
    const exteriorColor = texturesUrl.exterior.color;

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });


    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                //materials.Exterior.map = t;
                materials['Exterior _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials]);



    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Carpet001.geometry}
                    material={carpetMaterial}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorWindows001.geometry}
                    material={materials.DoorWindows}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ElemtHuddle_002001.geometry}
                    material={materials.Varios}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Exterior001.geometry}
                    material={materials['Exterior _1']}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass001.geometry}
                    material={materials['Glass _1.001']}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Interior001.geometry}
                    material={feltMaterial}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure001.geometry}
                    material={materials.Struccture}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    )
}

