import React, { useState } from 'react';
import Service from '../utils/services';
import { URL_HOST } from '../utils/constans';
import Swal from 'sweetalert2';

export interface petsInter {
    id?: string
    name?: string
    age?: string
    color?: string
    characteristics?: string
    img?: string
    breedId?: string
    subBreedID?: string
};

interface PetContextInter {
    petsList?: petsInter[],
    isFiltred?: Boolean,
    setIsFiltred?: any,
    setPetsList?: any,
    deletePet?: (id: string) => void,
    handleSuccess?: () => void,
    getPets?: () => void,
    getSimilarPets?: (breed: string, subbreed: string) => void

}
export const PetContext = React.createContext<PetContextInter>({});

const PetContextProvider = ({ children }: any) => {
    const [petsList, setPetsList] = useState<petsInter[]>();
    const [isFiltred, setIsFiltred] = useState<Boolean>(false);

    const services = new Service(URL_HOST);

    const handleSuccess = (text?: string) => {
        getPets();
        Swal.fire(
            'Bien hecho',
            text ? text : 'Mascota creada correctamente',
            'success'
        )
    }


    const getPets = () => {
        services.getPets().then(res => setPetsList(res));
        setIsFiltred(false)
    };
    
    const deletePet = async (id: string) => {
        if (await services.deletePet(id)) handleSuccess('Mascota eliminada correctamente')
    }
    const getSimilarPets = async (breed: string, subbreed: string) => {
        const resolve = await services.getFiltredPets([breed], [subbreed]);
        if (Array.isArray(resolve)) {
            setPetsList(resolve)
            setIsFiltred(true)
        }
    }


    return (
        <PetContext.Provider value={{ isFiltred, setIsFiltred, petsList, setPetsList, getPets, handleSuccess, deletePet, getSimilarPets }}>
            {children}
        </PetContext.Provider>
    )
}

export default PetContextProvider;