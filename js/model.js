const model = {

    //app-nivå ting
    app: {
        currentPage: 'Home',
        loggedInUser: 'User',
    },
  
    //inputfelter til hver side
    login: {
        username: "Brukernavn",
        password: "Passord",
    },
    adminSite: {
        addProducts: "Legg til produkt",
    },
  
    registerUser: [
      {
      navn: '',
      etternavn: '',
      epost: '',
      tlf:'',
      adresse:'',
      postnr:'',
      passord:'',
      bekreftPassord:'',  
      },
    ],
  
    shoppingCart: [
        { productId: 1, count: 2 },
        { productId: 2, count: 1 },
    ],
  
    orders: [{
        date: '2021-08-31',
        items: [
            { productId: 1, count: 2 },
            { productId: 2, count: 1 },
        ],
        status: 'ordred',
    }],
    
    checkout: {
      betal: 'Betal',
    },
  
  
    //felles data
    categories: [
      { id: 1, name: 'Møbler' },
      { id: 2, name: 'Stoler', parentId: 1 },
      { id: 3, name: 'Bord', parentId: 1 },
      { id: 4, name: 'Kommoder', parentId: 1 },
      { id: 5, name: 'Hyller', parentId: 1 },
      { id: 10, name: 'klær og tilbehør' },
      { id: 12, name: 'kjoler', parentId: 10 },
      { id: 13, name: 'bukser', parentId: 10 },
      { id: 14, name: 'skjørt', parentId: 10 },
      { id: 15, name: 'jakker', parentId: 10 },
      { id: 16, name: 'kåper', parentId: 10 },
      { id: 17, name: 'sko', parentId: 10 },
      { id: 18, name: 'vesker', parentId: 10 },
      { id: 19, name: 'smykker', parentId: 10 },
      { id: 21, name: 'Småting' },
      { id: 32, name: 'boller', parentId: 21 },
      { id: 33, name: 'vaser', parentId: 21 },
      { id: 34, name: 'lamper', parentId: 21 },
      { id: 35, name: 'servise', parentId: 21 },
      { id: 36, name: 'krukker', parentId: 21 },
      { id: 37, name: 'fat', parentId: 21 },
    ],
  
    products: [
  
        {
          id: 1,
          name: 'Stol av Lær',
          price: 69,
          stock: 10,
          description: 'Komfortabel lenestol',
          image: '',
          categoryId: 2,
        },
        {
          name: 'antikk stol',
          price: 100,
          stock: 10,
          description: 'Pen antikk stol',
          image: '',
        },
  
        {
          name: 'stol i stoff',
          price: 400,
          stock: 10,
          description: 'Fin og komfortabel stol',
          image: '',
        },
  
        {
          name: 'Trestol',
          price: 69000,
          stock: 10,
          description: 'litt overpriset stol',
          image: '',
        },
  
        {
          name: 'Plastikkstol',
          price: 10000,
          stock: 10,
          description: 'Stol laget av den mest delikate plastikk!',
          image: '',
        },
  
        {
          name: 'Svarthvit stol',
          price: 10,
          stock: 10,
          description: 'sannelig ikke et bilde av en stol',
          image: '',
        },
  
        {
          name: 'Rosa antikk stol',
          price: 10000,
          stock: 10,
          description: 'I love pink',
          image: '',
        },
        {
          name: 'Mahogany bord',
          price: 69000,
          stock: 10,
          description: 'Luksus bord for familien',
          image: '',
        },
        {
          name: 'Bord av Eik',
          price: 9999,
          stock: 13,
          description: 'Luksus bord for familien',
          image: '',
        },
        {
          name: 'Mahogany bord',
          price: 5499,
          stock: 5,
          description: 'Luksus bord for familien',
          image: '',
        },
    ],
  };
  
  /*
  To spørsmål for hver side:
  1. Hvilke data trenger vi i modellen for å kunne vise dette skjermbildet? (query)
  2. Hva kan man gjøre på dette skjermbildet - og hvordan skal den endringen lagres i modellen? (command)
  */