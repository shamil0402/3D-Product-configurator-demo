import React, { useEffect } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
// import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFeltMaterial, useCarpettMaterial } from './Materials'


export function Elemetfocus(props) {

    const { nodes, materials } = useGLTF('models/new/ElementFocus.glb')

    const feltMaterial = useFeltMaterial('ElementFocus-Interior-AO-furniture', 4, 4)
    const carpetMaterial = useCarpettMaterial('ElementFocus-Carpet-AO-furniture', 4, 4)

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
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Structure.geometry}
                material={materials.Struccture}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DoorWindow001.geometry}
                material={materials.DoorWindows}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Exterior.geometry}
                material={materials['Exterior _1']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Varios001.geometry}
                material={materials.Varios}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Carpet.geometry}
                material={carpetMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Interior.geometry}
                material={feltMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Clas001.geometry}
                material={materials['Glass _1']}
            />
        </group>
    )

}
