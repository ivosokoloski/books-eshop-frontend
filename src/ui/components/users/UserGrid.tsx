import { Grid } from "@mui/material";
import UserCard from "./UserCard";
import type { User, UserFormData } from "../../../api/types/user";

interface Users {
  users: User[];
  onEdit: (id: number, data: UserFormData) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

const UsersGrid = ({ users, onEdit, onDelete }: Users) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {users.map((user) => (
        <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
          <UserCard user={user} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersGrid;
