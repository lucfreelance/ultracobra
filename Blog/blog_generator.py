from flask import Flask, render_template, request
import os

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create-blog', methods=['POST'])
def create_blog():
    # Retrieve the blog post data from the request
    image = request.form['image']
    title = request.form['title']
    subtitle = request.form['subtitle']
    paragraphs = request.form['paragraphs'].split('\n')
    author = request.form['author']
    date = request.form['date']
    otherValue = request.form['otherValue']

    # Generate the JSX code for the new blog post
    jsx_code = f'''
import React from 'react';
import BlogTemplate from './BlogTemplate';

const BlogX = () => {{
  return (
    <BlogTemplate
      image="{image}"
      title="{title}"
      subtitle="{subtitle}"
      paragraphs={{{paragraphs}}}
      author="{author}"
      date="{date}"
      otherValue="{otherValue}"
    />
  );
}};

export default BlogX;
    '''

    # Save the JSX code to a new file
    blog_file = f'Blog-{title.replace(" ", "-")}.jsx'
    with open(blog_file, 'w') as file:
        file.write(jsx_code)

    return 'Blog post created successfully!'


if __name__ == '__main__':
    app.run()
