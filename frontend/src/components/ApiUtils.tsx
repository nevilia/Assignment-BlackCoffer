export async function fetchData() {
    try {
      // const res = await fetch('http://localhost:3000/api/items');
      const res = await fetch('https://assignment-blackcoffer-backend.onrender.com/api/items');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  