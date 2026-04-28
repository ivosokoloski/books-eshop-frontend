import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./ui/components/layout/Layout/Layout.tsx";
import HomePage from "./ui/pages/HomePage/HomePage.tsx";
import BooksPage from "./ui/pages/BooksPage/BooksPage.tsx";
import AuthorsPage from "./ui/pages/AuthorsPage/AuthorsPage.tsx";
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage.tsx";
import BookDetailsPage from "./ui/pages/BooksDetailsPage/BooksDetailsPAge.tsx";
import AuthorsDetailsPage from "./ui/pages/AuthorsDetailsPage/AuthorsDetailsPage.tsx";
import CountriesDetailsPage from "./ui/pages/CountriesDetailsPage/CountriesDetailsPage.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="authors" element={<AuthorsPage />} />
          <Route path="countries" element={<CountriesPage />} />
          <Route path='books/:id' element={<BookDetailsPage />} />
          <Route path='authors/:id' element={<AuthorsDetailsPage />} />
          <Route path='countries/:id' element={<CountriesDetailsPage />} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
