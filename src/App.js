import React from 'react';
import './App.css';

function Produkt({ nr, obraz, nazwa, opis, cena }) {
    return (
        <div className="produkt">
            <img src={obraz} alt={nazwa} className="produkt-obraz" />
            <p>Nr obrazu: {nr}</p>
            <p>Nazwa: {nazwa}</p>
            <p>Opis: {opis}</p>
            Cena: {cena} zł
        </div>
    );
}

function App() {
    const obrazy = [
        {
            nr: 1,
            obraz: 'logo1.png',
            nazwa: 'Abstrakcja 1',
            opis: 'Pierwszy obraz przedstawiający abstrakcyjne kształty.',
            cena: '500',
        },
        {
            nr: 2,
            obraz: 'logo2.png',
            nazwa: 'Abstrakcja 2',
            opis: 'Drugi obraz z kolekcji abstrakcji.',
            cena: '750',
        },
        {
            nr: 3,
            obraz: 'logo3.png',
            nazwa: 'Abstrakcja 3',
            opis: 'Trzeci obraz z różnymi kolorami i kształtami.',
            cena: '900',
        },
        {
            nr: 4,
            obraz: 'logo4.png',
            nazwa: 'Abstrakcja 4',
            opis: 'Czwarty obraz z dynamicznymi liniami i kształtami.',
            cena: '1200',
        },
        {
            nr: 5,
            obraz: 'logo5.png',
            nazwa: 'Abstrakcja 5',
            opis: 'Piąty obraz z dynamicznymi liniami i kształtami.',
            cena: '1600',
        },
        {
            nr: 6,
            obraz: 'logo6.png',
            nazwa: 'Abstrakcja 6',
            opis: 'Szósty obraz z dynamicznymi liniami i kształtami.',
            cena: '2000',
        },
        {
            nr: 7,
            obraz: 'logo7.png',
            nazwa: 'Abstrakcja 7',
            opis: 'Siódmy obraz z dynamicznymi liniami i kształtami.',
            cena: '2400',
        },
        {
            nr: 8,
            obraz: 'logo8.png',
            nazwa: 'Abstrakcja 8',
            opis: 'Ósmy obraz z dynamicznymi liniami i kształtami.',
            cena: '2800',
        },
    ];

    return (
        <div className="sklep">
            <h1>Galeria obrazów</h1>
            <div className="produkty">
                {obrazy.map((produkt) => (
                    <Produkt
                        key={produkt.nr}
                        nr={produkt.nr}
                        obraz={produkt.obraz}
                        nazwa={produkt.nazwa}
                        opis={produkt.opis}
                        cena={produkt.cena}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
