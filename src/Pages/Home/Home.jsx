import Header from "../../Components/Header/Header";
import Testomonial from "../../Components/Testemonial/Testomonial";
import NewArrival from "./NewArrival";
import Services from "./services/Services";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <NewArrival></NewArrival>
            <Testomonial></Testomonial>
        </div>
    );
};

export default Home;