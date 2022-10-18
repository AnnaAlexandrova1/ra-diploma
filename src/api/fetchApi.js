import link from "./link";

export default class fetchApi{

    getTopSales = async (url) => {
        let res = await fetch(`${link}api/top-sales`)
        
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

}
