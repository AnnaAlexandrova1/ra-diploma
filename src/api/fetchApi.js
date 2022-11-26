import link from "./link";

export default class fetchApi {
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
    if (request.search) {
       url.searchParams.set('q', request.search)
    }
    if (request.categoryID) {
      url.searchParams.set('categoryId', request.categoryID)
    }
    if (request.offset) {
      url.searchParams.set('offset', request.offset)
    }
    console.log(url.href)
    let res = await fetch(url.href);  

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${url.href}, status: ${res.status}`
      );
    }
    console.log(res)

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
