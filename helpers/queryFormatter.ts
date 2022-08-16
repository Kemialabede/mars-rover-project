export default function queryFormatter(url: string, queryObj: object) {
  console.log(queryObj, "--querry")
  return Object.entries(queryObj).reduce((urlString, [query, value], index) => {
    if(value) {
      let string = `${urlString}${query}=${value}`;
      if(Object.entries(queryObj).length === index + 1) return `${string}`
      return `${string}&`;
    };
    return urlString;
  }, `${url}`);
}

