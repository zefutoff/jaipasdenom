import React from 'react';
import Input from './Common/Input';

function fisrtLunchMenu() {
  return (
    <div className="menu-background">
      <p>Prénom</p>
      <Input
        type="text"
        placeholder=""
        value=""
        onChange={() => {}}
        className="filter-settings-search"
      />
      <p>Date de naissance</p>
      <input type="date" />
      <p>Langues</p>
      <select>
        <option value="Français">Français</option>
        <option value="Anglais">Français</option>
      </select>
      <p>Thème</p>
      <input type="checkbox" />
    </div>
  );
}

export default fisrtLunchMenu;
