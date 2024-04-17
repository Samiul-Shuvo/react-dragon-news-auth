import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./ BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
     const news = useLoaderData();
     console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* News Container */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews=><NewsCard
                        
                        key={aNews._id}
                        news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;