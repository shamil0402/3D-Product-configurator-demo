/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
// import { Lights } from '../../components/elements/common';
import {
    OrbitControls, Stage,
} from "@react-three/drei";
import useStore from "../../components/store";
import { POD_TYPE } from "../../components/utils";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { ElemetTechKit } from '../../components/models/common';

import { Elemetfocus } from '../../components/models/Elemetfocus';
import { Elemetsolo } from '../../components/models/ElementSolo';
import { ElemetMeet } from '../../components/models/ElementMeet';
import { ElemetHuddel } from '../../components/models/ElementHiddle';

import { Sopha } from '../../components/models/Sopha';
import { Table } from '../../components/models/Table';

import { ElementSoloStool } from '../../components/models/ElementSoloStool';
import { ElementSoloStoolTable } from '../../components/models/ElementSoloStool';

import { ElementHiddleSopha } from '../../components/models/ElementHiddleSopha';

import { OfficeChair, ElemetfocusTable } from '../../components/models/OfficeChair';

import { ElementHiddleTable } from '../../components/models/ElementHiddleTable';

import { AuraFocus, WorkingTable } from '../../components/models/AuraFocus';
import { AuraGather, MeetengTable, AuraMeetengChair, AuraGatherTable, Aura_Stool, AuraSwivwlArmchair, RoundedTable, AuraLCouch, } from '../../components/models/AuraGather';
import { AuraHuddle, Couch, TableB } from '../../components/models/AuraHuddle';
import { AuraSolo, CTable, LShelfTable, Prech, SquareBench, } from '../../components/models/AuraSolo';
import { AuraMeet, CoffeeTable, SmallCoach } from '../../components/models/AuraMeet';

import { Html } from "@react-three/drei";

import {
    CircularProgress,
    // Box,
    // Stack,
    // Tooltip,
    // IconButton,
} from "@mui/material";
// import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';

import { jsPDF } from 'jspdf';


// API key 
// 41c8MTI5MzE6MTI5ODY6dXBhYkc4eEJxd3BKWFJJRA=

const Loader = () => {
    return (
        <Html
            center
            position={[0, 0, 0]}
        >
            <CircularProgress color="inherit" size={40} />
        </Html>
    );
};


const ViewSystem = () => {

    return (
        <>
            <OrbitControls
                enableDamping={true}
                enableZoom={true}
                enablePan={true}
                enabled={true}
                // minPolarAngle={Math.PI / 12}
                // maxPolarAngle={7 * Math.PI / 16}
                // minAzimuthAngle={-4 * Math.PI / 12}
                // maxAzimuthAngle={4 * Math.PI / 12}
                minDistance={0.01}
                maxDistance={100}
            />
        </>
    )
}


