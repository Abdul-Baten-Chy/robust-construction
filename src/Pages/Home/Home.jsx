import Header from "../../Components/Header/Header";
import Testomonial from "../../Components/Testemonial/Testomonial";
import Services from "./services/Services";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Testomonial></Testomonial>
        </div>
    );
};

export default Home;