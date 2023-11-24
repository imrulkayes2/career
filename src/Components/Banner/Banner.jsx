
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section>
                <h1 className='text-6xl'>One Step Closer To Your <span className='text-blue-400'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link to='/'>Get Started</Link>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Banner;