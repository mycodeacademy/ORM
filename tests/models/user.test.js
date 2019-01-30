const model = require('../../models');

describe('user generate', () => {
  beforeEach(() => {
    model.User.truncate();
  });

  it('shoud make entry in the database', async () => {
    await model.User.generate('abhinav', new Date(2019, 1, 29));
    await model.User.generate('tonystark', new Date(1970, 1, 1));
    expect(await model.User.count()).toEqual(2);
  });
});
describe('Fetch Users', () => {
  beforeEach(() => {
    model.User.truncate();
  });
  it('Should return number of entries of the table', async () => {
    await model.User.generate('abhinav1', new Date());
    const users = await model.User.getAllUsers();
    expect(users.length).toEqual(1);
  });
  it('Should return entries of the table', async () => {
    await model.User.generate('abhinav2', new Date());
    const users = await model.User.getAllUsers();
    expect(users[0].dataValues.name).toEqual('abhinav2');
  });
  it('Should return undefined if no entries in table', async () => {
    const users = await model.User.getAllUsers();
    expect(users[0]).toEqual(undefined);
  })
})