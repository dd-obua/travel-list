import { useState } from 'react';

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleTextChange = (e) => setDescription(e.target.value);

  const handleSelectChange = (e) => setQuantity(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 👷‍♀️ trip.</h3>

      <select onChange={handleSelectChange} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={handleTextChange}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
