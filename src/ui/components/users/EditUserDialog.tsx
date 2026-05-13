import type { User, UserFormData } from "../../../api/types/user.ts";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";

interface FormData {
    name: string;
    surname: string;
    email: string;
}

interface EditUserDialogProps {
  user: User;
  open: boolean;
  onClose: () => void;
  onEdit: (id: number, data: UserFormData) => Promise<void>;
}

const EditUserDialog = ({
  user,
  open,
  onClose,
  onEdit,
}: EditUserDialogProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: user.name,
    surname: user.surname,
    email: user.email,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async () => {
    const payload: UserFormData = {
      name: formData.name.trim(),
      surname: formData.surname.trim(),
      email: formData.email.trim(),
    };

    await onEdit(user.id, payload);
    setFormData({ ...formData });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User</DialogTitle>
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
          label="Surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          value={formData.email}
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

export default EditUserDialog;
