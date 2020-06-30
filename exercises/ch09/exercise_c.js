// For this exercise, we consider helpers with the following signatures:
//
//   validateEmail :: Email -> Either String Email
//   addToMailingList :: Email -> IO([Email])
//   emailBlast :: [Email] -> IO ()
//
// Use `validateEmail`, `addToMailingList` and `emailBlast` to create a function
// which adds a new email to the mailing list if valid, and then notify the whole
// list.
const trace = curry((tag, x) => {
    console.log(tag, x);
    return x;
  });
// joinMailingList :: Email -> Either String (IO ())
const joinMailingList = compose(map(compose(chain(emailBlast), addToMailingList)), validateEmail);
