import { useState, useEffect } from "react";
import PropType from 'prop-type';

const BookForm = ({ book, onSave, onBack }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
        }
    }, [book]);

    const handleSubmit = (e) => {
        e.prevenDefault();
        onSave({ id: book ? book.id : null, title, author });
    };

    return (
        <div>
            <h1>{book ? 'Edit Book' : 'Create Book'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
            <div className="button-container">
                <button onClick={onBack}>Back to List</button>
            </div>
        </div>
    );
};

BookForm.protoType = {
    book: PropType.object,
    onSave: PropType.func.isRequired,
    onBack: PropType.func.isRequired,
};

export default BookForm;