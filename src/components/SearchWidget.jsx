import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchWidget = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const availableWidgets = useSelector(state => state.dashboard.availableWidgets);

  const filteredWidgets = availableWidgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-widget">
      <input
        type="text"
        placeholder="Search Widgets"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredWidgets.map(widget => (
          <li key={widget.id}>{widget.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWidget;
