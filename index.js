async function load(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')

    console.log(data.data)
}