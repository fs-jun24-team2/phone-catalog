import React from 'react';
import './NotFound.scss';
import { NotFoundSVG } from '../NotFoundSVG/NotFoundSVG.js';

export const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <NotFoundSVG />
      <h1 className="notfound__title">404 - Page Not Found</h1>
      <p className="notfound__text">
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="notfound__link">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
