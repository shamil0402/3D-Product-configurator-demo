import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
// import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFeltMaterial, useCarpettMaterial, } from './Materials'

// import { EffectComposer, Outline } from '@react-three/postprocessing';
// import { Select, Selection } from '@react-three/postprocessing';
// import * as THREE from "three";
import { Html } from "@react-three/drei";

export function AuraFocus(props) {

    // const [hoveredPart, setHoveredPart] = useState()
    const { nodes, materials } = useGLTF('models/AuraFocus.glb')

    const feltMaterial = useFeltMaterial('ElementMeet-Felt-AO-furniture', 4, 4)
    const carpetMaterial = useCarpettMaterial('ElementMeet-Carpet-AO-furniture', 4, 4)

    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);
    const visibleFurnts = useStore((s) => s.visibleFurnts);

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });

    // const exteriorColor = useLoader(TextureLoader, texturesUrl.exterior.color);
    // const interiorColor = useLoader(TextureLoader, texturesUrl.interior.color);
    // const FurnitureColor = useLoader(TextureLoader, texturesUrl.seating.color);
    // materials.Exterior.map = exteriorColor;
    // materials.Interior.map = interiorColor;
    // materials.Furniture.map = FurnitureColor;

    const exteriorColor = texturesUrl.exterior.color;
    // const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;
    // const carpetColor = texturesUrl.carpet.color;
    const tableColor = texturesUrl.table.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    // useEffect(() => {
    //     let isMounted = true; // Flag to track component mount status
    //     const loader = new TextureLoader();
    //     loader.load(interiorColor, (t) => {
    //         if (isMounted) {
    //             materials.Interior.map = t;
    //         }
    //     });

    //     // Cleanup function to avoid memory leaks and dangling references
    //     return () => {
    //         isMounted = false; // Cleanup flag on unmount
    //     };
    // }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Set3.map = t;
                materials['Set2-Static'].map = t;
                materials['Set2-Static'].map = t;
                materials['Set1-Static'].map = t;
                materials.Set1.map = t;
                materials.Set2.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);

    // useEffect(() => {
    //     let isMounted = true; // Flag to track component mount status
    //     const loader = new TextureLoader();
    //     loader.load(carpetColor, (t) => {
    //         if (isMounted) {
    //             materials.Carpet.map = t;
    //         }
    //     });

    //     // Cleanup function to avoid memory leaks and dangling references
    //     return () => {
    //         isMounted = false; // Cleanup flag on unmount
    //     };
    // }, [carpetColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(tableColor, (t) => {
            if (isMounted) {
                // materials['Table _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [tableColor, materials]);

    const handleOver = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            // e.object.material.color.setHex(0x00FF00)
            // setHoveredPart({
            //     name: e.object.material.name,
            //     pos: e.object.position,
            // })
        }
    }, [])

    const handleOut = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            // e.object.material.color.setHex(0xFFFFFF)
            // setHoveredPart();
        }

    }, [])

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Box010_1.geometry}
                    material={materials.Varios}
                    position={[-72.874, 98.227, -49.41]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018_1.geometry}
                    material={materials.Varios}
                    position={[-72.203, 109.983, -54.763]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent005_1.geometry}
                    material={materials.Varios}
                    position={[-50.847, 222.516, -44.672]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent004_1.geometry}
                    material={materials.Varios}
                    position={[-50.847, 222.516, -3.573]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent003_1.geometry}
                    material={materials.Varios}
                    position={[-50.847, 222.516, 37.427]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent002_1.geometry}
                    material={materials.Varios}
                    position={[50.838, 222.516, -44.672]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent001_1.geometry}
                    material={materials.Varios}
                    position={[50.838, 222.516, -3.573]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Box009_1.geometry}
                    material={materials.Varios}
                    position={[-72.852, 136.494, -49.41]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016_1.geometry}
                    material={materials.Varios}
                    position={[-72.217, 148.25, -54.759]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Censor_1.geometry}
                    material={materials.Varios}
                    position={[0, 221.729, -42.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent_1.geometry}
                    material={materials.Varios}
                    position={[50.838, 222.516, 37.427]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamp_1.geometry}
                    material={materials.Varios}
                    position={[0.001, 221.735, -1.858]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorHandle_1.geometry}
                    material={materials.Varios}
                    position={[7.715, 110.902, 64.095]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    // material={materials.Interior}
                    material={feltMaterial}
                    position={[-73.794, 114.745, -1.836]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-WallsExterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0.02, 114.75, -1.902]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    onPointerOver={handleOver}
                    onPointerOut={handleOut}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={carpetMaterial}
                    position={[0.005, 6.938, -1.845]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[-38.803, 114.741, -69.51]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />


                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set3_1'].geometry}
                    material={materials.Set3}
                    position={[-9.614, 56.603, 0.773]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    onPointerOver={handleOver}
                    onPointerOut={handleOut}
                    userData={{ hover: false }}
                    visible={visibleFurnts}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_1'].geometry}
                    material={materials['Set2-Static']}
                    position={[-42.142, 60.721, -25.81]}
                    rotation={[-Math.PI / 2, 0, 1.309]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1.geometry}
                    material={materials.Varios}
                    position={[-65.173, 110.77, 60.954]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-set1_1'].geometry}
                    material={materials['Set1-Static']}
                    position={[53.83, 51.473, -45.78]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set1_1'].geometry}
                    material={materials.Set1}
                    position={[53.83, 51.473, -45.78]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set2_1'].geometry}
                    material={materials.Set2}
                    position={[-42.142, 60.721, -25.81]}
                    rotation={[-Math.PI / 2, 0, 1.309]}
                    visible={false}
                />
            </group>


        </group >
    )
}

export function AuraGather(props) {
    // const [hoveredPart, setHoveredPart] = useState()
    const { nodes, materials } = useGLTF('models/AuraGather.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);
    // const visibleFurnts = useStore((s) => s.visibleFurnts);

    const furnitureOption = useStore((s) => s.furnitureOption);

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;
    const carpetColor = texturesUrl.carpet.color;
    const tableColor = texturesUrl.table.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                // materials.Furniture.map = t;
                materials[' Furniture-Set2'].map = t;
                materials.Sest1_FurnitureStatic.map = t;
                materials[' Furniture-Set4-Static'].map = t;
                materials[' Furniture-Set3'].map = t;
                materials['V-M-Sest1_Furniture'].map = t;
                materials[' Furniture-Set4'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(carpetColor, (t) => {
            if (isMounted) {
                materials.Carpet.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [carpetColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(tableColor, (t) => {
            if (isMounted) {
                //  materials['Table _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [tableColor, materials]);

    const handleOver = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            // e.object.material.color.setHex(0x00FF00)
            // console.log(e.object.material.name, "2222222222")
            // setHoveredPart({
            //     name: e.object.material.name,
            //     pos: e.object.position,
            // })
        }
    }, [])

    const handleOut = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            // e.object.material.color.setHex(0xFFFFFF)
            // setHoveredPart();
        }

    }, [])

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionB_Glass_1'].geometry}
                    material={materials.Glass}
                    position={[0, 114.75, -124.635]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[-0.278, 6.95, -1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[-83.899, 114.608, 120.744]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Barios_1.geometry}
                    material={materials.Varios}
                    position={[38.551, 221.42, -7.76]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    material={materials.Interior}
                    position={[-123.806, 114.746, 76.8]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_Furniture_1'].geometry}
                    material={materials[' Furniture-Set2']}
                    position={[45.269, 7.65, -47.695]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 114.7, -1.902]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Sest1_Furniture_1'].geometry}
                    material={materials.Sest1_FurnitureStatic}
                    position={[91.852, 44.744, -35.697]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 3}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_InteriorWll_1'].geometry}
                    material={materials.Interior}
                    position={[0, 113.912, -156.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_ExteriorWall_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 113.912, -200.798]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set4_Furniture_1'].geometry}
                    material={materials[' Furniture-Set4-Static']}
                    position={[-0.278, 7.66, -111.01]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set3_Furniture_1'].geometry}
                    material={materials[' Furniture-Set3']}
                    position={[-0.278, 76.793, -1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    onPointerOver={handleOver}
                    onPointerOut={handleOut}
                    visible={furnitureOption === 0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Sest1_Furniture_1'].geometry}
                    material={materials['V-M-Sest1_Furniture']}
                    position={[91.852, 44.744, -35.697]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 3}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_1.geometry}
                    material={materials[' Furniture-Set4']}
                    position={[-0.278, 7.66, -111.01]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />
            </group>
        </group>
    )
}

export function AuraHuddle(props) {
    const { nodes, materials } = useGLTF('models/AuraHuddle.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);
    // const visibleFurnts = useStore((s) => s.visibleFurnts);
    const furnitureOption = useStore((s) => s.furnitureOption);

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;
    const carpetColor = texturesUrl.carpet.color;
    const tableColor = texturesUrl.table.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials["V-Sest3_Furniture"].map = t;
                materials["V-M-Sest1_Furniture"].map = t;
                materials.Sest1_FurnitureStatic.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(carpetColor, (t) => {
            if (isMounted) {
                materials.Carpet.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [carpetColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(tableColor, (t) => {
            if (isMounted) {
                //  materials['Table _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [tableColor, materials]);

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    material={materials.Interior}
                    position={[0, 222.55, -1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[0, 6.95, -1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0.02, 114.71, -1.56]}
                    rotation={[-Math.PI / 2, 0, 0]}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Varios_1.geometry}
                    material={materials.Varios}
                    position={[38.55, 221.562, -1.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_1'].geometry}
                    material={materials['Set2-Staic']}
                    position={[0, 82.662, -84.938]}
                    visible={true}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_3'].geometry}
                    material={materials['Set2-Staic']}
                    position={[-97.922, 36.964, 32.321]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_InteriorWll_1'].geometry}
                    material={materials.Interior}
                    position={[0, 113.953, -121.122]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_ExteriorWall_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 113.953, -165.673]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Set2_1.geometry}
                    material={materials['Set2-Staic']}
                    position={[0, 82.662, -84.938]}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Sest1_Furniture_1'].geometry}
                    material={materials.Sest1_FurnitureStatic}
                    position={[77.034, 44.744, 3.742]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Sest1_Furniture_1'].geometry}
                    material={materials['V-M-Sest1_Furniture']}
                    position={[77.034, 44.744, 3.742]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set3_1'].geometry}
                    material={materials['V-Sest3_Furniture']}
                    position={[-18.237, 56.603, 0.773]}
                    rotation={[-Math.PI / 2, 0, -0.036]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set2_1'].geometry}
                    material={materials['M-Set2']}
                    position={[-97.922, 36.964, 32.321]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={true}
                />
            </group>
        </group>
    )
}

export function AuraSolo(props) {

    const { nodes, materials } = useGLTF('models/AuraSolo.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);
    // const visibleFurnts = useStore((s) => s.visibleFurnts);

    const furnitureOption = useStore((s) => s.furnitureOption);

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });


    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;
    const carpetColor = texturesUrl.carpet.color;
    const tableColor = texturesUrl.table.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Furniture.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials.Furniture]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(carpetColor, (t) => {
            if (isMounted) {
                materials.Carpet.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [carpetColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(tableColor, (t) => {
            if (isMounted) {
                //   materials['Table _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [tableColor, materials]);


    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.012}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape003_1.geometry}
                    material={materials['Empty material']}
                    position={[0, 6.8, -49.489]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionA_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 60.754, -7.11]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[0, 6.943, -4.345]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    material={materials.Interior}
                    position={[0, 114.75, -4.345]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[0, 114.825, 47.39]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 114.75, -49.481]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionB-BenchTable_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 8.647, -20.349]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionC_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 8.647, -20.349]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 60.754, -7.11]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionB-Bench_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 8.647, -20.349]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Varios_1.geometry}
                    material={materials.Varios}
                    position={[-46.184, 124.51, -61.13]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionC_1'].geometry}
                    material={materials.Furniture}
                    position={[32.091, 110.673, -2.756]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={furnitureOption === 1}
                />
            </group>
        </group>
    )
}

export function AuraMeet(props) {
    const { nodes, materials } = useGLTF('models/AuraMeet.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);
    // const visibleFurnts = useStore((s) => s.visibleFurnts);
    const furnitureOption = useStore((s) => s.furnitureOption);

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;
    const carpetColor = texturesUrl.carpet.color;
    const tableColor = texturesUrl.table.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Furniture.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials.Furniture]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(carpetColor, (t) => {
            if (isMounted) {
                materials.Carpet.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [carpetColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(tableColor, (t) => {
            if (isMounted) {
                //   materials['Table _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [tableColor, materials]);

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Furniture_1.geometry}
                    material={materials.Furniture}
                    position={[-99.454, 40.302, -1.903]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={furnitureOption === 1}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Furniture_1'].geometry}
                    material={materials.Furniture}
                    position={[-99.454, 40.302, -1.903]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={furnitureOption === 1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionA_PowerOutlet_1'].geometry}
                    material={materials.Varios}
                    position={[-30.167, 114.299, 47.502]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_InteriorWll_1'].geometry}
                    material={materials.Interior}
                    position={[0, 117.477, -82.338]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionB-Glass_1'].geometry}
                    material={materials.Glass}
                    position={[-76.392, 6.606, -128.773]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-InteriorWalls_1'].geometry}
                    material={materials.Interior}
                    position={[-108.179, 64.506, -41.081]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[0.132, 10.988, -41.203]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[-76.392, 6.606, -128.773]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorGlass_1.geometry}
                    material={materials.Glass}
                    position={[0.008, 118.156, 47.452]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_ExteriorWall_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 117.477, -126.888]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0.008, 118.156, 40.703]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Varios_1.geometry}
                    material={materials.Varios}
                    position={[-30.167, 114.299, 47.502]}
                />
            </group>
        </group>
    )
}


export function ElemetTechKit(props) {

    const partsInfo = {
        phone: " Android based access\ncontroller or LPAD",
        lock: "Electric Lock",
        nvidia: "NVIDA loT Gateway",
        q3: "Q3 Sensor",
        camera: "Ip camera",
        iaq: "IAQ Sensor",
        lpad: "LPAD",
        airtame: "Airtame",
        jabra: "Jabra Panacast 50"
    }

    const radis = 0.06;

    const { nodes, materials } = useGLTF('models/ElemetTechKit.glb');

    const podFef = useRef();

    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);
    const visibleFurnts = useStore((s) => s.visibleFurnts);
    const infoImgMap = useStore((s) => s.infoImgMap);

    const techkit = useStore((s) => s.techkit);

    const [selectedInfo, setSelectedInfo] = useState()

    // useFrame(() => {
    //     if (podFef.current) {
    //         podFef.current.rotation.y += 0.002;
    //     }
    // });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;
    const carpetColor = texturesUrl.carpet.color;
    const tableColor = texturesUrl.table.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials['Interior.001'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials['Sofa.001'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(carpetColor, (t) => {
            if (isMounted) {
                materials['Carpet.001'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [carpetColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(tableColor, (t) => {
            if (isMounted) {
                materials['Table.001'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [tableColor, materials]);


    const handleOver = useCallback((e, type) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            setSelectedInfo({
                type: type,
                name: e.object.material.name,
                pos: e.object.position,
            })
        }
    }, [setSelectedInfo])

    const handleOut = useCallback((e) => {
        e.stopPropagation();
        // setSelectedInfo();
    }, [])


    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                position={[0, -1, 0]}
            >
                <group
                    position={[-0.081, -0.229, 0.009]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['TeckKit1-0'].geometry}
                        material={materials.Phone}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['TeckKit1-1'].geometry}
                        material={materials['Material _3']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['TeckKit1-2'].geometry}
                        material={materials.JetsonOrion}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['TeckKit1-3'].geometry}
                        material={materials['Material.021']}
                    />
                </group>

                <group
                    position={[0.274, 1.289, -0.7]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-0'].geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-1'].geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-2'].geometry}
                        material={materials['TV_Plastic Base 01']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-3'].geometry}
                        material={materials.TV_Screen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-4'].geometry}
                        material={materials.TV_Led}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-5'].geometry}
                        material={materials.TV_Bolt}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-6'].geometry}
                        material={materials['TV_Metal scratched']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-7'].geometry}
                        material={materials.Fabric}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-8'].geometry}
                        material={materials.blackPlastic}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mesh011-9'].geometry}
                        material={materials['camera lens']}
                    />
                </group>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere-0'].geometry}
                    material={materials['Material.015']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere-1'].geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere-2'].geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere-3'].geometry}
                    material={materials['Material.006']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere-4'].geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Carpet001_1.geometry}
                    material={materials['Carpet.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorsWindows001_1.geometry}
                    material={materials['DoorWindows.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorsWindows002_1.geometry}
                    material={materials['DoorWindows.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Exterior001_1.geometry}
                    material={materials.Exterior}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Furniture001-0'].geometry}
                    material={materials['Varios.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Furniture001-1'].geometry}
                    material={materials['Material.014']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Furniture001-2'].geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Furniture001-3'].geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Furniture002-0'].geometry}
                    material={materials['Material.017']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Furniture002-1'].geometry}
                    material={materials['Material.014']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Furniture003_1.geometry}
                    material={materials['Material.014']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Interior001_1.geometry}
                    material={materials['Interior.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sofa001_1.geometry}
                    material={materials['Sofa.001']}
                    visible={visibleFurnts}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure001_1.geometry}
                    material={materials['Struccture.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Table001_1.geometry}
                    material={materials['Table.001']}
                    visible={visibleFurnts}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Mesh012-0'].geometry}
                    material={materials['pixamoon-paste-image-003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Mesh012-1'].geometry}
                    material={materials.AElta}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass001_1.geometry}
                    material={materials['Glass.001']}
                />
            </group>
            {
                techkit === "access" && (
                    <>
                        <mesh
                            position={[1.1, 0.3, 0.8]}
                            onPointerOver={(e) => handleOver(e, "phone")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "phone" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>
                        <mesh
                            position={[0.5, 0.1, 0.75]}
                            onPointerOver={(e) => handleOver(e, "lock")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "lock" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>
                    </>
                )
            }

            {
                techkit === "safe" && (
                    <>
                        <mesh
                            position={[0.7, 1.25, 0.75]}
                            onPointerOver={(e) => handleOver(e, "nvidia")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "nvidia" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>
                        <mesh
                            position={[-0.1, 1.15, -0.2]}
                            onPointerOver={(e) => handleOver(e, "camera")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "camera" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>
                        <mesh
                            position={[0.1, 1.15, 0]}
                            onPointerOver={(e) => handleOver(e, "q3")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "q3" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>
                    </>
                )
            }

            {
                techkit === "environmental" && (
                    <>
                        <mesh
                            position={[-0.95, 0.4, -0.2]}
                            onPointerOver={(e) => handleOver(e, "iaq")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "iaq" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>

                        <mesh
                            position={[-0.95, 0.5, -0.5]}
                            onPointerOver={(e) => handleOver(e, "lpad")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "lpad" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>
                    </>
                )
            }

            {
                techkit === "video" && (
                    <>

                        <mesh
                            position={[0.45, 0.25, -0.6]}
                            onPointerOver={(e) => handleOver(e, "airtame")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                map={infoImgMap}
                                color={selectedInfo?.type === "airtame" ? 0x00FF00 : 0xFFFFFF}
                            />
                        </mesh>

                        <mesh
                            position={[0, 0.1, -0.6]}
                            onPointerOver={(e) => handleOver(e, "jabra")}
                            onPointerOut={(e) => handleOut(e)}
                        >
                            <circleGeometry attach="geometry" args={[radis, 100]} />
                            <meshBasicMaterial
                                color={selectedInfo?.type === "jabra" ? 0x00FF00 : 0xFFFFFF}
                                map={infoImgMap}
                            />
                        </mesh>
                    </>
                )

            }


            {
                selectedInfo &&
                <Html
                    position={[selectedInfo.pos.x, selectedInfo.pos.y, selectedInfo.pos.z]}
                    style={{
                        transform: "translate(20%, -50%)",
                    }}
                >
                    <div
                        style={{
                            paddingTop: "5px",
                            // transform: "translate3d(calc(50 % + 40px), 0, 0)",
                            textAlign: "left",
                            background: "#202035",
                            color: "white",
                            padding: "5px 5px",
                            borderRadius: "2px",
                            fontSize: "16px",
                            whiteSpace: "pre"
                        }}
                    >
                        {partsInfo[selectedInfo.type]}
                    </div>


                </Html>
            }
        </group>
    )
}
