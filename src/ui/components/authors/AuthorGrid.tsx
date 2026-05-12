import { Grid } from '@mui/material';
import AuthorCard from './AuthorCard';
import type { Author, AuthorFormData } from '../../../api/types/author';

interface Authors {
  authors: Author[];
  onEdit: (id: number, data: AuthorFormData) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
}

const AuthorsGrid = ({ authors, onEdit, onDelete }: Authors) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {authors.map((author) => (
        <Grid key={author.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <AuthorCard author={author} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AuthorsGrid;