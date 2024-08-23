

import { useMemo } from "react";
import useStore from "./store";

import { getMiddlePlates, getBottomHeight } from "./utils";
import { MiddlePlate, Door, BoxSpace } from "./elements/Plate";
import Drawer from "./elements/Drawer"

const MiddleSidePlates = () => {

    const cabinetStyle = useStore((s) => s.cabinetStyle);

    const totalWidth = useStore((s) => s.totalWidth);
    const totalHeight = useStore((s) => s.totalHeight);
    const totalDepth = useStore((s) => s.totalDepth);
    const legs = useStore((s) => s.legs);
    const doors = useStore((s) => s.doors);
    const drawers = useStore((s) => s.drawers);

    const { middleSides, doorPlates, boxSpaces, drawerSpaces } = useMemo(() => {
        const legheight = getBottomHeight(legs);
        return getMiddlePlates(totalHeight, totalWidth, totalDepth, legheight, cabinetStyle);
    }, [totalHeight, totalWidth, totalDepth, legs, cabinetStyle])

    return (
        <group>
            {
                middleSides.map((e, index) => (
                    <MiddlePlate
                        key={index}
                        row={e.row}
                        col={e.col}
                        position={e.position}
                        scale={e.scale}
                    />
                ))
            }
            {
                boxSpaces.map((e, index) => (
                    <BoxSpace
                        key={index}
                        row={e.row}
                        position={e.position}
                        scale={e.scale}
                    />
                ))
            }
            {
                doors && doorPlates.map((e, index) => (
                    <Door
                        key={index}
                        row={e.row}
                        position={e.position}
                        scale={e.scale}
                    />
                ))
            }
            {
                drawers && drawerSpaces.map((e, index) => (
                    <Drawer
                        key={index}
                        row={e.row}
                        position={e.position}
                        scale={e.scale}
                    />
                ))
            }
        </group>
    )
}

export default MiddleSidePlates;