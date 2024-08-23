import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import { useMetalMaterial, useSFabricMaterial } from './Materials'
import useStore from "../../components/store";

export function Sopha(props) {
    const {
        nodes,
        // materials
    } = useGLTF('models/new/Sopha.glb')

    const metalMateril = useMetalMaterial();
    const fabricMaterial = useSFabricMaterial(2, 2);

    const visibleFurnts = useStore((s) => s.visibleFurnts);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SophaFabric.geometry}
                material={fabricMaterial}
                visible={visibleFurnts}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SophaLegs.geometry}
                material={metalMateril}
                visible={visibleFurnts}
            />
        </group>
    )
}
