const navElements = [
    {
        text: "Home" , href: "#home"
    },
    {
        text: "TV Shows" , href: "#tvhows"
    },{
        text: "Movies" , href: "#movies"
    },{
        text: "Recently Added" , href: "#recentlyadded"
    },{
        text: "My List" , href: "#mylist"
    }
]

const listaMenù = document.getElementsByClassName("listaMenù")


const createNavbarLi = (navElement)=>{
    const li = document.createElement("li");
    const a = document.createElement("a")
    li.setAttribute("class","h3 nav-link text-white")
    
    a.href=navElement.href;
    a.innerText = navElement.text
    li.append(a)
    listaMenù.append(li)
}


navElements.forEach(item => {
    createNavbarLi(item);
})