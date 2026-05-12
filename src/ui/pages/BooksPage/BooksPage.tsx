import "./BooksPage.css";
import { Box, CircularProgress } from "@mui/material";
import useBooks from "../../../hooks/books/useBooks";
import type { BookFormData } from "../../../api/types/book";
import { useState } from "react";
import { Snackbar, Alert, Button } from "@mui/material";
import BookGrid from "../../components/books/BookGrid";
import AddBookDialog from "../../components/books/AddBookDialog";

const BooksPage = () => {
  const { books, loading, onAdd, onEdit, onDelete } = useBooks();
  const [addBookDialogOpen, setAddBookDialogOpen] =
    useState<boolean>(false);

  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const handleAdd = async (data: BookFormData) => {
    try {
      await onAdd(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err instanceof Error ? err.message : "Failed to add book.",
      });
    }
  };

  return (
     <Box className='products-box'>
      {loading && (
        <Box className='progress-box'>
          <CircularProgress/>
        </Box>
      )}
      {!loading &&
       <>
         { (
           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
             <Button variant='contained' color='primary' onClick={() => setAddBookDialogOpen(true)}>
               Add Book
             </Button>
           </Box>
         )}
         <BookGrid books={books} onEdit={onEdit} onDelete={onDelete}/>
         <Snackbar
           open={snackbar.open}
           autoHideDuration={3000}
           onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
         >
           <Alert
             severity='error'
             onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}>
             {snackbar.message}
           </Alert>
         </Snackbar>
         <AddBookDialog
           open={addBookDialogOpen}
           onClose={() => setAddBookDialogOpen(false)}
           onAdd={handleAdd}
         />
       </>}
    </Box>

  );
};

export default BooksPage;
