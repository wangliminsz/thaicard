import router from "./router";

router.beforeEach((to, from, next) => {

    if (to.path === "/" || to.path === "") {
        next();
    }

    // if (to.path === "/daisy") {
    //     next();
    // }

    // if (to.path === "/tangmo") {
    //     next();
    // }

});