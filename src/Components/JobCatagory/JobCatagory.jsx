import React, { useEffect, useState } from 'react';
import Catagory from '../Catagory/Catagory';

const JobCatagory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h1 className='text-5xl text-center'>Job Category List:{categories.length}</h1>
            <p className='text-2xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 gap-2">
                {
                    categories.map(category => <Catagory key={categories.id} catagory={category}></Catagory>)
                }
            </div>
        </div >
    );
};

export default JobCatagory;