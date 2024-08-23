import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
import { useMetalMaterial, useTableMaterial } from './Materials'

export function ElementHiddleTable(props) {

    const {
        nodes,
        // materials
    } = useGLTF('models/new/ElementHiddle-Table.glb')

    const metalMateril = useMetalMaterial();
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
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table002.geometry}
                material={metalMateril}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
                visible={visibleFurnts}
            />
        </group>
    )
}
