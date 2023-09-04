import { Routes, Route } from "react-router-dom";
import "./styles/2-App.css";
import IndexPage from "./pages/1-IndexPage";
import LoginPage from "./pages/2-LoginPage";
import Layout from "./3-Layout";
import RegisterPage from "./pages/3-RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/4-ProfilePage";
import AccoPage from "./pages/5-AccoPage";
import PlaceForm from "./components/4-PlaceForm";
import PlacePage from "./pages/6-PlacePage";
import BookingsPage from "./pages/7-BookingsPage";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/accommodations" element={<AccoPage />} />
          <Route path="/account/accommodations/new" element={<PlaceForm />} />
          <Route path="/account/accommodations/:id" element={<PlaceForm />} />
          <Route path="/accommodations/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />

        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
