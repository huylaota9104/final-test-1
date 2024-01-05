import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route, Link, useNavigate} from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const withDone = e.target.checked ? 1 : 0;
    navigate(`?withDone=${withDone}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default function App({ storedTasks }) {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home storedTasks={storedTasks} />}
        />
      </Routes>
    </div>
  );
}
const Home = ({ storedTasks }) => {
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <label>
          <input
            type="checkbox"
            onChange={handleFilterChange}
          />
          Not finished only
        </label>
        <TodoList />
        <Form />
      </div>
      <Footer />
    </div>
  );
};
