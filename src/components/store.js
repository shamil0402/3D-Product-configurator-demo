import { create } from "zustand";
import { POD_TYPE } from "./utils";

const useStore = create((set) => ({

  type: POD_TYPE.F,
  setType: (v) => {
    set({ type: v });
  },

  colors: {
    exterior: {
      name: "Signal White",
      value: "#ecece7"
    },
    interior: {
      name: "Signal White",
      value: "#ecece7"
    },
    seating: {
      name: "Light grey",
      value: "#c5c7c4"
    },
  },

  setColors: (v) => {
    set({ colors: v });
  },

  texturesUrl: {
    exterior: {
      name: "",
      color: "textures/Exterior/ST-02.png",
    },
    interior: {
      name: "",
      color: "textures/INTERIOR/DK-43.png",
    },
    seating: {
      name: "",
      color: "textures/Sofa/SF-1300.png",
    },
    carpet: {
      name: "",
      color: "textures/Carpet/PC2002.png",
    },
    table: {
      name: "",
      color: "textures/Carpet/PC2002.png",
    },
  },

  setTexureUrl: (v) => {
    set({ texturesUrl: v });
  },

  visibleFurnts: true,
  setVisibleFurnts: (v) => {
    set({ visibleFurnts: v });
  },

  infoImgMap: undefined,
  setInfoMap: (v) => {
    set({ infoImgMap: v });
  },

  techkit: "",
  setTechKit: (v) => {
    set({ techkit: v });
  },

  furnitureOption: 0,
  setFurnitureOption: (v) => {
    set({ furnitureOption: v });
  },

}));

export default useStore;
