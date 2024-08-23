/* eslint-disable react/no-unknown-property */

export const Lights = () => {
    return (
        <group>
            <ambientLight intensity={3} />
            <spotLight
                position={[0, 10, -10]}
                castShadow={true}
                intensity={1}
                penumbra={0.5}
            />
            <spotLight
                position={[0, 1.7, 0]}
                castShadow={true}
                intensity={4}
                penumbra={0.5}
            />
            <directionalLight
                position={[-5, 5, 0]}
                castShadow
                intensity={1.2}
                // shadow-mapSize={2048}
                shadow-bias={-0.001}
            />
            <directionalLight
                position={[-2, 2, 3]}
                castShadow
                intensity={1.2}
                // shadow-mapSize={2048}
                shadow-bias={-0.001}
            />
            <directionalLight
                position={[2, 2, 3]}
                castShadow
                intensity={1.2}
                // shadow-mapSize={2048}
                shadow-bias={-0.001}
            />
            <directionalLight
                position={[2, 5, 0]}
                castShadow
                intensity={1.2}
                // shadow-mapSize={2048}
                shadow-bias={-0.001}
            />
            <pointLight
                position={[0, 1.5, 0]}
                intensity={2}
            // castShadow
            />
            <pointLight
                position={[0, 0.5, 0]}
                intensity={1}
            />
        </group>
    );
};



