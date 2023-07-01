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
      meta: { requiresAuth: false }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login"),
      meta: {
        beforeResolve(routeTo, routeFrom, next) {
          if (router.app.$store.state.isLoggedIn) {
            next({ name: "HelloWorld" });
          } else {
            next();
          }
        }
      }
    }
  ]
});

// Verifica si el usuario está autenticado antes de cada navegación
router.beforeEach((to, from, next) => {
  const loggeduser = localStorage.getItem("user");
  if (to.meta.requiresAuth && !loggeduser) {
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
