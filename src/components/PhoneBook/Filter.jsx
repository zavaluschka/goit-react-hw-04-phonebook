import css from './PhoneBook.module.css';

export const Filter = ({ handleInput, state }) => {
  return (
    <div>
      <h2 className={css.title}>Contacts</h2>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={state.filter}
        onChange={handleInput}
        required
      />
    </div>
  );
};
