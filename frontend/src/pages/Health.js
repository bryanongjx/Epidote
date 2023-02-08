import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Health() {
  return (
    <>
      <h1>Health page</h1>
      <Link to="/">Home</Link>
    </>
  );
}