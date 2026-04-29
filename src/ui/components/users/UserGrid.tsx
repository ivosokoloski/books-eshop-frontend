import { Grid } from '@mui/material';
import UserCard from './UserCard';
import type { User } from '../../../api/types/user';
interface Users {
  users: User[];
}

const UsersGrid = ({ users }: Users) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {users.map((user) => (
        <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <UserCard user={user}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersGrid;