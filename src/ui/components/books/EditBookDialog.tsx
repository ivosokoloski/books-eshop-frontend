import type {
  Book,
  BookFormData,
} from "../../../api/types/book.ts";
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

interface FormData {
  name: string;
  category: string;
  state: string;
  rented: boolean;
  availableCopies: number;
  authorId: number;
}

interface EditBookDialogProps {
  book: Book;
  open: boolean;
  onClose: () => void;
  onEdit: (id: number, data: BookFormData) => Promise<void>;
}

const EditBookDialog = ({
  book,
  open,
  onClose,
  onEdit,
}: EditBookDialogProps) => {
  const { authors } = useAuthors();

  const [formData, setFormData] = useState<FormData>({
    name: book.name,
    category: book.category,
    state: book.state,
    rented: book.rented,
    availableCopies: book.availableCopies,
    authorId: book.authorId,
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAuthorChange = (event: SelectChangeEvent<number>) => {
    setFormData((prev) => ({ ...prev, authorId: Number(event.target.value) }));
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

    await onEdit(book.id, payload);
    setFormData({ ...formData });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Book</DialogTitle>
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
          label="Category"
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
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBookDialog;
