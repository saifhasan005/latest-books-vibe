import { useLoaderData } from 'react-router';  // not 'react-router-dom'
import { useParams } from 'react-router';

const BookDetails = () => {
    const books = useLoaderData();        // should now be the array
    const { id } = useParams();

    const book = books.find(b => b.bookId === Number(id));

    // console.log(book);
    return (
        <div className=''>
            <div className="card my-12 max-w-[1170px] p-4 container mx-auto lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img className='rounded-xl  flex-1  h-[400px]'
                        src={book.image}
                        alt="Album" />
                </figure>
                <div className="card-body space-y-3 flex-1">
                    <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                    <p className='font-semibold text-xl'>By: {book.author}</p>
                    <p className='py-2 border-y border-gray-300 font-semibold'>{book.category}</p>
                    <p className='text-md'><span className='font-bold'>Review:</span> {book.review}</p>
                    <div className="card-actions justify-star">
                        <div className='flex items-center gap-10'>
                            <p className='font-bold text-lg'>Tag</p>
                            <div className='flex gap-4'>
                                <p className='text-gray-500 bg-green-200 p-2 rounded-lg'>#{book.tags[0]}</p>
                                <p className='text-gray-500 bg-green-200 p-2 rounded-lg'>#{book.tags[1]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        <div className="flex justify-between py-3">
                            <span className="text-gray-500 text-sm">Number of Pages</span>
                            <span className="font-medium">{book.totalPages}</span>
                        </div>
                        <div className="flex justify-between py-3">
                            <span className="text-gray-500 text-sm">Publisher</span>
                            <span className="font-medium">{book.publisher}</span>
                        </div>
                        <div className="flex justify-between py-3">
                            <span className="text-gray-500 text-sm">Year of Publishing</span>
                            <span className="font-medium">{book.yearOfPublishing}</span>
                        </div>
                        <div className="flex justify-between py-3">
                            <span className="text-gray-500 text-sm">Rating</span>
                            <span className="font-medium">{book.rating} ★</span>
                        </div>
                    </div>
                    <div>
                        <button className='btn'>Read</button>
                        <button className='btn ml-6 btn-primary'>WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookDetails;