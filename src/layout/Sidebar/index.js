
import React, { useCallback } from 'react';
import { POD_TYPE, texturelist, initialOptions } from "../../components/utils";
import useStore from "../../components/store";
import { Button } from "@mui/material";

const Sidebar = () => {

    // const setColors = useStore((s) => s.setColors);
    // const colors = useStore((s) => s.colors);
    const texturesUrl = useStore((s) => s.texturesUrl);

    const type = useStore((s) => s.type);
    const setType = useStore((s) => s.setType);

    const setTexureUrl = useStore((s) => s.setTexureUrl);

    const furnitureOption = useStore((s) => s.furnitureOption);
    const setFurnitureOption = useStore((s) => s.setFurnitureOption);

    const visibleFurnts = useStore((s) => s.visibleFurnts);
    const setVisibleFurnts = useStore((s) => s.setVisibleFurnts);

    // const handleColors = useCallback((value, type) => {
    //     const current = { ...colors };
    //     if (type === "exterior") {
    //         current.exterior = value;
    //         setColors(current)
    //     } else if (type === "interior") {
    //         current.interior = value;
    //         setColors(current)
    //     } else {
    //         current.seating = value;
    //         setColors(current)
    //     }
    // }, [setColors, colors])

    const handleType = useCallback((type) => {
        setType(type);
        setFurnitureOption(0);
    }, [setType, setFurnitureOption])

    const handleTexture = useCallback((value, type) => {
        const current = { ...texturesUrl };

        switch (type) {
            case "exterior":
                current.exterior = value;
                setTexureUrl(current)
                break;
            case "interior":
                current.interior = value;
                setTexureUrl(current)
                break;
            case "carpet":
                current.carpet = value;
                setTexureUrl(current)
                break;
            case "seating":
                current.seating = value;
                setTexureUrl(current)
                break;
            case "table":
                current.table = value;
                setTexureUrl(current)
                break;
            default:
                break;
        }
    }, [setTexureUrl, texturesUrl])

    return (
        <div className="bg-white w-4/12 p-2">
            <div className="d-flex justify-content-between mt-2 px-2">
                <div className="text-4xl ml-5">3D  Configurator</div>
            </div>
            <div className="d-flex justify-content-between mt-2 px-2">
                <div className="text-2xl ml-5">Customize</div>
            </div>
            <hr className="mt-2" />
            <div className="rounded-3 p-2">

                <div className="flex gap-4 flex-wrap">
                    {
                        Object.keys(POD_TYPE).map((key, index) => (
                            <Button
                                key={index}
                                variant={type === POD_TYPE[key] ? "contained" : "outlined"}
                                value={POD_TYPE[key]}
                                onClick={(e) => handleType(POD_TYPE[key])}
                            >
                                {POD_TYPE[key]}
                            </Button>
                        ))
                    }

                </div>

                <div className=" mt-6 flex gap-5 ">
                    <div className='w-[120px] flex-none' > Furniture Options</div>
                    <div className="flex gap-5 flex-wrap flex-col" >
                        <div className="flex gap-5 flex-wrap flex-col">
                            {
                                type.includes("Aura") && initialOptions(type).map((option, index) => (
                                    <Button
                                        key={index}
                                        variant={furnitureOption === index ? "contained" : "outlined"}
                                        value={"Pixel"}
                                        onClick={() => setFurnitureOption(index)}
                                    >
                                        {option}
                                    </Button>
                                ))
                            }
                            {
                                !type.includes("Aura") && (
                                    <>
                                        <Button

                                            variant={visibleFurnts ? "contained" : "outlined"}
                                            value={"Pixel"}
                                            onClick={() => setVisibleFurnts(true)}
                                        >
                                            With Furniture
                                        </Button>
                                        <Button

                                            variant={!visibleFurnts ? "contained" : "outlined"}
                                            value={"Pixel"}
                                            onClick={() => setVisibleFurnts(false)}
                                        >
                                            Without Furniture
                                        </Button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>


                {/* <div>
                    <div className=" mt-6 flex gap-5 ">
                        <div className='w-[120px] flex-none' >Exterior Colors</div>
                        <div className="flex gap-5 flex-wrap flex-col" >
                            <div className="text-1xl">
                                {colors.exterior.name}
                            </div>
                            <div className="flex gap-5 flex-wrap">
                                {
                                    colorList.exterior.map((color, index) => (
                                        <div
                                            kye={index}
                                            style={{
                                                backgroundColor: color.value,
                                                border: colors.exterior.value === color.value ? "1px solid black" : "unset"
                                            }}
                                            className="rounded-full w-12 h-12"
                                            onClick={() => handleColors(color, "exterior")}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" mt-6 flex gap-5 ">
                        <div className='w-[120px] flex-none' >Interior  Colors</div>
                        <div className="flex gap-5 flex-wrap flex-col" >
                            <div className="text-1xl">
                                {colors.interior.name}
                            </div>
                            <div className="flex gap-5 flex-wrap">
                                {
                                    colorList.interior.map((color, index) => (
                                        <div
                                            kye={index}
                                            style={{
                                                backgroundColor: color.value,
                                                border: colors.interior.value === color.value ? "1px solid black" : "unset"
                                            }}
                                            className="rounded-full w-12 h-12"
                                            onClick={() => handleColors(color, "interior")}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" mt-6 flex gap-5 ">
                        <div className='w-[120px] flex-none' >Seating  Colors</div>
                        <div className="flex gap-5 flex-wrap flex-col" >
                            <div className="text-1xl">
                                {colors.seating.name}
                            </div>
                            <div className="flex gap-5 flex-wrap">
                                {
                                    colorList.seating.map((color, index) => (
                                        <div
                                            kye={index}
                                            style={{
                                                backgroundColor: color.value,
                                                border: colors.seating.value === color.value ? "1px solid black" : "unset"
                                            }}
                                            className="rounded-full w-12 h-12"
                                            onClick={() => handleColors(color, "seating")}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> */}

                <div>
                    <div className=" mt-6 flex gap-5 ">
                        <div className='w-[120px] flex-none' >Exterior Colors</div>
                        <div className="flex gap-5 flex-wrap flex-col" >
                            <div className="text-1xl">
                                {texturesUrl.exterior.name}
                            </div>
                            <div className="flex gap-5 flex-wrap">
                                {
                                    texturelist.exterior.map((texture, index) => (
                                        <img
                                            kye={index}
                                            style={{
                                                border: texturesUrl.exterior.color === texture.color ? "2px solid black" : "unset"
                                            }}
                                            className="rounded-full w-12 h-12"
                                            src={texture.color}
                                            alt=""
                                            onClick={() => handleTexture(texture, "exterior")}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" mt-6 flex gap-5 ">
                        <div className='w-[120px] flex-none' >Interior  Colors</div>
                        <div className="flex gap-5 flex-wrap flex-col" >
                            <div className="text-1xl">
                                {texturesUrl.interior.name}
                            </div>
                            <div className="flex gap-5 flex-wrap">
                                {
                                    texturelist.interior.map((texture, index) => (
                                        <img
                                            kye={index}
                                            style={{
                                                border: texturesUrl.interior.color === texture.color ? "2px solid black" : "unset"
                                            }}
                                            className="rounded-full w-12 h-12"
                                            src={texture.color}
                                            alt=""
                                            onClick={() => handleTexture(texture, "interior")}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {
                        !type.includes("Aura") && (

                            <>
                                <div className=" mt-6 flex gap-5 ">
                                    <div className='w-[120px] flex-none' >Seating  Colors</div>
                                    <div className="flex gap-5 flex-wrap flex-col" >
                                        <div className="text-1xl">
                                            {texturesUrl.seating.name}
                                        </div>
                                        <div className="flex gap-5 flex-wrap">
                                            {
                                                texturelist.seating.map((texture, index) => (
                                                    <img
                                                        kye={index}
                                                        style={{
                                                            border: texturesUrl.seating.color === texture.color ? "2px solid black" : "unset"
                                                        }}
                                                        className="rounded-full w-12 h-12"
                                                        src={texture.color}
                                                        alt=""
                                                        onClick={() => handleTexture(texture, "seating")}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className=" mt-6 flex gap-5 ">
                                    <div className='w-[120px] flex-none' >Table  Colors</div>
                                    <div className="flex gap-5 flex-wrap flex-col" >
                                        <div className="text-1xl">
                                            {texturesUrl.table.name}
                                        </div>
                                        <div className="flex gap-5 flex-wrap">
                                            {
                                                texturelist.table.map((texture, index) => (
                                                    <img
                                                        kye={index}
                                                        style={{
                                                            border: texturesUrl.table.color === texture.color ? "2px solid black" : "unset"
                                                        }}
                                                        className="rounded-full w-12 h-12"
                                                        src={texture.color}
                                                        alt=""
                                                        onClick={() => handleTexture(texture, "table")}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    <div className=" mt-6 flex gap-5 ">
                        <div className='w-[120px] flex-none' >Carpet  Colors</div>
                        <div className="flex gap-5 flex-wrap flex-col" >
                            <div className="text-1xl">
                                {texturesUrl.carpet.name}
                            </div>
                            <div className="flex gap-5 flex-wrap">
                                {
                                    texturelist.carpet.map((texture, index) => (
                                        <img
                                            kye={index}
                                            style={{
                                                border: texturesUrl.carpet.color === texture.color ? "2px solid black" : "unset"
                                            }}
                                            className="rounded-full w-12 h-12"
                                            src={texture.color}
                                            alt=""
                                            onClick={() => handleTexture(texture, "carpet")}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar;