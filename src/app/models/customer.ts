export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}

export interface ICustomer {
  id: number;
  name: string;
  picture: IPicture;
  address: string;
  city: string;
  state: string;
  location: ICoordinates;
  orderTotal: number;
}

export interface IResultInfo {
  length: number;
  pageIndex: number;
  pageSize: number;
}

export interface IResult {
  results: ICustomer[];
  info: IResultInfo;
}
