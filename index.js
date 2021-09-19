
const items = document.getElementById("items");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData();
})

const fetchData = async() =>{
    try{
        const res = await fetch(`https://picsum.photos/v2/list`);
        const data = await res.json()
        
        pintar(data);
    }catch(error){
        console.log(error);
    }
}

const pintar = data =>{
    data.forEach(producto => {
        template.querySelector("img").setAttribute("src", producto.download_url);

        template.querySelector("a").setAttribute("href", producto.download_url)

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
} 