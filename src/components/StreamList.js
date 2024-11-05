import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function StreamList() {
  const [inputValue, setInputValue] = useState('');
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({ index: null, value: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setEvents([...events, { name: inputValue, watched: false }]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentEdit({ index, value: events[index].name });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEvents = [...events];
    updatedEvents[currentEdit.index].name = currentEdit.value;
    setEvents(updatedEvents);
    setIsEditing(false);
    setCurrentEdit({ index: null, value: '' });
  };

  const toggleWatch = (index) => {
    const updatedEvents = events.map((event, i) => {
      if (i === index) {
        return { ...event, watched: !event.watched };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1>Welcome to StreamList</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter your movie/show:
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </label>
        <button type="submit">
          <FontAwesomeIcon icon={faPlusCircle} /> Submit
        </button>
      </form>

      {isEditing && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={currentEdit.value}
            onChange={(e) => setCurrentEdit({ ...currentEdit, value: e.target.value })}
          />
          <button type="submit">Update</button>
        </form>
      )}

      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.name} {event.watched ? '(Watched)' : '(Unwatched)'}
            <button onClick={() => toggleWatch(index)}>
              {event.watched ? 'Unwatch' : 'Watch'}
            </button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
