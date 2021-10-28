
import AllPerson from './AllPerson';
import './App.css';
import ContactForm from './ContactForm';
import ReservationForm from './FormDemoMultiple';

function App() {
  return (
    <div>
      <h1>Onsdagsdemoer</h1>
      <ContactForm/>
      <h2>Handling inputs</h2>
      <ReservationForm/>
      <AllPerson/>
    </div>
  );
}

export default App;
