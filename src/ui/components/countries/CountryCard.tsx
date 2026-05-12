import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import type { Country, CountryFormData } from '../../../api/types/country';  
import { useState } from 'react';
import EditCountryDialog from './EditCountryDialog';
import DeleteCountryDialog from './DeleteCountryDialog';
import { Alert, Snackbar } from '@mui/material';


interface CountryCardProps {
  country: Country;
    onEdit: (id: number, data: CountryFormData) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
}

const CountryCard = ({ country, onEdit, onDelete }: CountryCardProps) => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
      open: false,
      message: "",
    });
  
    const [editCountryDialogOpen, setEditCountryDialogOpen] = useState<boolean>(false);
    const [deleteCountryDialogOpen, setDeleteCountryDialogOpen] =
      useState<boolean>(false);
  
    const handleEdit = async (id: number, data: CountryFormData) => {
      try {
        await onEdit(id, data);
      } catch (err) {
        setSnackbar({
          open: true,
          message: err instanceof Error ? err.message : "Failed to edit country.",
        });
      }
    };
  
    const handleDelete = async (id: number) => {
      try {
        await onDelete(id);
      } catch (err) {
        setSnackbar({
          open: true,
          message: err instanceof Error ? err.message : "Failed to delete country.",
        });
      }
    };
  

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5">{country.name}</Typography>
          <Typography variant="h6" sx={{ textAlign: "right" }}>
            { (country as any).country || country.continent || "N/A" }
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            startIcon={<InfoIcon />}
            onClick={() => navigate(`/countries/${country.id}`)}
          >
            Info
          </Button>
          <Box>
            {
              <Button
                startIcon={<EditIcon />}
                color="warning"
                onClick={() => setEditCountryDialogOpen(true)}
              >   
                Edit
              </Button>
            }
            {
              <Button
                startIcon={<DeleteIcon />}
                color="error"
                onClick={() => setDeleteCountryDialogOpen(true)}
              >
                Delete
              </Button>
            }
          </Box>
        </CardActions>
      </Card>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="error"
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <EditCountryDialog
      
        country={country}
        open={editCountryDialogOpen}
        onClose={() => setEditCountryDialogOpen(false)}
        onEdit={handleEdit}
      />
      <DeleteCountryDialog
        country={country}
        open={deleteCountryDialogOpen}
        onClose={() => setDeleteCountryDialogOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default CountryCard;