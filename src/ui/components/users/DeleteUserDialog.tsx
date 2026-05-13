import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import type { User } from '../../api/types/user.ts';
interface DeleteUserDialogProps {
  user: User;
  open: boolean,
  onClose: () => void;
  onDelete: (id: number) => Promise<void>;
}

const DeleteUserDialog = ({ user, open, onClose, onDelete }: DeleteUserDialogProps) => {
  const handleSubmit = async () => {
    await onDelete(user.id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete <strong>{user.name}</strong>? This action cannot be undone.
        </DialogContentText>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} color='error' variant='contained'>Delete</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserDialog;