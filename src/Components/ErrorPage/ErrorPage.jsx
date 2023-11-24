import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p>Opps</p>
            <Link to='/'>Go back home</Link>
        </div>

    );
};

export default ErrorPage;