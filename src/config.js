export const defaultConfig = {
  brand: {
    logo: 'http://s3.amazonaws.com/betterboh/u/img/local/2/1589984577_logo.png',
    title: 'Open Tender',
  },
  googleMaps: {
    apiKey: 'AIzaSyCkllc7M-cYNzSRXO7KE-ZZKTPW59RroDk',
    zoom: 14,
    styles: {
      labelColor: '#5a5aff',
      roadColor: '#edeaff',
      featureColor: '#edeaff',
      // waterColor: '#e8f4fd',
      // waterColor: '#97d2fb',
      waterColor: '#cbe9fd',
      //  backgroundColor: '#ffffff',
      //  backgroundColor: '#f4f2ff',
      backgroundColor: '#f6f5ff',
    },
    marker_size: { width: 30, height: 40 },
    icons: {
      user:
        'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590271579_map-marker_red-dark-red_120x160.png',
      active:
        'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590271604_map-marker_black_120x160.png',
      inactive:
        'https://s3.amazonaws.com/betterboh/u/img/prod/2/1590271631_map-marker_purple_120x160.png',
    },
  },
  home: {
    background:
      'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588197308_asian-food-spread-top-down_color_1800x1200.jpg',
    title: 'How can we help you today?',
    subtitle: "Let's get started, shall we?",
    content: 'Select an order type from the options below.',
    buttons: {
      pickup: 'Order for Pickup',
      delivery: 'Order for Delivery',
      catering: 'Order Catering',
    },
  },
  locations: {
    background:
      'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588218676_restaurant-front_1800x1200.jpg',
    title: 'restaurants near you',
    content: 'Please choose a location',
  },
  map: {
    title: "Let's find the nearest location",
    subtitle: "We'll make this quick",
    content: {
      pickup: 'Please enter your zip code & choose an option.',
      delivery: 'Please start typing below and then select your address.',
    },
  },
  menu: {
    // background:
    //   'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588303325_976877dbfac85a83d9e9.jpg',
    background:
      'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588456921_burger-with-knife-black-napkin_flipped-cropped_2400x800.jpg',
    // background:
    //   'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588457434_66172f8cf5eeae2433bd.jpg',
  },
  checkout: {
    title: "Let's get you checked out",
    subtitle: '',
    check: {
      title: 'Order Summary',
    },
    details: {
      title: 'Please review your order details',
    },
    address: { title: 'Confirm your address' },
    sign_up: {
      title: 'Wanna create an account?',
      subtitle:
        'Order history, saved favorites & allergens, saved credit cards, and much more. Signing up takes two seconds - start reaping the benefits today!',
    },
    guest: {
      title: 'Or continue to checkout as a guest',
    },
    account: {
      title: 'Nice to see you again!',
    },
    discounts: {
      title: 'Redeem your loyalty rewards',
      subtitle: 'Apply one or more discounts below.',
    },
    promoCodes: {
      title: 'Apply a promo code',
      subtitle: 'Enter a promo code below & hit the apply button',
    },
    giftCards: {
      title: 'Apply a gift card',
      subtitle: 'Apply an existing gift card or add a new one',
    },
    tenders: {
      title: 'How would you like to pay?',
      subtitle: 'Please add one or more payments below',
    },
  },
  account: {
    background:
      'https://s3.amazonaws.com/betterboh/u/img/prod/2/1588457434_66172f8cf5eeae2433bd.jpg',
    title: 'Welcome Back',
    subtitle: 'How can we help you today?',
  },
}
