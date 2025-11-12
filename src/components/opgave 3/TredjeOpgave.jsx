export async function fetchData(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === 'success') {
                resolve({ message: 'Data fetched successfully' });
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 2000);
    });
}
