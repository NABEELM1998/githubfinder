import { Link } from "react-router-dom";
import UserResult from '../Components/Users/UserResult';
import UserSearch from "../Components/Users/UserSearch";

const Home = () => {
    return (
        <>
        <UserSearch/>
        <UserResult/>
        </>
    )
}
export default Home;