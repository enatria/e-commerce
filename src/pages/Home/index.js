import React from 'react';
import ListProducts from '../../components/organisms/ListProducts';
import { useSelector } from 'react-redux';

export default function Home() {
  
  return (
    <div>
      Home
      <ListProducts/>
    </div>
  );
}
