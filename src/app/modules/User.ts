class Bio {
  intro: string;
  website: string;
}

class Name {
  title: string;
  first: string;
  last: string;
}

class Location {
  street: Object;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Object;
  timezone: Object;
}

export class User {
  userId: string;
  userName: string;
  profilePhoto: string;
  followedBy: Array<Object>;
  follows: Array<Object>;
  bio: Bio;
  posts: Array<Object>;
}

export class LoginData {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export class ImageData {
  large: string;
  medium: string;
  thumbnail: string;
}

export class UserResponseResult {
  results: Array<UserResponse>;
}

export class UserResponse {
  gender: string;
  name: Name;
  email: string;
  login: LoginData;
  dob: Object;
  registered: Object;
  phone: string;
  cell: string;
  id: Object;
  picture: ImageData;
  followedBy: Array<Object>;
  follows: Array<Object>;
  posts: Array<Object>;
  nat: string;
}
