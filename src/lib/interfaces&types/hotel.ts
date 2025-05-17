export type Room = {
  name: string;
  description: string;
  image: string;
  amenities: string[];
  price: number;
};

export type HotelInfo = {
  name: string;
  description: string;
};

export type Hotel = {
  name: string;
  description: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  checkInTime: string;
  checkOutTime: string;
  cancellation: number;
  cancellationFee: number;
  amenities: string[];
  rooms: Room[];
};
