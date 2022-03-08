export const listPlaces = [
  {
    placeImage:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://blog.beautyclass.tv/wp-content/uploads/2019/05/Decora%C3%A7%C3%A3o-de-sal%C3%A3o-de-beleza-dicas-e-ideias-para-n%C3%A3o-errar-768x469.jpg',
    localName: 'MegaCulture',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://cdn1.mundodastribos.com/58775-Fotos-de-Sal%C3%A3o-de-Beleza-Decorados-20.jpg',
    localName: 'MegaHair',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://fotos.vivadecora.com.br/decoracao-salao-de-beleza-piso-de-porcelanato-claro-e-cadeira-de-couro-preta-revistavd-187516-proportional-height_cover_medium.jpg',
    localName: 'Beauty Style',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://blogdecoracao.biz/wp-content/uploads/2014/11/decora%C3%A7%C3%A3o-de-sal%C3%A3o.jpg',
    localName: 'Estetica Hair',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://construindodecor.com.br/wp-content/uploads/2019/01/Decoracao-de-Salao-de-Beleza-Simples-e-Barata-4.jpg',
    localName: 'Edson Silveira Salão',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  }
]

export const listBook = [
  {
    bookInfo: {
      nameService: 'Coloração',
      status: 'booked',
      date: {
        day: 31,
        month: 'fevereiro',
        time: '18:20'
      },
      pro: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jonathan_Van_Ness%2C_2018-04.jpg/200px-Jonathan_Van_Ness%2C_2018-04.jpg',
        firstName: 'Jonathan',
        url: 'https://www.instagram.com/jvn/'
      },
      location: {
        name: 'MegaCulture',
        address: 'Aricanduva',
        linkMaps: 'https://www.google.com.br/maps/@-23.5525101,-46.5644216,15z',
        frontImage:
          'https://cdn1.mundodastribos.com/58775-Fotos-de-Sal%C3%A3o-de-Beleza-Decorados-20.jpg'
      }
    }
  },

  {
    bookInfo: {
      nameService: 'Corte',
      status: 'booked',
      date: {
        day: 31,
        month: 'fevereiro',
        time: '18:20'
      },
      pro: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jonathan_Van_Ness%2C_2018-04.jpg/200px-Jonathan_Van_Ness%2C_2018-04.jpg',
        firstName: 'Jonathan',
        url: 'https://www.instagram.com/jvn/'
      },
      location: {
        name: 'MegaCulture',
        address: 'Aricanduva',
        linkMaps: 'https://www.google.com.br/maps/@-23.5525101,-46.5644216,15z',
        frontImage:
          'https://www.agenciamural.org.br/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-06-at-20.17.19-1.jpeg'
      }
    }
  },

  {
    bookInfo: {
      nameService: 'Hidratação',
      status: 'booked',
      date: {
        day: 31,
        month: 'fevereiro',
        time: '18:20'
      },
      pro: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jonathan_Van_Ness%2C_2018-04.jpg/200px-Jonathan_Van_Ness%2C_2018-04.jpg',
        firstName: 'Jonathan',
        url: 'https://www.instagram.com/jvn/'
      },
      location: {
        name: 'MegaCulture',
        address: 'Aricanduva',
        linkMaps: 'https://www.google.com.br/maps/@-23.5525101,-46.5644216,15z',
        frontImage:
          'https://cdn1.mundodastribos.com/58775-Fotos-de-Sal%C3%A3o-de-Beleza-Decorados-20.jpg'
      }
    }
  }
]

// dados do client para os cards de profile

export const clientInfo = {
  name: 'Candice J. B.',
  starCount: '453',
  profileImage:
    'https://media1.fdncms.com/pittsburgh/imager/u/zoom/19706445/0000.jpg',
  type: 'client'
}

// dados do profissional para o header

export const proInfo = {
  name: 'Jonathan',
  profileImage:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jonathan_Van_Ness%2C_2018-04.jpg/200px-Jonathan_Van_Ness%2C_2018-04.jpg',
  type: 'pro'
}

// dados do calendario do profissional
export const calendar = [
  {
    day: '18',
    weekDay: 'Segunda',
    month: 'Fevereiro',
    isToday: true,
    id: 1,
    times: [
      {
        hour: '10:20',
        day: '21',
        weekDay: 'Quinta',
        month: 'Fevereiro',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: true,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          lastName: 'J. B.',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com',
          phone: '+55 11 999-9999'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      }
    ] // times
  }, // days
  {
    day: '19',
    weekDay: 'Terça',
    month: 'Fevereiro',
    isToday: false,
    id: 2,
    times: [
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      }
    ] // times
  }, // day
  {
    day: '20',
    weekDay: 'Quarta',
    month: 'Fevereiro',
    isToday: false,
    id: 3,
    times: [
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      }
    ] // times
  }, // day
  {
    day: '21',
    weekDay: 'Quinta',
    month: 'Fevereiro',
    isToday: false,
    id: 4,
    times: [
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      }
    ] // times
  }, // day
  {
    day: '22',
    weekDay: 'Sexta',
    month: 'Fevereiro',
    isToday: false,
    id: 4,
    times: [
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      }
    ] // times
  },
  {
    day: '23',
    weekDay: 'Sábado',
    month: 'Fevereiro',
    isToday: false,
    id: 4,
    times: [
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Corto Cabelo e Pinto',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://static1.purepeople.com.br/articles/6/29/88/76/@/3384214-naiara-azevedo-ja-viveu-uma-briga-contra-opengraph_1200-1.jpg',
          name: 'Clarice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      },
      {
        hour: '10:20',
        service: 'Coloração',
        localName: 'MegaCulture',
        address: 'Av. Rio das Pedras 1118 Aricanduva',
        isCurrent: false,
        client: {
          imageUrl:
            'https://contigo.uol.com.br/media/_versions/fev22/naiara-azevedo-bbb22_widemd.jpeg',
          name: 'Candice',
          recurrence: '12x Cliente Recorrente',
          email: 'candyjb@sweet.com'
        }
      }
    ] // times
  }
]
