import {create} from "zustand";
import {locations} from "#constants/index.js";
import {immer} from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work

const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,


    setActiveLocation: (location) =>
        set((state) => {state.activeLocation = location;
        }),

        resetActiveLocation: (location) =>
            set((state) => {
                state.activeLocation = location;
            }),
    })),
);

export default useLocationStore;