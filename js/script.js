//? our-work section filter 
let categoriesLabels = document.querySelectorAll(".categories li")
let products = document.querySelectorAll(".our-work .box")

categoriesLabels.forEach((label) => {
    label.addEventListener("click", (e) => {
        //remove active class from all
        categoriesLabels.forEach((element) => {
            element.classList.remove("active")
        })
        //add active class to the clicked one
        label.classList.add("active")

        products.forEach((product) => {
            //add all products to hide class
            product.classList.add("hide")
            //show all products on all 
            if (label.dataset.category === "All") {
                product.classList.remove("hide")
            }
            //show the category based on label
            else if (product.dataset.work === label.dataset.category) {
                product.classList.remove("hide")
            }
        })
    })
})