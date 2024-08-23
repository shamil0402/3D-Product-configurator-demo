
import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
// import { useFrame } from "@react-three/fiber";
import { useExteriorMaterial, useCarpettMaterial, useMetalMaterial, useTableMaterial, useAuraInteriorMaterial } from './Materials'

export const AuraGather = (props) => {

    const { nodes, materials } = useGLTF('models/new/AuraGather.glb')

    const exteriorMaterial = useExteriorMaterial('AuraGather-Exterior-AO', 4, 4)
    const interiorMaterial = useAuraInteriorMaterial('AuraGather-Interior-AO', 4, 4)
    const carpetMaterial = useCarpettMaterial('AuraGather-Carpet-AO', 4, 4)


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
                geometry={nodes.Glass001.geometry}
                material={materials.Glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barios001.geometry}
                material={materials.Varios}
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
                geometry={nodes['M-Exterior001'].geometry}
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
                geometry={nodes['V-M-OptionA_ExteriorWall001'].geometry}
                material={exteriorMaterial}
            />
        </group>
    )
}

export const MeetengTable = (props) => {
    const { nodes } = useGLTF('models/new/MeetengTable.glb')
    const furnitureOption = useStore((s) => s.furnitureOption);

    const metalMateril = useMetalMaterial();
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh006.geometry}
                    material={table}
                    visible={furnitureOption === 0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh006_1.geometry}
                    material={metalMateril}
                    visible={furnitureOption === 0}
                />
            </group>
        </group>
    )

}

export const AuraMeetengChair = (props) => {

    const { nodes, materials } = useGLTF('models/new/Aura_MeetengChair.glb')
    const furnitureOption = useStore((s) => s.furnitureOption);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Aura_MeetingChair.geometry}
                material={materials.AuraMeetengChair}
                visible={furnitureOption === 0}
            />
        </group>
    )
}

export const AuraGatherTable = (props) => {

    const { nodes, materials } = useGLTF('models/new/125-Table.glb');
    const furnitureOption = useStore((s) => s.furnitureOption);

    const metalMateril = useMetalMaterial();
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh002.geometry}
                    material={table}

                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh002_1.geometry}
                    material={materials.Material}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh002_2.geometry}
                    material={metalMateril}
                    visible={furnitureOption === 1}
                />
            </group>
        </group>
    )

}

export const Aura_Stool = (props) => {
    const { nodes, materials } = useGLTF('models/new/Aura_Stool.glb');
    const furnitureOption = useStore((s) => s.furnitureOption);

    const metalMateril = useMetalMaterial();

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Aura-Stool'].geometry}
                    material={materials.Interior}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Aura-Stool_1'].geometry}
                    material={metalMateril}
                    visible={furnitureOption === 1}
                />
            </group>
        </group>
    )
}

export const AuraSwivwlArmchair = (props) => {

    const { nodes, materials } = useGLTF('models/new/Aura-SwivwlArmchair.glb')
    const furnitureOption = useStore((s) => s.furnitureOption);

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.SwivelArmcahir_1.geometry}
                    material={materials.SwivelArmcair}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 2}
                />
            </group>
        </group>
    )


}

export const RoundedTable = (props) => {

    const { nodes, } = useGLTF('models/new/RoundedTable.glb')
    const furnitureOption = useStore((s) => s.furnitureOption);
    const metalMateril = useMetalMaterial();
    const table = useTableMaterial(4, 4)

    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.077, 0]} scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh004.geometry}
                    material={table}
                    visible={furnitureOption === 2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh004_1.geometry}
                    material={metalMateril}
                    visible={furnitureOption === 2}
                />
            </group>
        </group>
    )
}

export const AuraLCouch = (props) => {

    const { nodes, materials } = useGLTF('models/new/Aura-230LCouch.glb')
    const furnitureOption = useStore((s) => s.furnitureOption);

    const metalMateril = useMetalMaterial();

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-230LCouch_Metal'].geometry}
                    material={metalMateril}
                    position={[78.276, 37.144, -12.852]}
                    visible={furnitureOption === 3}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-230LCouch_Fabric'].geometry}
                    material={materials['V-M-Sest1?Fabric']}
                    position={[78.276, 37.144, -12.852]}
                    visible={furnitureOption === 3}
                />
            </group>
        </group>
    )
}