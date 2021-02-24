
const usersUL = document.getElementById("usersUL")

let userItems = users.map(function (user) {
    return  `<li class="user-item">
                <b>${user.name}</b>
                <i>${user.email}</i>
                <h3>Address</h3>
                <p>${user.address.street}</p>
                <p>${user.address.city}</p>
                <h6>Geo</h6>
                <p>${user.address.geo.lat}</p>
                <p>${user.address.geo.lng}</p>
            </li>
`
}) // end of map 

console.log(userItems)
usersUL.innerHTML = userItems.join("")

/*

for(let index = 0; index < users.length; index++) {

    let user = users[index]

    const userItem = `
                    <li class="user-item">
                        <b>${user.name}</b>
                        <i>${user.email}</i>
                        <h3>Address</h3>
                         <p>${user.address.street}</p>
                         <p>${user.address.city}</p>
                         <h6>Geo</h6>
                         <p>${user.address.geo.lat}</p>
                         <p>${user.address.geo.lng}</p>

                    </li>
    `

    usersUL.insertAdjacentHTML('beforeend', userItem)

} */