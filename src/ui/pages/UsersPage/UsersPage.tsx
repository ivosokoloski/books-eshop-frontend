import { Box, CircularProgress } from '@mui/material';
import UsersGrid from '../../components/users/UserGrid';
import useUsers from '../../../hooks/users/useUsers';
const UsersPage = () => {
  const { users, loading, onEdit, onDelete } = useUsers();

  return (
    <Box className='books-box'>
      {loading && (
        <Box className='progress-box'>
          <CircularProgress/>
        </Box>
      )}
      {!loading && <UsersGrid users={users} onEdit={onEdit} onDelete={onDelete} />}
    </Box>

  );
};

export default UsersPage;