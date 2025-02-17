type TranslationKeys =
  | 'nav.welcome'
  | 'nav.rsvp'
  | 'nav.location'
  | 'nav.events'
  | 'welcome.title'
  | 'welcome.date'
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
  | 'dresscode.contact.title'
  | 'events.title'
  | 'events.picture'
  | 'registry.title'
  | 'registry.description'
  | 'registry.account.title'
  | 'registry.account.iban'
  | 'registry.account.beneficiaries'
  | 'registry.bizum'
  | 'registry.contact.title'
  | 'registry.contact.phone'
  | 'rsvp.title'
  | 'rsvp.intro'
  | 'rsvp.fullName'
  | 'rsvp.attending.question'
  | 'rsvp.attending.yes'
  | 'rsvp.attending.no'
  | 'rsvp.companion'
  | 'rsvp.bus.question'
  | 'rsvp.bus.yes'
  | 'rsvp.bus.no'
  | 'rsvp.bus.schedule.question'
  | 'rsvp.bus.schedule.early'
  | 'rsvp.bus.schedule.late'
  | 'rsvp.allergies'
  | 'rsvp.song'
  | 'rsvp.comments'
  | 'rsvp.submit'
  | 'rsvp.success'
  | 'rsvp.error';

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
    'welcome.date': '4 · OCTUBRE · 2025',
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
      'Si vas a coger la opción de bus, es muy importante que nos lo hagas saber en el formulario de asistencia.',

    // Dress Code
    'dresscode.title': 'Código de vestimenta',
    'dresscode.description':
      'El código de vestimenta es formal, Alfonso y los testigos irán de chaqué. Aquí te dejamos unos ejemplos de bodas de tarde, teniendo en cuenta el tiempo que suele hacer en estas fechas.',
    'dresscode.men': 'Inspiración para invitados',
    'dresscode.women': 'Inspiración para invitadas',
    'dresscode.contact.title': '¿Alguna duda? Escríbenos.',

    // Events
    'events.title': 'Eventos',
    'events.picture': '/eventos_ES.png',

    // Registry
    'registry.title': 'Lista de bodas',
    'registry.description':
      'Compartir con vosotros nuestro día especial es el mejor regalo, pero si además queréis contribuir de alguna otra forma, aquí os dejamos los detalles de nuestra cuenta conjunta:',
    'registry.account.title': 'Detalles de la cuenta',
    'registry.account.iban': 'IBAN: DE54 1203 0000 1078 120696',
    'registry.account.beneficiaries': 'Beneficiarios: Maria y Alfonso',
    'registry.bizum':
      'Si os da problemas la cuenta alemana podéis hacernos Bizum a cualquiera de nosotros',
    'registry.contact.title': 'Alguna duda? Escríbenos!',
    'registry.contact.phone': 'Tel:',

    // RSVP
    'rsvp.title': 'Confirma tu asistencia',
    'rsvp.intro':
      'Hemos preparado este formulario para que nos ayudéis con la organización del día, y si tenéis alguna duda, podéis escribirnos a cualquiera de nosotros sin problema.',
    'rsvp.fullName': 'Nombre y apellidos',
    'rsvp.attending.question': '¿Vas a venir a la boda?',
    'rsvp.attending.yes': '¡Sí, allí estaré!',
    'rsvp.attending.no': 'No podré asistir',
    'rsvp.companion': 'Nombre y apellidos de tu acompañante',
    'rsvp.bus.question': '¿Vas a utilizar el servicio de autobuses?',
    'rsvp.bus.yes': 'Sí, lo utilizaré',
    'rsvp.bus.no': 'No, iré por mi cuenta',
    'rsvp.bus.schedule.question': '¿Que horario de autobus prefieres?',
    'rsvp.bus.schedule.early': 'Me iré despúes de unos bailes (00:00)',
    'rsvp.bus.schedule.late': 'Me quedaré hasta el final (3:00)',
    'rsvp.allergies':
      '¿Tienes tú y/o tu acompañante alguna alergia o restricción alimentaria?',
    'rsvp.song':
      '¿Qué canción te levanta a bailar y quieres compartir con nosotros?',
    'rsvp.comments':
      'Si quieres dejarnos un mensaje para nuestro día especial puedes hacerlo aquí.',
    'rsvp.submit': 'Enviar',
    'rsvp.success': '¡Gracias! Tu respuesta ha sido registrada.',
    'rsvp.error':
      'Lo sentimos, ha habido un error. Por favor, inténtalo de nuevo más tarde.',
  },
  en: {
    // Header
    'nav.welcome': 'Welcome!',
    'nav.rsvp': 'RSVP',
    'nav.location': 'Location',
    'nav.events': 'Events',

    // Welcome
    'welcome.title': 'Welcome to our wedding!',
    'welcome.date': '4th · October · 2025',
    'welcome.description':
      'We are looking forward to sharing this very special day with you.',
    'welcome.cta': "We can't wait to celebrate with you!",

    // Countdown
    'countdown.days': 'days',
    'countdown.hours': 'hours',
    'countdown.minutes': 'minutes',
    'countdown.seconds': 'seconds',

    // Location
    'location.title': 'How to get there',
    'location.description':
      'Both ceremony and reception will take place at Castillo de Batres.',
    'location.maps': 'View on Google Maps',
    'location.transport.title': 'Transportation options',
    'location.transport.car.title': 'Car',
    'location.transport.car.description':
      "You are welcome to drive, the venue has parking space for 60 vehicles, so finding parking won't be a problem.",
    'location.transport.bus.title': 'Bus',
    'location.transport.bus.description':
      'We provide a bus service to transport all guests.',
    'location.transport.bus.departure': 'Departure',
    'location.transport.bus.return': 'Return',
    'location.transport.bus.from': 'Pickup from Atocha',
    'location.transport.bus.to': 'Drop-off at Atocha',
    'location.transport.bus.demand': '*Subject to demand',
    'location.transport.bus.confirmed': 'This service is confirmed',
    'location.transport.bus.note':
      'If you plan to use the bus service, it is very important to let us know in the RSVP form so we can plan accordingly.',

    // Dress Code
    'dresscode.title': 'Dresscode',
    'dresscode.description':
      "The dress code is formal. Alfonso and the witnesses will wear “chaqué”. Here are some examples of appropriate attire for an evening wedding, taking into account Madrid's weather during this time of year.",
    'dresscode.men': 'Inspiration for men',
    'dresscode.women': 'Inspiration for women',
    'dresscode.contact.title': 'Any questions? Contact us.',

    // Events
    'events.title': 'Events',
    'events.picture': '/eventos_EN.png',

    // Registry
    'registry.title': 'Wedding Registry',
    'registry.description':
      'Sharing our special day with you is the best gift, but if you would also like to contribute in another way, here are our bank account details:',
    'registry.account.title': 'Account Details',
    'registry.account.iban': 'IBAN: DE54 1203 0000 1078 120696',
    'registry.account.beneficiaries': 'Beneficiaries: Maria and Alfonso',
    'registry.bizum':
      'If you have any issues with the German account, you can send us a Bizum to either of us',
    'registry.contact.title': 'Any questions? Contact us!',
    'registry.contact.phone': 'Phone:',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.intro':
      "We have created this form to help us organize the day. If you have any questions, don't hesitate to reach out to either of us.",
    'rsvp.fullName': 'Full name',
    'rsvp.attending.question': 'Will you attend the wedding?',
    'rsvp.attending.yes': 'Yes, I will be there!',
    'rsvp.attending.no': 'Sorry, I cannot attend',
    'rsvp.companion': 'Your +1 full name',
    'rsvp.bus.question': 'Will you use the bus service?',
    'rsvp.bus.yes': 'Yes, I will use it',
    'rsvp.bus.no': 'No, I will go on my own',
    'rsvp.bus.schedule.question': 'Which bus schedule do you prefer?',
    'rsvp.bus.schedule.early': 'I will be leaving after some dancing (00:00)',
    'rsvp.bus.schedule.late': 'I will stay until the end (3:00)',
    'rsvp.allergies':
      'Do any of you have any food allergies or dietary restrictions?',
    'rsvp.song':
      'What song makes you want to dance and would you like to share with us?',
    'rsvp.comments':
      'If you would like to leave us a message for our special day, you can do so here.',
    'rsvp.submit': 'Submit',
    'rsvp.success': 'Thank you! Your response has been recorded.',
    'rsvp.error': 'Sorry, there was an error. Please try again later.',
  },
};
