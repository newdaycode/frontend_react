
import Login from "./views/login";
import Register from "./views/register";
import Inicio from './views/Index'
import Clientes from './views/Clientes'
import Productos from './views/Productos'
import Provedores from './views/Provedores'
import User from './views/User'

var routes = [

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Registro",
    icon: "ni ni-tv-2 text-primary",
    component: Register,
    layout: "/auth",

  },
  {
    path: "/inicio",
    name: "Inicio",
    icon: "nav-icon fas fa-home",
    component: Inicio,
    layout: "/admin",

  },
  {
    path: "/clientes",
    name: "Clientes",
    icon: "nav-icon fas fa-users",
    component: Clientes,
    layout: "/admin",

  },
  {
    path: "/productos",
    name: "Productos",
    icon: "nav-icon fas fa-store-alt",
    component: Productos,
    layout: "/admin",

  },
  {
    path: "/provedores",
    name: "Provedores",
    icon: "nav-icon fas fa-archive",
    component: Provedores,
    layout: "/admin",

  },

  {
    path: "/usuarios",
    name: "Usuarios",
    icon: "nav-icon fas fa-user",
    component: User,
    layout: "/admin",

  }

]

export default routes;
