/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
  
    wasExpensive() {
      if (this.budget >= 100000000) {
        return console.log(
          "Filmo biudžetas didesnis už > 100000000 USD",
          true
        );
      } else {
        return console.log(
          "Filmo biudžetas mažesnis už < 100000000 USD",
          false
        );
      }
    }
  }
  
  const series = new Movie("Mad Max: Fury Road", "George Miller", 185000000);
  series.wasExpensive();
  console.log("Filmo biudžetas: ", series.budget, "USD");