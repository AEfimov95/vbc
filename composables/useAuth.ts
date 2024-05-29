export const useAuth = async (): Promise<void> => {
  const { data, error } = await useFetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (error.value) {
    console.error("An error occurred:", error.value);
  } else {
    console.log(data.value);
  }
};
