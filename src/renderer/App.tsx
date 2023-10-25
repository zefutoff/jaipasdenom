import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import settings from '../../assets/icons/parametres.svg';
import menu from '../../assets/icons/menu.svg';
import pencil from '../../assets/icons/pencil.svg';
import cross from '../../assets/icons/cross.svg';
import redCross from '../../assets/icons/red_cross.svg';
import coche from '../../assets/icons/green_coche.svg';

import FilterButton from '../components/Buttons/FilterButton';
import Modal from '../components/Buttons/Modal';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';

import './App.css';

function Hello() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuButtonStyle = {
    left: isMenuOpen ? '350px' : '0',
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAddCategory = () => {
    setIsAddCategoryOpen(!isAddCategoryOpen);
  };

  const closeAddCategory = () => {
    setIsAddCategoryOpen(false);
  };

  const titles = [
    'tout',
    'Santé',
    'voyage',
    'ptite pute',
    'bite',
    'Travail',
    'Découvertes',
    'Famille',
    'Amitié',
  ];

  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const toggleButtonSelection = (title: string) => {
    if (title === 'tout') {
      setSelectAll(!selectAll);
      setSelectedButtons([]);
    } else {
      if (selectAll) setSelectAll(false);
      if (selectedButtons.includes(title)) {
        setSelectedButtons(selectedButtons.filter((btn) => btn !== title));
      } else {
        setSelectedButtons([...selectedButtons, title]);
      }
    }
  };

  return (
    <div>
      <div className="body">
        <div className="settings">
          <button
            type="button"
            className="menu-button"
            onClick={toggleMenu}
            style={menuButtonStyle}
          >
            <img
              className="settings-button"
              src={isMenuOpen ? cross : menu}
              alt="Menu"
            />
          </button>
        </div>
        <div className="title">
          <p>Bienvenue dans vos souvenirs, USER</p>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            {/* Ajoutez d'autres options de menu ici */}
          </ul>
        </div>
        <div className="button-container">
          <div className="filter-buttons">
            {titles.map((title) => (
              <FilterButton
                title={title}
                active={
                  (title === 'tout' && selectAll) ||
                  selectedButtons.includes(title)
                }
                onClick={toggleButtonSelection}
                key={title}
              />
            ))}
          </div>
          <Button
            className="menu-button"
            onClick={toggleModal}
            label={<img src={settings} alt="settings" />}
          />
          <Modal isOpen={isModalOpen} onClose={toggleModal}>
            <h2>Paramétres des filtres</h2>
            <Input
              type="text"
              placeholder="Rechercher un filtre...."
              value=""
              onChange={() => {}}
              className="filter-settings-search"
            />
            <div className="filter-list">
              <h3>Filtres</h3>
              <div className="filter-button-list">
                <Button
                  label="+"
                  onClick={toggleAddCategory}
                  className="filter-button"
                />
                {isAddCategoryOpen && (
                  <div className="add-category">
                    <input
                      className="filter-settings-search"
                      type="text"
                      placeholder="Nouvelle catégorie..."
                    />
                    <Button
                      label={<img src={redCross} alt="annuler" />}
                      onClick={closeAddCategory}
                      className="button"
                    />
                    <Button
                      label={<img src={coche} alt="valider" />}
                      onClick={closeAddCategory}
                      className="button"
                    />
                  </div>
                )}
                {titles.map((title) => (
                  <button
                    type="button"
                    className="filter-button"
                    onClick={closeAddCategory}
                  >
                    {title} <img src={pencil} alt="pencil" />
                  </button>
                ))}
              </div>
            </div>
          </Modal>
        </div>
        <div className="main">
          <p>Module à trouver</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
