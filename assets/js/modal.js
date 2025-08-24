    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const modal = document.getElementById("pizzaModal");
    const modalImg = document.getElementById("modalImg");
    const modalName = document.getElementById("modalName");
    const modalDesc = document.getElementById("modalDesc");
    const modalPrice = document.getElementById("modalPrice");
    const closeBtn = document.querySelector(".modal__close");

    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = button.dataset.img;
            modalName.textContent = button.dataset.name;
            modalDesc.textContent = button.dataset.desc;
            modalPrice.textContent = button.dataset.price;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });