const {
  models: { User },
} = require("data");
const {
  validators: { validateId },
  errors: { NotFoundError, AuthError },
} = require("commons");

function retrieveCompany(companyId) {
  validateId(companyId, "company id");

  return User.findById(companyId).lean().then((company) => {
    if (!company) throw new NotFoundError("company not found");

    if (company.role !== 2) throw new AuthError("user is not a company");

    company.id = company._id.toString();
    
    delete company._id;
    delete company.__v;

    return company;
  });
}

module.exports = retrieveCompany;
