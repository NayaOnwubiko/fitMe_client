import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import UserProfile from './pages/UserProfile/UserProfile';
import Schedule from './pages/Schedule/Schedule';
import MealDetails from "./pages/MealDetails/MealDetails";
import MealPage from './pages/MealPage/MealPage';
import ExerciseDetails from "./pages/ExerciseDetails/ExerciseDetails";
import ExercisePage from "./pages/ExercisePage/ExercisePage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users/currentuser" element={<UserProfile />} />
          <Route path="/users/meals" element={<MealPage />} />
          <Route path="/users/exercises" element={<ExercisePage />} />
          <Route path="/schedule/meals/:mealId" element={<MealDetails />} />
          <Route path="/schedule/exercises/:exerciseId" element={<ExerciseDetails />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
