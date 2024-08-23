
import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
import { useExteriorMaterial, useCarpettMaterial, useMetalMaterial, useTableMaterial, useSFabricMaterial, useAuraInteriorMaterial } from './Materials'

export const AuraHuddle = (props) => {

    const { nodes, materials } = useGLTF('models/new/AuraHuddle.glb')

    const exteriorMaterial = useExteriorMaterial('AuraHuddle-Exterior-AO', 4, 4)

    const interiorMaterial = useAuraInteriorMaterial('AuraHuddle-Exterior-AO', 4, 4)
    const carpetMaterial = useCarpettMaterial('AuraHuddle-Interior-AO', 4, 4)


    return (
        <group {...props} dispose={null}>
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
                geometry={nodes['M-Interior001'].geometry}
                material={interiorMaterial}
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
                geometry={nodes['V-M-OptionA_ExteriorWall001'].geometry}
                material={exteriorMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['V-M-OptionA_InteriorWll001'].geometry}
                material={interiorMaterial}
            />
        </group>
    )

}

export const TableB = (props) => {

    const { nodes, materials } = useGLTF('models/new/125MeetingTableCouch.glb');

    const furnitureOption = useStore((s) => s.furnitureOption);
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.827, -0.849]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh002.geometry}
                    material={table}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh002_1.geometry}
                    material={materials.Base}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh002_2.geometry}
                    material={materials.Plastic}
                    visible={furnitureOption === 1}
                />
            </group>
        </group>
    )

}

export const Couch = (props) => {

    const { nodes } = useGLTF('models/new/163Couch.glb');
    const fabricMaterial = useSFabricMaterial(2, 2);
    const metalMateril = useMetalMaterial();

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh001.geometry}
                material={fabricMaterial}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh001_1.geometry}
                material={metalMateril}
            />
        </group>
    )

}