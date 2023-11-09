export const drawContent = () => {


    const url = new URL(window.location.href)

    const box = document.querySelector(".socket")

    box.innerHTML = `<div>
        <h2>ID комнаты: ${url.searchParams.get("room")}</h2>
        <h2>ID пользователя: ${url.searchParams.get("user")}</h2>
    </div>`
}






