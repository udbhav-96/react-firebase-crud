import React, { useState, useEffect } from 'react';
import { firestore, collection, addDoc, getDocs, updateDoc, deleteDoc } from '../firebase';

const CRUD = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'items'));
    const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setData(items);
  };

  const handleAddItem = async () => {
    try {
      await addDoc(collection(firestore, 'items'), { text: newItem });
      setNewItem('');
      fetchData();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleUpdateItem = async (id, newText) => {
    try {
      const docRef = collection(firestore, 'items', id);
      await updateDoc(docRef, { text: newText });
      fetchData();
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const docRef = collection(firestore, 'items', id);
      await deleteDoc(docRef);
      fetchData();
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={() => handleUpdateItem(item.id, prompt('Update item:', item.text))}>
              Update
            </button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default CRUD;
