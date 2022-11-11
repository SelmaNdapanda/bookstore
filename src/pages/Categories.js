import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const res = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <span>{res}</span>
      <button type="button" className="categoryBtn" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
};

export default Categories;
