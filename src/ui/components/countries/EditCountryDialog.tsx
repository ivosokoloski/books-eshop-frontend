import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
import type { Country, CountryFormData } from "../../../api/types/country.ts";

interface FormData {
  name: string;
  continent: string;
}

interface EditCountryDialogProps {
  country: Country;
  open: boolean;
  onClose: () => void;
  onEdit: (id: number, data: CountryFormData) => Promise<void>;
}

const EditCountryDialog = ({
  country,
  open,
  onClose,
  onEdit,
}: EditCountryDialogProps) => {
  // ТРИКОТ Е ТУКА:
  // Го мапираме 'country.country' од бекендот во 'formData.continent' за фронтендот
  const [formData, setFormData] = useState<FormData>({
    name: country.name || "",
    continent: (country as any).country || country.continent || "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload: CountryFormData = {
      name: formData.name.trim(),
      continent: formData.continent.trim(), // Ова сега ќе биде точното име за API-то
    };

    await onEdit(country.id, payload);
    onClose();
  };
  

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Country</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Continent"
          name="continent" // Мора да биде "continent" за да се поклопи со handleChange
          value={formData.continent}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCountryDialog;
