import Header from "./Header";
import Keyboard from "./Keyboard";
import SquareGrid from "./SquareGrid";

const MainLayout = () => {
    return (
        <div className="main">
            <div className="container">
                <Header />
                <SquareGrid />
                <Keyboard />
            </div>
        </div>
    );
};

export default MainLayout;