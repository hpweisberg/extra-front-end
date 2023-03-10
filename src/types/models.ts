/* ---------===== custom props ====--------- */

export interface Item {
  profileId: number;
  name: string;
  quantity: string;
  location?: string;
  experation?: string;
  Profile?: Profile;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}


/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
