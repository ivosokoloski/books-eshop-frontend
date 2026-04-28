import './BooksPage.css';
import { Box, CircularProgress } from '@mui/material';
import BookGrid from '../../components/books/BookGrid';
import useBooks from '../../../hooks/books/useBooks';

const BooksPage = () => {
  const { books, loading } = useBooks();

  return (
    <Box className='books-box'>
      {loading && (
        <Box className='progress-box'>
          <CircularProgress/>
        </Box>
      )}
      {!loading && <BookGrid books={books}/>}
    </Box>

  );
};

export default BooksPage;