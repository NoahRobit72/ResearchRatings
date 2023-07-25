import React from 'react';
import { Link } from "react-router-dom"

import '../css/Header.css';

function HeaderBlank() {
  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
    <nav>
    </nav>
  </header>
  );
}

export default HeaderBlank;

