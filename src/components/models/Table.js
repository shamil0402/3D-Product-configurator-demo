import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
import { useMetalMaterial, useTableMaterial } from './Materials'

export function Table(props) {
    const {
        nodes,
        // materials
    } = useGLTF('models/new/Table.glb')

    const metalMateril = useMetalMaterial();
    const table = useTableMaterial(4, 4)

    const visibleFurnts = useStore((s) => s.visibleFurnts);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow receiveShadow
                geometry={nodes.Table.geometry}
                material={table}
                visible={visibleFurnts}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TableBase.geometry}
                material={metalMateril}
                visible={visibleFurnts}
            />
        </group>
    )
}
