const apiUrl = "https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda";
export const executeFetch = async () => {
  return await fetch(apiUrl)
    .then((res) => res.json())
    .catch((err) => err);
};
