// router index.js
import MinersView from "../pages/MinersView";

const routers = [
  {
    path: "/",
    name: "MinersView",
    components: MinersView, // 引入pages文件下的页面
  },
  {
    path: "/asteroids",
    name: "AsteroidsView",
    components: () => import("../pages/AsteroidsView"),
  },
  {
    path: "/planets",
    name: "PlanetsView",
    components: () => import("../pages/PlanetsView"),
  },
];

export default routers; // 将数组导出
