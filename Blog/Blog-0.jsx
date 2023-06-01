import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const BlogTemplate = ({ image, title, subtitle, paragraphs, author, date, otherValue }) => {
  return (
    <div className="blog">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        {/* Add other Helmet configurations here */}
      </Helmet>

      <img src={image} alt="Main" className="blog-image" />
      <h2 className="blog-title">{title}</h2>
      <h4 className="blog-subtitle">{subtitle}</h4>
      <div className="blog-content">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="blog-footer">
        <p className="blog-author">{author}</p>
        <p className="blog-date">{date}</p>
      </div>
      <p className="blog-other-value">{otherValue}</p>
    </div>
  );
};

BlogTemplate.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  otherValue: PropTypes.string.isRequired,
};

export default BlogTemplate;


// In this updated prototype, I've added the Helmet component within the BlogTemplate component. The Helmet component allows you to dynamically set the page title and meta tags based on the content of each blog component.

// By using Helmet, you can set unique titles and meta descriptions for each blog, which can be beneficial for search engine optimization (SEO) and improving the visibility of your blog posts in search results.

// To apply this prototype in a real scenario, you would need to create separate instances of the BlogTemplate component, pass the necessary data as props, and use it within your application. For example, you could create a Blog-0s.jsx file and import the BlogTemplate component to render a specific blog post:


// import React from 'react';
// import BlogTemplate from './BlogTemplate';

// const Blog0s = () => {
//   // Define the data for the blog post
//   const image = 'path/to/image.jpg';
//   const title = 'Blog Title';
//   const subtitle = 'Blog Subtitle';
//   const paragraphs = ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'];
//   const author = 'Author Name';
//   const date = 'Publication Date';
//   const otherValue = 'Other Value';

//   return (
//     <BlogTemplate
//       image={image}
//       title={title}
//       subtitle={subtitle}
//       paragraphs={paragraphs}
//       author={author}
//       date={date}
//       otherValue={otherValue}
//     />
//   );
// };

// export default Blog0s;


// import React from 'react';
// import BlogTemplate from './BlogTemplate';

// const Blog0s = () => {
//   // Define the data for the blog post
//   const image = 'path/to/image.jpg';
//   const title = 'Blog Title';
//   const subtitle = 'Blog Subtitle';
//   const paragraphs = ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'];
//   const author = 'Author Name';
//   const date = 'Publication Date';
//   const otherValue = 'Other Value';

//   return (
//     <BlogTemplate
//       image={image}
//       title={title}
//       subtitle={subtitle}
//       paragraphs={paragraphs}
//       author={author}
//       date={date}
//       otherValue={otherValue}
//     />
//   );
// };

// export default Blog0s;
