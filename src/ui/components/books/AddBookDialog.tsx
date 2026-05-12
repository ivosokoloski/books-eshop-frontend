import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
import useAuthors from "../../../hooks/authors/useAuthors.ts";
import type { BookFormData } from "../../../api/types/book.ts";

interface FormData {
  name: string;
  category: string;
  state: string;
  rented: boolean;
  availableCopies: number;
  authorId: number;
}

const initialFormData: FormData = {
  name: "",
  category: "",
  state: "",
  rented: false,
  availableCopies: 0,
  authorId: 0,
};

interface AddBookDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: BookFormData) => Promise<void>;
}

const AddBookDialog = ({ open, onClose, onAdd }: AddBookDialogProps) => {
  const { authors } = useAuthors();

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent,
  ) => {
    const { name, value } = event.target;
        setFormData((prev) => ({
      ...prev,
      [name]: name === "availableCopies" ? Number(value) : value,
    }));
  };

  const handleAuthorChange = (event: SelectChangeEvent<number>) => {
    setFormData((prev) => ({
      ...prev,
      authorId: Number(event.target.value),
    }));
  };

  const handleSubmit = async () => {
    const payload: BookFormData = {
      name: formData.name.trim(),
      category: formData.category.trim(),
      state: formData.state.trim(),
      rented: formData.rented,
      availableCopies: Number(formData.availableCopies),
    authorId: Number(formData.authorId),
    };

    await onAdd(payload);
    setFormData({ ...initialFormData });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Book</DialogTitle>
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
          label="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Available Copies"
          name="availableCopies"
          value={formData.availableCopies}
          onChange={handleChange}
          type="number"
          fullWidth
        />
        

        <FormControl margin="dense" fullWidth>
          <InputLabel>Author</InputLabel>
          <Select
            label="Author"
            name="authorId"
            value={formData.authorId}
            onChange={handleAuthorChange}
            variant="outlined"
          >
            {authors.map((author) => (
              <MenuItem key={author.id} value={author.id}>
                {author.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBookDialog;
