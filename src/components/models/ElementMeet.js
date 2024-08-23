
import React, { useEffect } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
// import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFeltMaterial, useCarpettMaterial, } from './Materials'


export function ElemetMeet(props) {

    const { nodes, materials } = useGLTF('/models/new/ElementMeet.glb')

    const feltMaterial = useFeltMaterial('ElementMeet-Felt-AO-furniture', 4, 4)
    const carpetMaterial = useCarpettMaterial('ElementMeet-Carpet-AO-furniture', 4, 4)

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
                materials.Exterior.map = t;
                // materials['Material _1320'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials]);


    return (
        <group {...props} dispose={null}>
            <group scale={.01}>
                <group position={[0, 114.151, 0]} rotation={[-Math.PI / 2, 0, 0]}>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Carpet001.geometry}
                        material={carpetMaterial}
                        position={[0, 0, -114.151]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.DoorsWindows001.geometry}
                        material={materials.DoorWindows}
                        position={[0, 0, -114.151]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior001.geometry}
                        material={materials.Exterior}
                        position={[0, 0, -114.151]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Glass001.geometry}
                        material={materials.Glass}
                        position={[0, 0, -114.151]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Interior001.geometry}
                        material={feltMaterial}
                        position={[0, 0, -114.151]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Structure001.geometry}
                        material={materials.Struccture}
                        position={[0, 0, -114.151]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Varios001.geometry}
                        material={materials.Varios}
                        position={[0, 0, -114.151]}
                    />
                </group>
            </group>
        </group>
    )
}