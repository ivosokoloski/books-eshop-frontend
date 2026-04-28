import { Box, CircularProgress } from '@mui/material';
import useCountries from '../../../hooks/countries/useCounties';
import CountryGrid from '../../components/countries/CountryGrid';

const CountriesPage = () => {
  const { countries, loading } = useCountries();

  return (
    <Box className='books-box'>
      {loading && (
        <Box className='progress-box'>
          <CircularProgress/>
        </Box>
      )}
      {!loading && <CountryGrid countries={countries}/>}
    </Box>

  );
};

export default CountriesPage;