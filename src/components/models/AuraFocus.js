
import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
// import useStore from "../../components/store";
// import { useFrame } from "@react-three/fiber";
import { useExteriorMaterial, useCarpettMaterial, useMetalMaterial, useTableMaterial, useAuraInteriorMaterial } from './Materials'

export const AuraFocus = (props) => {

    const { nodes, materials } = useGLTF('models/new/AuraFocus.glb')

    const exteriorMaterial = useExteriorMaterial('AuraFocus-Exterior-AO', 4, 4)
    const interiorMaterial = useAuraInteriorMaterial('AuraFocus-Interior-AO', 4, 4)
    const carpetMaterial = useCarpettMaterial('AuraFocus-Carpet-AO', 4, 4)

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });


    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-WallsExterior001'].geometry}
                material={exteriorMaterial}
                position={[0, 1.147, -0.019]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Glass001.geometry}
                material={materials.Glass}
                position={[-0.388, 1.147, -0.695]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-Interior001'].geometry}
                material={interiorMaterial}
                position={[-0.738, 1.147, -0.018]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-Carpet001'].geometry}
                material={carpetMaterial}
                position={[0, 0.069, -0.018]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Varios.geometry}
                material={materials.Varios}
                position={[-0.652, 1.108, 0.61]}
                scale={0.01}
            />
        </group>
    )
}

export const WorkingTable = (props) => {

    const { nodes } = useGLTF('models/new/WorkingTable.glb');
    const metalMateril = useMetalMaterial();
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow receiveShadow geometry={nodes.Mesh006.geometry}
                material={table}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh006_1.geometry}
                material={metalMateril}
            />
        </group>
    )
}
