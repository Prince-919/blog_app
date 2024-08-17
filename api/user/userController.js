export const testController = async (req, res) => {
  res.json({ message: "API is working!" });
};

export const updateUser = (req, res, next) => {
  console.log(req.user);
};
