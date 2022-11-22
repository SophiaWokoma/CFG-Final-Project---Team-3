export const getListFromApi = () => {
  return fetch("http://localhost:1337/api/todos").then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("failed to load data");
  });
};
