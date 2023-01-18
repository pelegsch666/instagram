import React from 'react';
import { Postlist } from '../cmps/post-list';
import { Sidebar } from '../cmps/sidebar';

export function HomePage() {
  return (
    <>
      <Sidebar />
      <Postlist />
      <Postlist />
    </>
  );
}
