from flask import Flask, render_template, request
import os

# Create a Flask app instance:
app = Flask(__name__)

# Define the route for rendering the index.html template:


@app.route('/')
def index():
    return render_template('index.html')


# Define the directory where the Blog-X.jsx files will be saved
blog_directory = os.path.join(os.getcwd(), 'Blog', 'entries')

# Define the route for processing the form submission:


@app.route('/create-blog', methods=['POST'])
def create_blog():
    if request.method == 'POST':
        image = request.form.get('image')
        title = request.form.get('title')
        subtitle = request.form.get('subtitle')
        paragraphs = request.form.get('paragraphs')
        author = request.form.get('author')
        date = request.form.get('date')
        other_value = request.form.get('otherValue')

        # Process the form data and generate the blog post content
        # You can customize this part based on your requirements

        # Generate the filename for the new JSX component
        filename = f"Blog-{title.replace(' ', '-')}.jsx"

        # Specify the file path
        filepath = os.path.join(blog_directory, filename)

        # Generate the content for the JSX component
        jsx_content = f'''
import React from 'react';

const Blog = () => (
  <div>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    {{"\n".join(f"<p key={index}>{paragraph}</p>" for index, paragraph in enumerate(paragraphs.split('\n')))}}
    <p>Author: {author}</p>
    <p>Date: {date}</p>
    <p>Other Value: {other_value}</p>
  </div>
);

export default Blog;
'''

        # Save the JSX component to a file
        with open(filepath, 'w') as file:
            file.write(jsx_content)

        # Modify the App.jsx file to insert the new JSX component at the top of the <main> element
        app_jsx_path = os.path.join(
            os.path.dirname(os.getcwd()), '..', 'App.jsx')
        with open(app_jsx_path, 'r+') as app_file:
            content = app_file.read()
            app_file.seek(0, 0)
            app_file.write(content.replace(
                '<main>', f'<main>\\n<Blog-{title.replace(" ", "-")}/>\\n'))

        # Return a success message or redirect to a different page
        response = 'Blog post created successfully!'
        return response, 200
    else:
        # Handle cases where the request method is not POST
        return 'Invalid request method'


# Add the following conditional block to run the Flask app only when the script is executed directly:
if __name__ == '__main__':
    app.run()
