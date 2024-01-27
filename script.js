const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })

}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');

    })

}





document.addEventListener("DOMContentLoaded", function () {
    var loginModal = document.getElementById("loginModal");
    var closeModal = document.getElementById("closeModal");

    document.querySelector("a[href='#']").addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});

