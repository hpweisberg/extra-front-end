/* ---------==== custom forms ====--------- */

import { Profile } from "./models";

export interface ItemFormData {
  profileId: number;
  name: string;
  quantity: number;
  location?: string;
  experation?: string;
  photo?: string;
  Profile?: Profile;
  id?: number;
  createdAt: string;
  updateddAt: string;
}


/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
