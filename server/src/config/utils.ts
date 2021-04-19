export const protect = (fn: any) => (parent: any, args: any, context: any) => {
  if (context.user) return fn(parent, args, context);
  else throw new Error("Auth Failed");
  // Graphql handles errors and sends proper responses
};
