
import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
import { useExteriorMaterial, useCarpettMaterial, useSFabricMaterial, useMetalMaterial, useTableMaterial, useAuraInteriorMaterial } from './Materials'

export const AuraSolo = (props) => {

    const { nodes, materials } = useGLTF('models/new/AuraSolo.glb')

    const exteriorMaterial = useExteriorMaterial('AuraSolo-Exterior-AO', 4, 4)
    const interiorMaterial = useAuraInteriorMaterial('AuraSolo-Interior-AO', 4, 4)
    const carpetMaterial = useCarpettMaterial('AuraSolo-Exterior-AO', 4, 4)


    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Glass001.geometry}
                material={materials.Glass}
                position={[0, 1.184, 0.474]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-Carpet001'].geometry}
                material={carpetMaterial}
                position={[0, 0.105, -0.043]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-Exterior001'].geometry}
                material={exteriorMaterial}
                position={[0, 1.183, -0.495]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-Interior001'].geometry}
                material={interiorMaterial}
                position={[0, 1.183, -0.043]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Varios001.geometry}
                material={materials.Varios}
                position={[-0.462, 1.281, -0.611]}
                rotation={[0, -1.571, 0]}
                scale={0.01}
            />
        </group>
    )
}

export const CTable = (props) => {

    const { nodes } = useGLTF('models/new/C-Table.glb')
    const metalMateril = useMetalMaterial();
    const furnitureOption = useStore((s) => s.furnitureOption);
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh166.geometry}
                material={table}
                visible={furnitureOption === 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh166_1.geometry}
                material={metalMateril}
                visible={furnitureOption === 2}
            />
        </group>
    )

}

export const LShelfTable = (props) => {

    const { nodes } = useGLTF('models/new/LShelfTable.glb')
    const metalMateril = useMetalMaterial();
    const furnitureOption = useStore((s) => s.furnitureOption);
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh172.geometry}
                material={table}
                visible={furnitureOption === 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh172_1.geometry}
                material={metalMateril}
                visible={furnitureOption === 1}
            />
        </group>
    )

}

export const Prech = (props) => {

    const { nodes } = useGLTF('models/new/Prech.glb')
    const fabricMaterial = useSFabricMaterial(2, 2);
    const furnitureOption = useStore((s) => s.furnitureOption);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Furniture2.geometry}
                material={fabricMaterial}
                visible={furnitureOption === 1}
            />
        </group>
    )

}

export const SquareBench = (props) => {

    const { nodes } = useGLTF('models/new/SquareBench.glb')

    const fabricMaterial = useSFabricMaterial(2, 2);
    const furnitureOption = useStore((s) => s.furnitureOption);
    const metalMateril = useMetalMaterial();

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh167.geometry}
                material={fabricMaterial}
                visible={furnitureOption === 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh167_1.geometry}
                material={metalMateril}
                visible={furnitureOption === 2}
            />
        </group>
    )

}