import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import type { User } from "../../../api/types/user";
import type { UserFormData } from "../../../api/types/user";
import { useState } from "react";
import EditUserDialog from "./EditUserDialog";
import DeleteUserDialog from "./DeleteUserDialog";
import { Alert, Snackbar } from "@mui/material";
interface UserCardProps {
  user: User;
  onEdit: (id: number, data: UserFormData) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const [editUserDialogOpen, setEditUserDialogOpen] =
    useState<boolean>(false);
  const [deleteUserDialogOpen, setDeleteUserDialogOpen] =
    useState<boolean>(false);

  const handleEdit = async (id: number, data: UserFormData) => {
    try {
      await onEdit(id, data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err instanceof Error ? err.message : "Failed to edit user.",
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await onDelete(id);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err instanceof Error ? err.message : "Failed to delete user.",
      });
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="h6" sx={{ textAlign: "right" }}>
            {user.surname}
          </Typography>
           <Typography variant="h6" sx={{ textAlign: "right" }}>
            {user.email}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button
            startIcon={<InfoIcon />}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            Info
          </Button>
          <Box>
            { (
              <Button
                startIcon={<EditIcon />}
                color="warning"
                onClick={() => setEditUserDialogOpen(true)}
              >
                Edit
              </Button>
            )}
            { (
              <Button
                startIcon={<DeleteIcon />}
                color="error"
                onClick={() => setDeleteUserDialogOpen(true)}
              >
                Delete
              </Button>
            )}
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
      <EditUserDialog
        user={user}
        open={editUserDialogOpen}
        onClose={() => setEditUserDialogOpen(false)}
        onEdit={handleEdit}
      />
      <DeleteUserDialog
        user={user}
        open={deleteUserDialogOpen}
        onClose={() => setDeleteUserDialogOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default UserCard;
