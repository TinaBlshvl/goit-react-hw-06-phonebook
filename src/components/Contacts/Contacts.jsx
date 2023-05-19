import PropTypes from 'prop-types';
import css from '../Contacts/Contacts.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'reactRedux/sectors';

import { filterContacts } from 'reactRedux/sliceFilter';
import { deleteContact } from 'reactRedux/sliceContacts';
export const Contacts = ({ title }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterSearch = e => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  const filteredSearch = () => {
    const normaliseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <section className={css.section}>
      <h1 className={css.title}>Contacts</h1>

      <label className={css.header}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterSearch}
        className={css.input}
      />

      <ul>
        {filteredSearch().map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p className={css.contact}>
              {name}: {number}
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                deleteItem(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
};
