class Api {
    static async fetchTodos(filterId) {
        try {
            const response = await fetch(
                filterId <= 50
                    ? 'https://jsonplaceholder.typicode.com/todos/'
                    : `https://jsonplaceholder.typicode.com/todos/?id_gte=${filterId}&id_lte=${filterId + 50}`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const limitedData = data.length > 7 ? data.slice(0, 7) : data;
            return limitedData;
        } catch (error) {
            throw new Error(error.message || 'Something went wrong');
        }
    }

}
export default Api;