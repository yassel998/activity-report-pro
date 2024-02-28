import { chartBoxCollab, chartBoxProject } from "../../../data";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topbox/TopBox";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        {/* {...chartBoxCollab} send everything inside chartBoxCollab */}
        <ChartBox {...chartBoxCollab} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProject} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <BigChartBox />
      </div>
    </div>
  );
};

export default Home;
