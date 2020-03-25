// ouvindo o evento de click do button .fat
document
    .querySelector("button.fat")
    .addEventListener("click", function () {
        document
            .querySelector("#footer")
            .classList
            .toggle("hide")

    })