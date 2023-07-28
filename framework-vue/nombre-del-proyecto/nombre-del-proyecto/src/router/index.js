import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import VueJwtDecode from "vue-jwt-decode";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: "/validador",
      name: "validador",
      component: () => import("./views/validador"),
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login"),
      beforeEnter: (to, from, next) => {
        let x =
          router.app.$store == undefined
            ? false
            : router.app.$store.state.isLoggedIn
            ? true
            : false;

        if (x) {
          next("/validador");
        } else {
          next();
        }
      }
    }
  ]
});

// Verifica si el usuario está autenticado antes de cada navegación
router.beforeEach((to, from, next) => {
  const loggeduser = JSON.parse(localStorage.getItem("user"));
  if (
    to.meta.requiresAuth &&
    (!loggeduser || tokenExpirado(loggeduser.token))
  ) {
    next("/login"); // Redirige a la página de inicio de sesión si no está autenticado
  } else {
    next(); // Permite la navegación
  }

  next();
});

function tokenExpirado(token) {
  console.log(token);
  const { exp } = VueJwtDecode.decode(token);
  const ahora = Date.now() / 1000; // convierte a segundos
  return ahora > exp;
}

export default router;
