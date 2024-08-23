import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import { useTableMaterial, useSFabricMaterial } from './Materials'
import useStore from "../../components/store";

export function ElementSoloStool(props) {
    const {
        nodes,
        // materials
    } = useGLTF('models/new/ElementSolo_Stool.glb')

    const fabricMaterial = useSFabricMaterial(2, 2);

    const visibleFurnts = useStore((s) => s.visibleFurnts);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Stool001.geometry}
                material={fabricMaterial}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
                visible={visibleFurnts}
            />
        </group>
    )
}

export const ElementSoloStoolTable = (props) => {

    const {
        nodes,
        // materials
    } = useGLTF('models/new/ElementSolo_Stool_Table.glb')

    const table = useTableMaterial(4, 4)

    const visibleFurnts = useStore((s) => s.visibleFurnts);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table001.geometry}
                material={table}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
                visible={visibleFurnts}
            />
        </group>
    )

}