import React from 'react';
import AddWidget from './AddWidget';
import './Style.css';
import Widget from './Widget';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
      <AddWidget categoryId={category.id} />
    </div>
  );
};

export default Category;
