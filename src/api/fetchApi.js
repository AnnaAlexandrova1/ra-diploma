import link from "./link";

export default class fetchApi{

    getTopSales = async () => {
        let res = await fetch(`${link}api/top-sales`)
        
        if (!res.ok) {
            throw new Error (`Could not fetch ${link}api/top-sales, status: ${res.status}`)
        }

        return await res.json()
    }

    getCatalog = async () => {
        let res = await fetch(`${link}api/items`)

        if (!res.ok) {
            throw new Error (`Could not fetch ${link}api/categories, status: ${res.status}`)
        }

        return await res.json()
    }

}
