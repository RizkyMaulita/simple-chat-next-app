import bcrypt from "bcryptjs";

export const hashText = (plainText: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(plainText, salt);
};

export const compareText = (plainText: string, hash: string) => {
  return bcrypt.compareSync(plainText, hash);
};
