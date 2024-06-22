const checkRoles = (sysRole) => {
  return (req, res, next) => {
    const userRole = [req.body.role || req.headers.role];
    if (!userRole) throw new Error("Role is missing");
    //.some gives the boolean result
    const result = userRole.some((role) => sysRole.includes(role));
    if (!result) throw new Error("!Permission Denied!");
    next();
  };
};

module.exports = checkRoles;
