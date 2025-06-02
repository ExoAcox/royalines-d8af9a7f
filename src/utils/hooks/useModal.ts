import { create } from "zustand";

interface ModalStore {
    visible: boolean;
    data?: unknown;
}

const modalStoreCache = new Map();
export const useModalStore = (id: string) => {
    let store = modalStoreCache.get(id);
    if (!store) {
        store = create<ModalStore>(() => ({
            visible: false,
            data: undefined,
        }));
        modalStoreCache.set(id, store);
    }
    return store;
};

//* Custom hooks to trigger modal
//* Useful when you save modal state on parent and you have many setModal function in different child component
//* Usage : {modal, setModal} = useModal(id)
//* 'id' is identifier.

function useModal<Data>(id: string) {
    const useStore = useModalStore(id);
    const store = useStore((state: ModalStore) => state);
    const modal = store.visible || false;
    const data: Data | null = store.data;

    const setModal = (value: boolean) => {
        useStore.setState({
            data,
            visible: value,
        });

        return new Promise<void>((resolve) => resolve());
        //* use promise return, in case you need for wait until modal truly closed
    };
    const setData = (value: Data) => {
        useStore.setState({
            visible: !store.data?.visible,
            data: value,
        });
        return new Promise<void>((resolve) => resolve());
    };

    const reset = () => {
        useStore.setState({
            visible: false,
            data: undefined,
        });
        return new Promise<void>((resolve) => resolve());
    };

    //* modal = boolean to detect if modal showing or not (true / false)
    //* setModal = function to set modal | setModal(true / false)
    //* data = you can save data on modal, using this to read data
    //* setData = function to set modal data | setData({})

    //! note : if you use setData, it will automatically change modal to opposite (!modal)
    return { modal, setModal, data, setData, reset };
}

export const useModalOutside = (id: string, state: ModalStore) => {
    const useStore = useModalStore(id);
    return useStore.setState(state);
};

export default useModal;
