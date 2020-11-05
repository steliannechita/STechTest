const apiUrl = "https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda";

export const executeFetch = async (resolve, reject) => {
  return await fetch(apiUrl)
    .then(async (res) => await res.json())
    .then(resolve)
    .catch(reject);
};
