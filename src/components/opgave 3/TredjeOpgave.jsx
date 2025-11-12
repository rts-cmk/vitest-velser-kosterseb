export async function fetchData(type) {
    // Simulerer en asynkron datahentning med forskellige udfald baseret på inputtypen
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
