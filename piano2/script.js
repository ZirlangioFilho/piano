const $allkeys = document.querySelectorAll(".key")
$allkeys.forEach(key =>
    key.addEventListener("click", (event) => {
        console.log(event.target)
    })
)
