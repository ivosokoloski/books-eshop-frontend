import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import type { Author } from '../../../api/types/author';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant='h5'>{author.name} {author.surname}</Typography>

      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button
          startIcon={<InfoIcon/>}
          onClick={() => navigate(`/authors/${author.id}`)}
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

export default AuthorCard;