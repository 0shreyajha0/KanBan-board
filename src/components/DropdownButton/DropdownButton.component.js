// DropdownButton.js

import React, { useState, useRef, useEffect } from 'react';
import { FaCaretDown, FaChevronDown, FaReact } from 'react-icons/fa';
import styles from './DropdownButton.module.css';

export const DropdownButton = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const [isSecondNestedDropdownOpen, setSecondNestedDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const nestedDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        nestedDropdownRef.current &&
        !nestedDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        setNestedDropdownOpen(false);
        setSecondNestedDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleNestedDropdownClick = () => {
    setNestedDropdownOpen(!isNestedDropdownOpen);
  };
  const handleSecondNestedDropdownClick = () => {
    setSecondNestedDropdownOpen(!isSecondNestedDropdownOpen);
  };

  const groupingOnChangeHandler = (value) => {
    props.updateGrouping(value);
    setDropdownOpen(false);
    setNestedDropdownOpen(false);
  };
  const orderingOnChangeHandler = (value) => {
    props.updateOrdering(value);
    setDropdownOpen(false);
    setSecondNestedDropdownOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={handleButtonClick}>
        <FaReact className={styles.icon} />
        <span className={styles.text}>Display</span>
        <FaCaretDown className={styles.icon} />
      </button>

      {isDropdownOpen && (
        <div className={styles.dropdownContent} ref={dropdownRef}>
          <div className={styles.dropdownRow}>
            <span className={styles.title}>Grouping</span>
            <button className={styles.nestedDropdownButton} onClick={handleNestedDropdownClick}>
              {props.currentGrouping === 'status' ? 'Status' : 'Priority'}
              <FaChevronDown className={styles.icon} />
            </button>
            {isNestedDropdownOpen && (
              <div className={styles.nestedDropdownContent} ref={nestedDropdownRef}>
                <button onClick={() => groupingOnChangeHandler('status')} className={styles.dropdownRow}>
                  <span className={styles.title}>Status</span>
                </button>
                <button onClick={() => groupingOnChangeHandler('priority')} className={styles.dropdownRow}>
                  <span className={styles.title}>Priority</span>
                </button>
              </div>
            )}
          </div>
          <div className={styles.dropdownRow}>
            <span className={styles.title}>Ordering</span>
            <button className={styles.nestedDropdownButton} onClick={handleSecondNestedDropdownClick}>
              {props.currentOrdering === 'priority' ? 'Priority' : 'Title'}
              <FaChevronDown className={styles.icon} />
            </button>
            {isSecondNestedDropdownOpen && (
              <div className={styles.nestedSecondDropdownContent} ref={nestedDropdownRef}>
                <button onClick={() => orderingOnChangeHandler('priority')} className={styles.dropdownRow}>
                  <span className={styles.title}>Priority</span>
                </button>
                <button onClick={() => orderingOnChangeHandler('title')} className={styles.dropdownRow}>
                  <span className={styles.title}>Title</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
