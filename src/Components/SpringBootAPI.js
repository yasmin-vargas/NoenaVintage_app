
const SpringBootAPI = 'http://127.0.0.1:8080';

// Example: Fetch data from the API
const fetchData = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8080/api/shopping-bag`);
        const data = await response.json();
        console.log('Data from SpringBootAPI:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};