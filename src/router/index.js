import Chat from "../components/Chat"
import Login from "../components/Login/Login"


export const privateRoutes= [
   {
      path: '/',
      component: Chat,
      exact: true
   }
]

export const publicRoutes = [
   {
      path: '/login',
      component: Login,
      exact: true
   }
]