import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {

    const sekcje = [
    'Piłka nożna',
    'Szachy',
    'Robotyka',
    'Pływanie',
  ];

  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerSekcji, setNumerSekcji] = useState('');

  function obsluzZatwierdzenie(event) {
    event.preventDefault();

    console.log("Imie i nazwisko: " + imieNazwisko);

    const indeksSekcji = Number(numerSekcji) - 1;

    if (
      numerSekcji.trim() !== '' &&
      Number.isInteger(Number(numerSekcji)) &&
      indeksSekcji >= 0 &&
      indeksSekcji < sekcje.length
    ) {
      console.log("Sekcja: " + sekcje[indeksSekcji]);
    } else {
      console.log('Nieprawidłowy numer sekcji');
    }
  }

  return (
    
      <div className="container mt-4">
      <h2>Liczba sekcji: {sekcje.length}</h2>

      <ol>
        {sekcje.map((sekcja, indeks) => (
          <li key={sekcja}>{sekcja}</li>
        ))}
      </ol>

      <form onSubmit={obsluzZatwierdzenie}>
        <div className="mb-3">
          <label
            htmlFor="imieNazwisko"
            className="form-label"
          >
            Imię i nazwisko:
          </label>

          <input
            type="text"
            className="form-control"
            id="imieNazwisko"
            value={imieNazwisko}
            onChange={(event) =>
              setImieNazwisko(event.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="numerSekcji"
            className="form-label"
          >
            Numer sekcji:
          </label>

          <input
            type="number"
            className="form-control"
            id="numerSekcji"
            value={numerSekcji}
            onChange={(event) =>
              setNumerSekcji(event.target.value)
            }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>
    </div>

  )
}

export default App;
