import { useSelector } from "react-redux";
import link from "./link";

export default class fetchApi {
   // извлечем параметры поиска для запроса из State
  getTopSales = async () => {
    let res = await fetch(`${link.api}/top-sales`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${link.api}/top-sales, status: ${res.status}`
      );
    }
    return await res.json();
  };
    
  getFirstItems = async () => {
    let res = await fetch(`${link.api}/items`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${link.api}/items, status: ${res.status}`
      );
    }

    return await res.json();
  };
  
 getItems = async (request) => {
    
    const url = new URL(`${link.api}/items`)
    if (request.searchText.length > 0) {
       url.searchParams.set('q', request.searchText)
    }
    if (request.categoryID) {
      url.searchParams.set('categoryId', request.categoryID)
    }
    else {
      url.searchParams.set('offset', request.offset)
    }

    let res = await fetch(url.href);  

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${url.href}, status: ${res.status}`
      );
    }
    //console.log(res)

    return await res.json();
};


  getCategories = async () => {
    let res = await fetch(`${link.api}/categories`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${link.api}/categories, status: ${res.status}`
      );
    }

    return await res.json();
  };

  getCatalog = async (set) => {
    let res = await fetch(`${link.api}/items?offset=${set}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${link.api}/items?offset=${set}, status: ${res.status}`
      );
    }

    return await res.json();
  };

  search = async (text) => {
    let res = await fetch(`${link.api}/items?q=${text}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${link.api}/items?q=${text}, status: ${res.status}`
      );
    }
    return await res.json();
  };

  getItemInfo = async (id) => {
    let res = await fetch(`${link.api}/items/${id}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${link.api}/items/:${id}>, status: ${res.status}`
      );
    }
    return await res.json();
  };

  postOrder = async (order) => {
    try {
      let res = await fetch(`${link.api}/order`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      return res.ok;
    } catch (e) {
      return e;
    }
    //   if (!res.ok) {
    //   throw new Error(
    //     `Could not fetch ${link}api/order, status: ${res.status}`
    //   );
    //}
  };
}
