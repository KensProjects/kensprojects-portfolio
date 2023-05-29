export type TEmail = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

export const initialEmail = {
  name: "",
  email: "",
  subject: "",
  body: "",
};
export const emailAction:string = process.env.NEXT_PUBLIC_EMAIL as string