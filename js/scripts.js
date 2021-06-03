function toggleNavClass() {
    let scrollpos = window.scrollY;
    const navbar = document.getElementById('nav');
    const up_btn = document.getElementById('up-btn');
    const menu_brand = document.getElementById('menu-brand');
    const dummy = document.getElementById('dummy');
    const trigger = window.innerHeight - navbar.offsetHeight;

    const add_top_class = () => navbar.classList.add("nav-top");
    const remove_top_class = () => navbar.classList.remove("nav-top");
    const show_up_btn = () => up_btn.classList.remove("hidden");
    const hide_up_btn = () => up_btn.classList.add("hidden");
    const show_menu_brand = () => menu_brand.classList.remove("brand-hidden");
    const hide_menu_brand = () => menu_brand.classList.add("brand-hidden");
    const expand_dummy = () => dummy.classList.add("expanded-dummy");
    const hide_dummy = () => dummy.classList.remove("expanded-dummy");

    window.addEventListener('scroll', function() {
        scrollpos = window.scrollY;

        if (scrollpos >= trigger) {
            add_top_class();
            show_up_btn();
            show_menu_brand();
            expand_dummy();
        } else {
            remove_top_class();
            hide_up_btn();
            hide_menu_brand();
            hide_dummy();
        }
    });
}

window.addEventListener("load", () => {
    toggleNavClass();
});

window.addEventListener("resize", () => {
    toggleNavClass();
});