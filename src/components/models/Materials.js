import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import useStore from "../../components/store";

export const useMetalMaterial = () => {
    const roughnessMap = useLoader(THREE.TextureLoader, '/textures/comon/metal-roughness.jpg');
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.repeat.set(8, 8);

    const normalMap = useLoader(THREE.TextureLoader, '/textures/comon/metal-normal.jpg');
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.repeat.set(8, 8);

    const material = new THREE.MeshStandardMaterial({
        color: '#5d5f60',
        roughnessMap: roughnessMap,
        normalMap: normalMap,
        metalness: 1,
    });

    return material;
};

export const useSFabricMaterial = (repeatX = 1, repeatY = 1) => {
    const texturesUrl = useStore((s) => s.texturesUrl);
    const map = texturesUrl.seating.color;

    const colorMap = useLoader(THREE.TextureLoader, map);
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(repeatX, repeatY);

    const roughnessMap = useLoader(THREE.TextureLoader, '/textures/Sofa/Fabric-Roughness.jpg');
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.repeat.set(repeatX, repeatY);

    const normalMap = useLoader(THREE.TextureLoader, '/textures/Sofa/Fabric-Normal.jpg');
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.repeat.set(repeatX, repeatY);

    // const aoMap = useLoader(THREE.TextureLoader, '/textures/Sofa/Sopha-AO.jpg');
    // aoMap.flipY = false;

    const material = new THREE.MeshPhysicalMaterial({
        color: '#808080',
        map: colorMap,
        roughnessMap: roughnessMap,
        normalMap: normalMap,
        // aoMap: aoMap,
        metalness: 0,
        sheen: .15,
        sheenColor: 'white',
        sheenRoughness: .5,
    });

    return material;
};

export const useFeltMaterial = (aoTexture, repeatX = 1, repeatY = 1) => {

    const texturesUrl = useStore((s) => s.texturesUrl);
    const map = texturesUrl.interior.color;

    const colorMap = useLoader(THREE.TextureLoader, map);
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(repeatX, repeatY);
    colorMap.needsUpdate = true;
    const roughnessMap = useLoader(THREE.TextureLoader, '/textures/Felt/Felt-Roughness.jpg');
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.repeat.set(repeatX, repeatY);
    const normalMap = useLoader(THREE.TextureLoader, '/textures/Felt/Felt-Normal.jpg');
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.repeat.set(repeatX, repeatY);
    const aoMap = useLoader(THREE.TextureLoader, '/textures/ElemetAoTexturres/' + aoTexture + '.jpg');
    aoMap.flipY = false;

    const material = new THREE.MeshPhysicalMaterial({
        color: '#808080',
        map: colorMap,
        roughnessMap: roughnessMap,
        normalMap: normalMap,
        // aoMap: aoMap,
        aoMapIntensity: 2,
        metalness: 0,
        sheen: .05,
        sheenColor: 'white',
        sheenRoughness: .1,
    });
    return material;
}

export const useAuraInteriorMaterial = (aoTexture, repeatX = 1, repeatY = 1) => {

    const texturesUrl = useStore((s) => s.texturesUrl);
    const map = texturesUrl.interior.color;

    const colorMap = useLoader(THREE.TextureLoader, map);
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(repeatX, repeatY);
    colorMap.needsUpdate = true;
    const roughnessMap = useLoader(THREE.TextureLoader, '/textures/Felt/Felt-Roughness.jpg');
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.repeat.set(repeatX, repeatY);
    const normalMap = useLoader(THREE.TextureLoader, '/textures/Felt/Felt-Normal.jpg');
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.repeat.set(repeatX, repeatY);
    const aoMap = useLoader(THREE.TextureLoader, '/textures/AuraAoTexturres/interior/' + aoTexture + '.png');
    aoMap.flipY = false;

    const material = new THREE.MeshPhysicalMaterial({
        color: '#808080',
        map: colorMap,
        roughnessMap: roughnessMap,
        normalMap: normalMap,
        // aoMap: aoMap,
        aoMapIntensity: 2,
        metalness: 0,
        sheen: .05,
        sheenColor: 'white',
        sheenRoughness: .1,
    });
    return material;
}

export const useCarpettMaterial = (aoTexture, repeatX = 1, repeatY = 1) => {
    const texturesUrl = useStore((s) => s.texturesUrl);
    const map = texturesUrl.carpet.color;

    const fileType = aoTexture.includes("Aura") ? ".png" : ".jpg"
    const filePath = aoTexture.includes("Aura") ? '/textures/AuraAoTexturres/carpet/' : '/textures/ElemetAoTexturres/'

    const colorMap = useLoader(THREE.TextureLoader, map);
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(repeatX, repeatY);
    const roughnessMap = useLoader(THREE.TextureLoader, '/textures/Carpet/Carpet-Roughness.jpg');
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.repeat.set(repeatX, repeatY);
    const normalMap = useLoader(THREE.TextureLoader, '/textures/Carpet/Carpet-Normal.jpg');
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.repeat.set(repeatX, repeatY);
    const aoMap = useLoader(THREE.TextureLoader, filePath + aoTexture + fileType);
    aoMap.flipY = false;

    const material = new THREE.MeshPhysicalMaterial({
        color: '#808080',
        map: colorMap,
        roughnessMap: roughnessMap,
        normalMap: normalMap,
        aoMap: aoMap,
        aoMapIntensity: 2,
        metalness: 0,
        sheen: .15,
        sheenColor: 'white',
        sheenRoughness: .5,
    });

    return material;
}


export const useTableMaterial = (repeatX = 1, repeatY = 1) => {

    const texturesUrl = useStore((s) => s.texturesUrl);
    const map = texturesUrl.table.color;

    const colorMap = useLoader(THREE.TextureLoader, map);
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(repeatX, repeatY);

    const material = new THREE.MeshPhysicalMaterial({
        color: '#808080',
        map: colorMap,

        aoMapIntensity: 2,
        metalness: 0,

    });

    return material;
}

export const useExteriorMaterial = (aoTexture, repeatX = 1, repeatY = 1) => {
    const texturesUrl = useStore((s) => s.texturesUrl);
    const map = texturesUrl.exterior.color;

    const colorMap = useLoader(THREE.TextureLoader, map);
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(repeatX, repeatY);
    colorMap.needsUpdate = true;
    // const roughnessMap = useLoader(THREE.TextureLoader, '/textures/Felt/Felt-Roughness.jpg');
    // roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
    // roughnessMap.repeat.set(repeatX, repeatY);
    // const normalMap = useLoader(THREE.TextureLoader, '/textures/Felt/Felt-Normal.jpg');
    // normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    // normalMap.repeat.set(repeatX, repeatY);
    const aoMap = useLoader(THREE.TextureLoader, '/textures/AuraAoTexturres/exteriro/' + aoTexture + '.png');
    aoMap.flipY = false;

    const material = new THREE.MeshPhysicalMaterial({
        color: '#808080',
        map: colorMap,
        // roughnessMap: roughnessMap,
        // normalMap: normalMap,
        // aoMap: aoMap,
        aoMapIntensity: 2,
        metalness: 0,
        sheen: .05,
        sheenColor: 'white',
        sheenRoughness: .1,
    });
    return material;
}