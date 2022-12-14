import {Cities} from './types/offer';
import {Icon} from 'leaflet';

export const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

export const currentCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Property = '/offer/:id',
  Error = '*'
}

export const cities: Cities = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
];

export const sortTypes: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SendReviewStatus {
  Success = 'SUCCESS',
  UnSuccess = 'UN_SUCCESS',
  Pending = 'PENDING',
}

export enum ReviewRestrictions {
  MinSymbols = 50,
  MaxSymbols = 300,
}

export enum ReviewsNumber {
  MinReviews = 0,
  MaxReviews = 10,
}

export enum PicturesNumber {
  MinPictures = 0,
  MaxPictures = 6,
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
}

export const HousingType = ['apartment', 'room', 'house', 'hotel'] as const;

export const OneStarPercent = 20;

export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';

export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
