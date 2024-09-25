import PropType from 'prop-types';

const ViewBook = ({ book, onEdit, onDelete, onBack }) => {
    const handleDelete = () => {
        onDelete(book.id);
    };

    return (
        <div className="view-book-container">
            <h1 className="center">View Book</h1>
            <table className="book-table">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                    </tr>
                </thead>
            </table>
            <div className="button-container">
                <button className="edit-button" onClick={() => onEdit(book.id)}>Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
                <button className="back-button" onClick={onBack}>Back to List</button>
            </div>    
        </div>
    );
};

ViewBook.prototype = {
    book: PropType.object.isRequired,
    onEdit: PropType.func.isRequired,
    onDelete: PropType.func.isRequired,
    onBack: PropType.func.isRequired,
};

export default ViewBook;