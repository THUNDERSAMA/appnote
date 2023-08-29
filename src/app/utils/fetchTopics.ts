export async function fetchTopics() {
    //try {
      const res = await fetch('http://localhost:3000/api/topics', {
        cache: 'no-store',
      });
     // return res.json();
    // } catch (error) {
    //   console.error('Error fetching topics', error);
    //  // throw error; // Rethrow the error for handling in the component
    // }
  return await res.json();
  }