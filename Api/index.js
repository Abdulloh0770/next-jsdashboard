export const getPosts = async () => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
