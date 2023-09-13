// router index.js
import MinersView from "../pages/MinersView";
import AsteroidsView from "../pages/AsteroidsView";
import PlanetsView from "../pages/PlanetsView";

const routers = [
  {
    path: "/",
    name: "MinersView",
    components: MinersView, // 引入pages文件下的页面
  },
  {
    path: "/asteroids",
    name: "AsteroidsView",
    components: AsteroidsView,
  },
  {
    path: "/planets",
    name: "PlanetsView",
    components: PlanetsView,
  },
];

export default routers; // 将数组导出