const Scene = () => {

    const type = useStore((s) => s.type);

    const setInfoMap = useStore((s) => s.setInfoMap);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        const path = 'ui/Asset 2.svg'
        loader.load(path, (t) => {
            if (isMounted) {
                setInfoMap(t);
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [setInfoMap])

    return (
        <>

            <Stage
                environment={"warehouse"}
                adjustCamera={1}
                intensity={0.25}>
                <Suspense fallback={null}>
                    <spotLight
                        position={[0, 1., 0]}
                        intensity={5}
                        angle={1.5}
                        penumbra={0.25}
                    />
                    <ViewSystem />
                    {/* <Lights /> */}

                    <group
                        position={[0, -1, 0]}
                        dispose={null}  >
                        <Suspense fallback={<Loader />}
                        >
                            {
                                type === POD_TYPE.A && (
                                    <>
                                        <AuraFocus />
                                        <group visible={true}>
                                            <WorkingTable rotation={[0, Math.PI, 0]} position={[-0.35, 0, -0.05]} />
                                            <OfficeChair position={[0, -0.07, 0]} />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.B && (
                                    <>
                                        <AuraGather />
                                        <group visible={true}>
                                            <MeetengTable
                                                position={[0, 0.03, 0]}
                                            />
                                            <AuraMeetengChair
                                                rotation={[0, Math.PI / 2, 0]}
                                                position={[-0.5, 0.1, -0.5]}
                                            />
                                            <AuraMeetengChair
                                                rotation={[0, Math.PI / 2, 0]}
                                                position={[-0.5, 0.1, 0.5]}
                                            />
                                            <AuraMeetengChair
                                                rotation={[0, -Math.PI / 2, 0]}
                                                position={[0.5, 0.1, 0.5]}
                                            />
                                            <AuraMeetengChair
                                                rotation={[0, -Math.PI / 2, 0]}
                                                position={[0.5, 0.1, -0.5]}
                                            />
                                            <AuraGatherTable
                                                position={[0, 0.03, 0]}
                                            />
                                            <Aura_Stool
                                                rotation={[0, Math.PI / 2, 0]}
                                                position={[-0.5, 0.12, -0.8]}
                                            />
                                            <Aura_Stool
                                                rotation={[0, Math.PI / 2, 0]}
                                                position={[-0.5, 0.12, 0]}
                                            />
                                            <Aura_Stool
                                                rotation={[0, -Math.PI / 2, 0]}
                                                position={[0.5, 0.12, 0]}
                                            />
                                            <Aura_Stool
                                                rotation={[0, -Math.PI / 2, 0]}
                                                position={[0.5, 0.12, -0.8]}
                                            />
                                            <Aura_Stool
                                                rotation={[0, Math.PI / 2, 0]}
                                                position={[-0.5, 0.12, -0.4]}
                                            />
                                            <Aura_Stool
                                                rotation={[0, -Math.PI / 2, 0]}
                                                position={[0.5, 0.12, -0.4]}
                                            />
                                            <RoundedTable
                                                position={[0, 0.04, 0]}
                                            />
                                            <AuraSwivwlArmchair
                                                rotation={[0, Math.PI / 4, 0]}
                                                position={[-0.5, 0.12, -0.6]}
                                            />
                                            <AuraSwivwlArmchair
                                                rotation={[0, 3 * Math.PI / 4, 0]}
                                                position={[-0.5, 0.12, 0.6]}
                                            />
                                            <AuraSwivwlArmchair
                                                rotation={[0, -Math.PI / 4, 0]}
                                                position={[0.5, 0.12, -0.6]}
                                            />
                                            <AuraSwivwlArmchair
                                                rotation={[0, -3 * Math.PI / 4, 0]}
                                                position={[0.5, 0.12, 0.6]}
                                            />

                                            <AuraLCouch
                                                position={[0, 0.112, 0]}
                                            />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.C && (
                                    <>
                                        <AuraHuddle />
                                        <group visible={true}>
                                            <Couch
                                                rotation={[0, Math.PI, 0]}
                                                position={[0.75, 0, 0]}
                                            />
                                            <Couch
                                                rotation={[0, 0, 0]}
                                                position={[-0.75, 0, 0]}
                                            />
                                            <TableB />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.D && (
                                    <>
                                        <AuraSolo />
                                        <group visible={true}>
                                            <CTable
                                                position={[0, 0.05, 0]}
                                            />
                                            <Aura_Stool
                                                rotation={[0, Math.PI / 2, 0]}
                                                position={[0, 0.12, 0]}
                                            />
                                            <LShelfTable />
                                            <Prech />
                                            <SquareBench />
                                        </group>

                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.E && (
                                    <>
                                        <AuraMeet />
                                        <group visible={true}>
                                            <SmallCoach />
                                            <SmallCoach
                                                rotation={[0, Math.PI, 0]}
                                            />
                                            <CoffeeTable />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.F && (
                                    <>
                                        <Elemetsolo />
                                        <group visible={true}>
                                            <ElementSoloStoolTable />
                                            <ElementSoloStool />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.G && (

                                    <>
                                        <ElemetMeet />
                                        <group visible={true}>
                                            <Table />
                                            <Sopha />
                                            <Sopha rotation={[0, Math.PI, 0]} position={[0, 0, -0.05]} />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.H && (
                                    <>
                                        <ElemetHuddel />
                                        <group visible={true}>
                                            <ElementHiddleTable />
                                            <ElementHiddleSopha />
                                            <ElementHiddleSopha rotation={[0, Math.PI, 0]} position={[0, 0, -0.05]} />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.I && (
                                    <>
                                        <Elemetfocus />
                                        <group visible={true}>
                                            <OfficeChair />
                                            <ElemetfocusTable />
                                        </group>
                                    </>
                                )
                            }
                            {
                                type === POD_TYPE.J && (
                                    <ElemetTechKit />
                                )
                            }
                        </Suspense>
                    </group>
                </Suspense>
            </Stage>
        </>

    )
}


const CaptureCanvas = () => {

    const { gl, scene, camera } = useThree();

    const setType = useStore((s) => s.setType);
    const setVisibleFurnts = useStore((s) => s.setVisibleFurnts);

    const texturesUrl = useStore((s) => s.texturesUrl);

    const setTexureUrl = useStore((s) => s.setTexureUrl);

    const setTechKit = useStore((s) => s.setTechKit);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data && event.data.type === 'From Wix to 3D') {
                const updates = event.data.update;
                const key = Object.keys(updates)[0];
                console.log(key, updates);
                const current = { ...texturesUrl };

                switch (key) {
                    case "style":
                        setType(updates[key]);
                        break;
                    case "exterior":
                        current.exterior.color = updates[key];
                        setTexureUrl(current);
                        break;
                    case "interior":
                        current.interior.color = updates[key];
                        setTexureUrl(current);
                        break;
                    case "furniture":
                        current.seating.color = updates[key];
                        setTexureUrl(current);
                        break;
                    case "carpet":
                        current.carpet.color = updates[key];
                        setTexureUrl(current);
                        break;
                    case "table":
                        current.table.color = updates[key];
                        setTexureUrl(current);
                        break;
                    case "visibleFurnts":
                        setVisibleFurnts(updates[key]);
                        break;
                    case "techkit":
                        setTechKit(updates[key].tech);
                        setType(updates[key].type);
                        break;
                    case "downloadPdf":
                        downloadPDF();
                        break;
                    default:
                        break;
                }
                // setTexureUrl(newTexture);
            }
        };
        console.log("iframe load success")
        // window.addEventListener('message', handleMessage);
        window.onmessage = (event) => {
            handleMessage(event)
        }

        return () => {
            window.removeEventListener('message', handleMessage);
        };
        // eslint-disable-next-line
    }, []);


    const cameraPositions = [
        { x: -1.5, y: 2, z: 6 }, // 3d  view
        { x: 0, y: 5, z: 8 }, // Front view
        { x: 8, y: 5, z: 0 }, // Side view
        { x: 0, y: 10, z: 0 }, // Top view
        { x: -8, y: 5, z: 0 }, // Other side view
        { x: 0, y: 5, z: -8 }, // Back view
        { x: 0, y: 0.5, z: 3.5 }, // 3d  view
        { x: 0, y: 0.5, z: 0.2 }, // 3d  view
    ];



    const downloadPDF = async () => {
        const canvas = gl.domElement;

        // Create a jsPDF instance with the specified orientation
        const pdf = new jsPDF();

        // Get the dimensions of the canvas
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;


        for (let i = 0; i < cameraPositions.length; i++) {
            const pos = cameraPositions[i];
            camera.position.set(pos.x, pos.y, pos.z);
            camera.lookAt(scene.position);

            // Set the scale factor (e.g., 0.5 for half size, 1.0 for original size)
            const scaleFactor = 0.3;

            // Calculate the scaled dimensions
            const imageWidth = canvasWidth * scaleFactor;
            const imageHeight = canvasHeight * scaleFactor;

            // Center the image on the PDF page
            const xOffset = (210 - imageWidth) / 2;
            const yOffset = (297 - imageHeight) / 2;


            await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for camera to update
            const dataURL = canvas.toDataURL('image/png');
            if (i > 0) {
                pdf.addPage();
            }
            // Add the image to the PDF with the scaled dimensions
            pdf.addImage(dataURL, 'PNG', xOffset, yOffset, imageWidth, imageHeight);
        }

        // Save the PDF
        pdf.save('canvas.pdf');

        const pdfData = pdf.output('datauristring');
        // const origin = "https://dvantrix.wixstudio.io";
        const targetOrigin = "https://dvantrix.wixstudio.io/zenspace/configurator";

        window.parent.postMessage({ type: 'pdfData', pdf: pdfData }, targetOrigin);

    }
    return (
        <Html>
            {/* <Box>
                <Stack
                    direction={"row"}
                    spacing={2}
                    className="absolute flex top-[50px] left-[200px] lg:right-72 "
                >
                    <Tooltip title="Download as PDF">
                        <IconButton
                            onClick={downloadPDF} size="large"
                        >
                            <ScreenshotMonitorIcon
                            />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box> */}
        </Html>
    )
}


const CanvasLayout = () => {

    const canvasRef = useRef();




    return (
        <>
            <Canvas
                ref={canvasRef}
                // shadows
                // gl={{
                //     preserveDrawingBuffer: true,
                //     outputEncoding: 3000, // THREE.sRGBEncoding
                //     toneMappingExposure: 1.6,
                //     // toneMapping: THREE.ACESFilmicToneMapping,
                //     toneMapping: THREE.NeutralToneMapping,
                // }}
                gl={{ preserveDrawingBuffer: true }}
                performance={{ min: 0.25 }}
                camera={{ fov: 50 }

                    // camera={{ position: [0.5, 1, 3], fov: 45, near: 0.001, far: 1000 }

                } >
                <color attach="background" args={["#ffffff"]} />
                <Scene />
                <CaptureCanvas />
            </Canvas >
        </>
    )
}

export default CanvasLayout;
