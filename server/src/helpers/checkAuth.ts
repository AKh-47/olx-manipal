const checkAuth = (user: any) => {
  if (!user) {
    return {
      success: false,
      message: "You need to be logged in to access this page!",
    };
  }
  return null;
};

export default checkAuth;
