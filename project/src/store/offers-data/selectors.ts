import {NameSpace} from '../../const';
import {OffersData, State} from '../../types/state';
import {City, Offer, Offers} from '../../types/offer';

export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOfferDataLoading;
export const getErrorStatus = (state: State): OffersData['isError'] => state[NameSpace.Data].isError;
export const getActiveCity = (state: State): City => state[NameSpace.Data].activeCity;
export const getActiveSortType = (state: State): string => state[NameSpace.Data].activeSortType;
export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Data].nearbyOffers;
export const getActiveOffer = (state: State): Offer | null => state[NameSpace.Data].activeOffer;
