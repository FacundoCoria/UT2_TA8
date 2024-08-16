function findTheOldest(people) {
    // Usamos el método reduce para encontrar a la persona de mayor edad
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        // Calculamos la edad de la persona actual
        const currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
        
        // Calculamos la edad de la persona más vieja hasta ahora
        const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
        
        // Retornamos la persona que tenga la mayor edad
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
    console.log(oldest);
}


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people)