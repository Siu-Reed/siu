export async function loadList():Promise<object> {
    let response = await fetch('./contents.json', {
        method: 'GET'
    });
    const data = await response.json();
    return data;
}