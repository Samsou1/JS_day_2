const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function titlesOfBooks(){
  return books.map(book => book.title);
} 
console.log(titlesOfBooks());

function booksRentedOnce(){
  return books.filter(book => book.rented != 0);
};
console.log(booksRentedOnce());

function booksMostRented(){
 return books.reduce(function(max, book){
  if(book['rented'] > max['rented']){
    return book;
  }else{
    return max;
  }
  });
}
console.log(booksMostRented());

function booksLeastRented(){
  return books.reduce(function(max, book){
   if(book['rented'] < max['rented']){
     return book;
   }else{
     return max;
   }
   });
 }
console.log(booksLeastRented());
 
function listOfBooksWithoutId(id){
  return books.filter(book => book['id'] != id);
} 
console.log(listOfBooksWithoutId(133712));
