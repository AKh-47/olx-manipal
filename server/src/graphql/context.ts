import jwt from "jsonwebtoken";

export default async ({ req }: any) => {
  //@ts-ignore
  const token = req.headers.authorization;

  if (!process.env.SECRET) throw new Error("Environment Invalid");

  let user: any = null;

  if (token) {
    try {
      user = jwt.verify(token, process.env.SECRET);
    } catch (error) {
      throw new Error("Auth Failed");
    }
  }

  return { user };
};
