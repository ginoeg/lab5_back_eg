import { TestRouter, UserRouter, MessageRouter } from "../components";
 
const listRoutes = [
 ["/test", TestRouter],
 ["/user", UserRouter],
 ["/message", MessageRouter],
];
 
export const routes = (app) => {
 listRoutes.forEach(([path, controller]) => {
   app.use(path, controller);
 });
};
