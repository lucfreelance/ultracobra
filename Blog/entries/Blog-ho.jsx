
import React from 'react';

const Blog = () => (
  <div>
    <h2>Ho</h2>
    <p>hohoho</p>
    {"
".join(f"<p key=<function index at 0x7f805a908790>>None</p>" for index, paragraph in enumerate(paragraphs.split('
')))}
    <p>Author: luc</p>
    <p>Date: 6/1&2023</p>
    <p>Other Value: hopnomoponoop</p>
  </div>
);

export default Blog;
