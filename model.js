const model ={

    //app-nivå ting
    app: {
        currentPage: 'Home',
        loggedInUser: 'User',
    },

    header: 'Dansken og meg',
    title: 'Vintage skatter',
  
    //inputfelter til hver side
    login: {
      username: "Brukernavn",
      password: "Passord",
    },
      adminSite: {
      addProducts: "Legg til produkt",  
      },
  
    menu: [
      {
      Furniture: 'Møbler',
      Clothing: 'Klær og tilbehør',
      Knicknacks: 'Småting',
      },
    ],
  
    //felles data
    categoriesFurniture: [
      {id: 1, name: 'møbler'},
      {id: 2, name: 'stoler', parentId: 1 },
      {id: 3, name: 'bord', parentId: 1 },
      {id: 4, name: 'kommoder', parentId: 1 },
      {id: 5, name: 'hyller', parentId: 1 },
    ],
    
    categoriesClothes: [
      {id: 1, name: 'klær og tilbehør'},
      {id: 2, name: 'kjoler', parentId: 1 },
      {id: 3, name: 'bukser', parentId: 1 },
      {id: 4, name: 'skjørt', parentId: 1 },
      {id: 5, name: 'jakker', parentId: 1 },
      {id: 6, name: 'kåper', parentId: 1 },
      {id: 7, name: 'sko', parentId: 1 },
      {id: 8, name: 'vesker', parentId: 1 },
      {id: 9, name: 'smykker', parentId: 1 },
    ],
  
    categoriesKnicknacks: [
      {id: 1, name: 'Småting'},
      {id: 2, name: 'boller', parentId: 1 },
      {id: 3, name: 'vaser', parentId: 1 },
      {id: 4, name: 'lamper', parentId: 1 },
      {id: 5, name: 'servise', parentId: 1 },
      {id: 6, name: 'krukker', parentId: 1 },
      {id: 7, name: 'fat', parentId: 1 },
    ],
    
    products: [
        
      Møbler = [
        Stoler = [
        
        {
        name : 'Stol av Lær',
        price : 69,
        stock: 10,
        description: 'Komfortabel lenestol',
        image:'',
        },
    
        {
        name : 'antikk stol',
        price : 100,
        stock: 10,
        description: 'Pen antikk stol',
        image:'',
        },
        
        {
        name : 'stol i stoff',
        price : 400,
        stock: 10,
        description: 'Fin og komfortabel stol',
        image:'',
        },
  
        {
        name : 'Trestol',
        price : 69000,
        stock: 10,
        description: 'litt overpriset stol',
        image:'',
        },
        
        {
        name : 'Plastikkstol',
        price : 10000,
        stock: 10,
        description: 'Stol laget av den mest delikate plastikk!',
        image:'',
        },
      
        {
        name : 'Svarthvit stol',
        price : 10,
        stock: 10,
        description: 'sannelig ikke et bilde av en stol',
        image:'',
        },
        
        {
        name : 'Rosa antikk stol',
        price : 10000,
        stock: 10,
        description: 'I love pink',
        image:'',
        },
       ],
     
        Bord =[],
        kommoder =[],
        hyller =[], 
     
      ],
   ],
  };
    /*
  To spørsmål for hver side:
  1. Hvilke data trenger vi i modellen for å kunne vise dette skjermbildet? (query)
  2. Hva kan man gjøre på dette skjermbildet - og hvordan skal den endringen lagres i modellen? (command)
  */