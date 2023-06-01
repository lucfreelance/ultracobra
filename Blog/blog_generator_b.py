import os

def generate_blog_component(file_name, index):
    template = f"""

const Blog{index} = () => {{
    return (
        <div>
            {/* Add your JSX code for Blog-{index} here */}
        </div>
    );
}}

export default Blog{index};
"""

    with open(file_name, 'w') as file:
        file.write(template)

def main():
    template_path = './templates/index.html'
    base_path = './Blog'
    num_files_to_generate = 2  # Change this to the number of files you want to generate

    # Read the template index.html file
    with open(template_path, 'r') as template_file:
        template_content = template_file.read()

    for i in range(2, num_files_to_generate + 1):
        file_name = os.path.join(base_path, f'Blog-{i}.jsx')
        generate_blog_component(file_name, i)
        print(f'Successfully generated {file_name}')

    print("All Blog components generated successfully!")

if __name__ == '__main__':
    main()




# This script is a standalone Python script that generates multiple React  components (Blog-X.jsx files) based on a template. It doesn't rely on Flask or any web interface. The script defines a function (generate_blog_component) that takes a file name and index as parameters and generates the JSX code for a blog component. It uses a template string to create the JSX code with the provided index. The main function sets the base path and the number of files to generate, then iterates over the range of indices to generate the files. It calls the generate_blog_component function for each index and saves the generated JSX code to the corresponding file. This script is meant to be run directly as a Python script. is a standalone Python script that generates multiple React components based on a template. It is suitable if you want to generate a predefined set of React components without the need for a web interface.