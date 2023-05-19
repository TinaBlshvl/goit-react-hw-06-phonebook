import css from '../Form/Form.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'reactRedux/sliceContacts';
import { getContacts } from 'reactRedux/sectors';

export const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addName = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    const checkedName = contacts.find(elem => {
      return elem.name === name.value;
    });

    if (checkedName) {
      alert(`${name.value} is already in contacts.`);
      return;
    }

    dispatch(addContact(name.value, number.value));

    name.value = '';
    number.value = '';
  };

  return (
    <form action="" onSubmit={addName} className={css.form}>
      <h1 className={css.name}>Name</h1>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="The name must contain only letters!"
        required
      />

      <h2 className={css.name}>Number</h2>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="The phone number must contain only numbers!"
        required
      />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
