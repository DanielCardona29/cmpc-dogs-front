import { json } from "stream/consumers";
import { petsInter } from "../context/pets.context";


interface optionsInter {
    method?: string,
    body?: any,
    headers?: any
}

const defaultOptions: optionsInter = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}


class Service {
    constructor(private host: string) { }

    async getService(url: string, options: optionsInter = defaultOptions) {

        try {
            const resolve = await fetch(this.host + url, options)
                .then((res) => {
                    if (this.solveStatus(res.status)) return res.json();
                    return {
                        error: 'error controler'
                    }
                })
                .then(res => res)

            return resolve;
        } catch (error) {
            return { error }
        }
    }

    solveStatus(status: number) {
        if (status >= 200 && status <= 300) return true
        return false;
    }

    //Get all pets
    async getPets() {
        return await this.getService('/pets')
    }

    //Get all pets
    async getFiltredPets(breed: string[], subbreed: string[]) {
        const body = {
            "breeds": breed,
            "subbreeds": subbreed
        }

        return await this.getService('/pets/filters', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }


    //Create pet
    async createPet(body: petsInter) {
        return await this.getService('/pets', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    //Create pet
    async deletePet(id: string) {
        return await this.getService('/pets/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    //Get all breeds
    async getBreeds() {
        return await this.getService('/breeds')
    }

    //Get one breeds
    async getUniqueBreed(id: string) {
        return await this.getService('/breeds/' + id)
    }

    //Create pet
    async createBreed(body: petsInter) {
        let newBody = JSON.stringify(body)
        return await this.getService('/breeds', { method: "POST", body: newBody })
    }

    //Get all breeds
    async getSubBreeds() {
        return await this.getService('/subbreeds')
    }

    //Get one breeds
    async getUniqueSubBreed(id: string) {
        return await this.getService('/subbreeds/' + id)
    }

    async createSubBreed(body: petsInter) {
        let newBody = JSON.stringify(body)
        return await this.getService('/subbreeds', { method: "POST", body: newBody })
    }
}

export default Service;