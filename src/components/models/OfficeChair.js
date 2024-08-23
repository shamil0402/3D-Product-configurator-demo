import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import { useSFabricMaterial, useTableMaterial } from './Materials'
import useStore from "../../components/store";


export function OfficeChair(props) {
    const {
        nodes,
        // materials
    } = useGLTF('models/new/OfficeChair.glb')

    const fabricMaterial = useSFabricMaterial(2, 2);

    const visibleFurnts = useStore((s) => s.visibleFurnts);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cahir001.geometry}
                material={fabricMaterial}
                visible={visibleFurnts}
            />
        </group>
    )
}


export function ElemetfocusTable(props) {
    const {
        nodes,
        // materials
    } = useGLTF('models/new/ElementFocus-Table.glb')

    const table = useTableMaterial(4, 4)

    const visibleFurnts = useStore((s) => s.visibleFurnts);
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table001.geometry}
                material={table}
                visible={visibleFurnts}
            />
        </group>
    )
}
