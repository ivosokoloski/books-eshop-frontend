import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import type { Country } from '../../../api/types/country';  


interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant='h5'>{country.name}</Typography>
        <Typography variant='subtitle1'>{country.continent}</Typography>

      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button
          startIcon={<InfoIcon/>}
          onClick={() => navigate(`/countries/${country.id}`)}
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

export default CountryCard;