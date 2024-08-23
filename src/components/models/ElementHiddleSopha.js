
import React, { } from 'react';
import { useGLTF, } from "@react-three/drei"
import { useMetalMaterial, useSFabricMaterial } from './Materials'
import useStore from "../../components/store";


export const ElementHiddleSopha = (props) => {

    const {
        nodes,
        // materials
    } = useGLTF('models/new/ElementHiddle-Sopha.glb')

    const metalMateril = useMetalMaterial();
    const fabricMaterial = useSFabricMaterial(2, 2);

    const visibleFurnts = useStore((s) => s.visibleFurnts);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa003.geometry}
                material={fabricMaterial}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
                visible={visibleFurnts}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa004.geometry}
                material={metalMateril}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
                visible={visibleFurnts}
            />
        </group>
    )
}
