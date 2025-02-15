type TranslationKeys =
  | 'nav.welcome'
  | 'nav.rsvp'
  | 'nav.location'
  | 'nav.events'
  | 'welcome.title'
  | 'welcome.description'
  | 'welcome.cta'
  | 'countdown.days'
  | 'countdown.hours'
  | 'countdown.minutes'
  | 'countdown.seconds'
  | 'location.title'
  | 'location.description'
  | 'location.maps'
  | 'location.transport.title'
  | 'location.transport.car.title'
  | 'location.transport.car.description'
  | 'location.transport.bus.title'
  | 'location.transport.bus.description'
  | 'location.transport.bus.departure'
  | 'location.transport.bus.return'
  | 'location.transport.bus.from'
  | 'location.transport.bus.to'
  | 'location.transport.bus.demand'
  | 'location.transport.bus.confirmed'
  | 'location.transport.bus.note'
  | 'dresscode.title'
  | 'dresscode.description'
  | 'dresscode.men'
  | 'dresscode.women'
  | 'dresscode.contact.title';

type TranslationsType = {
  [key in 'es' | 'en']: {
    [key in TranslationKeys]: string;
  };
};

export const translations: TranslationsType = {
  es: {
    // Header
    'nav.welcome': '¡Bienvenidos!',
    'nav.rsvp': 'Confirma tu asistencia',
    'nav.location': 'Cómo llegar',
    'nav.events': 'Eventos',

    // Welcome
    'welcome.title': '¡Bienvenidos a nuestra boda!',
    'welcome.description':
      'Estamos deseando compartir con vosotros este dia que esperamos sea muy especial.',
    'welcome.cta': '¡Te esperamos!',

    // Countdown
    'countdown.days': 'días',
    'countdown.hours': 'horas',
    'countdown.minutes': 'minutos',
    'countdown.seconds': 'segundos',

    // Location
    'location.title': 'Cómo llegar',
    'location.description':
      'Tanto la ceremonia como la posterior celebracion tendran lugar en el Castillo de Batres.',
    'location.maps': 'Ver en Google Maps',
    'location.transport.title': 'Opciones de transporte',
    'location.transport.car.title': 'Coche',
    'location.transport.car.description':
      'Puedes ir en tu propio vehículo, hay un parking para 60 coches por lo que no habrá problema de aparcamiento.',
    'location.transport.bus.title': 'Bus',
    'location.transport.bus.description':
      'Ponemos un servicio de autobús para trasladar a todos los invitados.',
    'location.transport.bus.departure': 'Ida',
    'location.transport.bus.return': 'Vuelta',
    'location.transport.bus.from': 'Salida de Atocha',
    'location.transport.bus.to': 'Destino Atocha',
    'location.transport.bus.demand': '*Si hay suficiente demanda',
    'location.transport.bus.confirmed': 'Este es fijo',
    'location.transport.bus.note':
      'Si vas a coger la opción de bus, es muy importante que nos lo hagas saber en el formulario RSVP',

    // Dress Code
    'dresscode.title': 'Dresscode',
    'dresscode.description':
      'El dresscode es formal, Alfonso y los testigos irán de chaqué. Aquí te dejamos unos ejemplos de bodas de tarde, teniendo en cuenta el tiempo que suele hacer en estas fechas.',
    'dresscode.men': 'Inspiración para invitados',
    'dresscode.women': 'Inspiración para invitadas',
    'dresscode.contact.title': '¿Alguna duda? Escríbenos.',
  },
  en: {
    // Header
    'nav.welcome': 'Welcome!',
    'nav.rsvp': 'RSVP',
    'nav.location': 'Location',
    'nav.events': 'Events',

    // Welcome
    'welcome.title': 'Welcome to our wedding!',
    'welcome.description':
      'We are looking forward to sharing this very special day with you.',
    'welcome.cta': "We can't wait to see you!",

    // Countdown
    'countdown.days': 'days',
    'countdown.hours': 'hours',
    'countdown.minutes': 'minutes',
    'countdown.seconds': 'seconds',

    // Location
    'location.title': 'How to get there',
    'location.description':
      'Both the ceremony and the celebration will take place at Castillo de Batres.',
    'location.maps': 'View on Google Maps',
    'location.transport.title': 'Transportation options',
    'location.transport.car.title': 'Car',
    'location.transport.car.description':
      'You can come in your own vehicle. There is parking available for 60 cars, so there will be no parking issues.',
    'location.transport.bus.title': 'Bus',
    'location.transport.bus.description':
      'We provide a bus service to transport all guests.',
    'location.transport.bus.departure': 'Departure',
    'location.transport.bus.return': 'Return',
    'location.transport.bus.from': 'Departure from Atocha',
    'location.transport.bus.to': 'Destination Atocha',
    'location.transport.bus.demand': '*If there is enough demand',
    'location.transport.bus.confirmed': 'This one is confirmed',
    'location.transport.bus.note':
      'If you plan to use the bus service, it is very important to let us know in the RSVP form',

    // Dress Code
    'dresscode.title': 'Dresscode',
    'dresscode.description':
      'The dress code is formal, Alfonso and the witnesses will wear morning suits. Here are some examples for an afternoon wedding, taking into account the typical weather during this time of year.',
    'dresscode.men': 'Inspiration for male guests',
    'dresscode.women': 'Inspiration for female guests',
    'dresscode.contact.title': 'Any questions? Contact us.',
  },
};
