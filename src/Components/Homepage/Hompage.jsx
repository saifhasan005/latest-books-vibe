import React from 'react';
import heroImg from '../../../assets/hero_img.jpg'
import AllBooks from './AllBooks';

const Hompage = () => {
    return (
        <div >
            <div className="bg-base-200 hero container mx-auto min-h-[70vh] rounded-2xl my-8">
                <div className="w-full justify-between hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-2xl'
                        src={heroImg}
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1> <br />
                        <button className="btn btn-success mt-4">View The List</button>
                    </div>
                </div>
            </div>
            <AllBooks></AllBooks>
        </div>
    );
};

export default Hompage;