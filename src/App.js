import './App.css';
import BooksList from './containers/BooksList'

const App=()=> {
return (
    <div className="App pb-5">
    <BooksList />
    <BookForm />
  </div>
  );
}

export default App;
