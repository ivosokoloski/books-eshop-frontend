import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Layout from "./ui/components/layout/Layout/Layout.tsx";
import HomePage from "./ui/pages/HomePage/HomePage.tsx";
import BooksPage from "./ui/pages/BooksPage/BooksPage.tsx";
import AuthorsPage from "./ui/pages/AuthorsPage/AuthorsPage.tsx";
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage.tsx";
import BookDetailsPage from "./ui/pages/BooksDetailsPage/BooksDetailsPage.tsx";
import AuthorsDetailsPage from "./ui/pages/AuthorsDetailsPage/AuthorsDetailsPage.tsx";
import CountriesDetailsPage from "./ui/pages/CountriesDetailsPage/CountriesDetailsPage.tsx";
import UsersDetailsPage from "./ui/pages/UsersDetailsPage/UsersDetailsPage.tsx";
import UsersPage from "./ui/pages/UsersPage/UsersPage.tsx";
import LoginPage from "./ui/pages/auth/LoginPage/LoginPage.tsx";
import RegisterPage from "./ui/pages/auth/RegisterPage/RegisterPage.tsx";
import ProtectedRoute from "./ui/components/routing/ProtectedRoute/ProtectedRoute.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="books" element={<BooksPage />} />
            <Route path="authors" element={<AuthorsPage />} />
            <Route path="countries" element={<CountriesPage />} />
            <Route path="users" element={<UsersPage />} />

            <Route path="books/:id" element={<BookDetailsPage />} />
            <Route path="authors/:id" element={<AuthorsDetailsPage />} />
            <Route path="countries/:id" element={<CountriesDetailsPage />} />
            <Route path="users/:username" element={<UsersDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
