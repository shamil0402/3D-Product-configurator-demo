
import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
import { useExteriorMaterial, useCarpettMaterial, useSFabricMaterial, useMetalMaterial, useTableMaterial, useAuraInteriorMaterial } from './Materials'

export const AuraMeet = (props) => {

    const { nodes, materials } = useGLTF('models/new/AuraMeet.glb')

    const exteriorMaterial = useExteriorMaterial('AuraMeet-Exterior-AO', 4, 4)
    const interiorMaterial = useAuraInteriorMaterial('AuraMeet-Interior-AO', 4, 4)
    const carpetMaterial = useCarpettMaterial('AuraHuddle-Meet-AO', 4, 4)


    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DoorGlass001.geometry}
                material={materials.Glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Glass001.geometry}
                material={materials.Glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-Carpet001'].geometry}
                material={carpetMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-Exterior001'].geometry}
                material={exteriorMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['M-InteriorWalls001'].geometry}
                material={interiorMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['V-M-OptionA_ExteriorWall001'].geometry}
                material={exteriorMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['V-M-OptionA_InteriorWll001'].geometry}
                material={interiorMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['V-OptionA_PowerOutlet001'].geometry}
                material={materials.Varios}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['V-OptionB-Glass001'].geometry}
                material={materials.Glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Varios001.geometry}
                material={materials.Varios}
            />
        </group>
    )

}

export const SmallCoach = (props) => {

    const { nodes, } = useGLTF('models/new/82Coach.glb')

    const fabricMaterial = useSFabricMaterial(2, 2);
    const metalMateril = useMetalMaterial();
    const furnitureOption = useStore((s) => s.furnitureOption);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh160.geometry}
                material={fabricMaterial}
                visible={furnitureOption === 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh160_1.geometry}
                material={metalMateril}
                visible={furnitureOption === 1}
            />
        </group>
    )

}

export const CoffeeTable = (props) => {

    const { nodes, } = useGLTF('models/new/CoffeeTable.glb')
    const metalMateril = useMetalMaterial();
    const furnitureOption = useStore((s) => s.furnitureOption);
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Mesh161.geometry}
                material={table}
                visible={furnitureOption === 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh161_1.geometry}
                material={metalMateril}
                visible={furnitureOption === 1}
            />
        </group>
    )

}