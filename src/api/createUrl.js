export const createUrl = (catName, offset, catId, search='') => {
    let url = new URLSearchParams();
    if (catName === "all" && offset === 0 && search === '') {
        return "";
    } if (offset !== 0) {
        url.append('offset', offset)
    } if (catName !== "all") {
        url.append("categoryId", catId);
    } if (search !== '') {
        url.append("q", search);
    } console.log(url.toString())
    return `?${url}`
    // // if (catName === "all") {
    // //   if (offset === 0) {
    // //      return "";
    // //   }
    //   else {
    //     url.append('offset', offset)
    //     return `?${url}`
    //   }    
    // } else {
    //   if (offset === 0) {
    //     url.append("categoryId", catId);
    //     return `?${url}`;
    //   } else {
    //     url.append("categoryId", catId);
    //     url.append('offset', offset)
    //     return `?${url}`
    //   }
    // }
  };