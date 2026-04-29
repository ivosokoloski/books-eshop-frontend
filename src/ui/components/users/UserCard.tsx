import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import type { User } from '../../../api/types/user';
interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant='h5'>{user.name} {user.surname}</Typography>
        <Typography variant='body2' color='text.secondary'>
          {user.email}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button
          startIcon={<InfoIcon/>}
          onClick={() => navigate(`/users/${user.id}`)}
        >
          Info
        </Button>
        <Box>
          <Button startIcon={<EditIcon/>} color='warning'>Edit</Button>
          <Button startIcon={<DeleteIcon/>} color='error'>Delete</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default UserCard;