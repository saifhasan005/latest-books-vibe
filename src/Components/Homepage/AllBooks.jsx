import { Star } from 'lucide-react';
import React, { use } from 'react';
const booksData = fetch('/booksData.json').then(res => res.json());
const AllBooks = () => {
    const books = use(booksData);
    console.log(books);
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-center text-3xl mb-6'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    books.map((book, ind) => {
                        return (
                            <div key={ind} className="card bg-base-100  shadow-sm">
                                <figure className='p-6'>
                                    <img className='rounded-xl h-[350px]'
                                        src={book.image}
                                        alt="book" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title ">
                                        <p className='text-2xl font-bold'>{book.bookName}</p>
                                        <div className='flex flex-wrap items-center gap-2'>
                                            {book.tags.map((tag) => (
                                                <div className="badge text-green-500 bg-green-200 font-bold">{tag}</div>
                                            ))}
                                        </div>
                                    </h2>
                                    <p className='text-lg font-bold'>By: {book.author}</p>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions border-gray-300 justify-between border-t pt-[25px] border-dashed">
                                        <div className="font-semibold">{book.category}</div>
                                        <div className='flex items-center gap-2'> {book.rating}  <Star></Star></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;