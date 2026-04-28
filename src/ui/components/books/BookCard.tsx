import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import type { Book } from '../../../api/types/book';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant='h5'>{book.name}</Typography>
        <Typography variant='subtitle1'>{book.category}</Typography>
        <Typography variant='h6' sx={{ textAlign: 'right' }}>{book.state}</Typography>
        <Typography variant='body2' sx={{ textAlign: 'left' }}>{book.rented}</Typography>
        <Typography variant='body2' sx={{ textAlign: 'left' }}>{book.availableCopies} piece(s) available</Typography>

      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button
          startIcon={<InfoIcon/>}
          onClick={() => navigate(`/books/${book.id}`)}
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

export default BookCard;