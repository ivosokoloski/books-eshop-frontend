import type { Country } from '../../../api/types/country';  
import CountryCard from './CountryCard';
import { Grid } from '@mui/material';   

interface CountryGrid {
  countries: Country[];
}

const CountryGrid = ({ countries }: CountryGrid) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {countries.map((country) => (
        <Grid key={country.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CountryCard country={country}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryGrid;