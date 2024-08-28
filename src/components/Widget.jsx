import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/dashboardSlice';
import './Style.css';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget">
      <div className="widget-content">
        <h4>{widget.name}</h4>
        <p>{widget.text}</p>
      </div>
      <button className="remove-button" onClick={handleRemove}>×</button>
    </div>
  );
};

export default Widget;
