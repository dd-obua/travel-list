import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => setItems((items) => [...items, item]);

  const handleToggleItem = (id) => {
    return setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      });
    });
  };

  const handleDeleteItem = (id) => {
    return setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearList = () => {
    const comfirmed = window.confirm('Are you sure you want to delete all items?');
    comfirmed && setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
