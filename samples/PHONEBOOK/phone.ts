interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  }
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio'
}

//api
function fetchContacts(): promise<Contact[]> {
  const contacts: Contact[] = {
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 3984982034234,
        },
      },
      {
        name: 'Tony',
        address: 'Malibu',
        phones: {
          home: {
            num: 3984982034234,
          },
        },
      },
    },
  },
}