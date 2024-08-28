import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../features/dashboardSlice';

const AddWidget = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const dispatch = useDispatch();

  const handleAddWidget = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      dispatch(addWidget({ categoryId, name: widgetName, text: widgetText }));
      setWidgetName('');
      setWidgetText('');
    }
  };

  return (
    <div className="add-widget">
      <form onSubmit={handleAddWidget}>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button type="submit">+ Add Widget</button>
      </form>
    </div>
  );
};

export default AddWidget;
