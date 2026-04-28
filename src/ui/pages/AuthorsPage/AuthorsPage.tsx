import { Box, CircularProgress } from '@mui/material';
import AuthorsGrid from '../../components/authors/AythorGrid';
import useAuthors from '../../../hooks/authors/useAuthors';

const AuthorsPage = () => {
  const { authors, loading } = useAuthors();

  return (
    <Box className='books-box'>
      {loading && (
        <Box className='progress-box'>
          <CircularProgress/>
        </Box>
      )}
      {!loading && <AuthorsGrid authors={authors}/>}
    </Box>

  );
};

export default AuthorsPage;