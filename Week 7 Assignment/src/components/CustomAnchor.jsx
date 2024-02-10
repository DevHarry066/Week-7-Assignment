// CustomAnchor.js
import React from 'react';

// React-like element representing an anchor tag
const reactElement = {
  type: 'a',
  props: {
    href: 'https://example.com',
    children: 'Click me to visit Google!'
  }
};

// Function to generate HTML code from React-like element
function generateHtmlFromReactElement(element) {
  // Create the opening tag
  let html = `<${element.type}`;

  // Add attributes to the opening tag
  for (const prop in element.props) {
    if (prop !== 'children') {
      html += ` ${prop}="${element.props[prop]}"`;
    }
  }

  // Close the opening tag
  html += '>';

  // Add children if present
  if (element.props.children) {
    html += element.props.children;
  }

  // Close the tag
  html += `</${element.type}>`;

  return html;
}

// Function to render the React-like element to a specific HTML element
function customRender(element, containerId) {
  const container = document.getElementById(containerId);
  container.style.color = 'blue';
  container.style.textDecoration = 'underline';
  container.innerHTML = generateHtmlFromReactElement(element);
}

// React component to render the anchor tag
function CustomAnchor() {
  React.useEffect(() => {
    // Render the anchor tag to the root div
    customRender(reactElement, 'root');
  }, []);

  return <div id="root"></div>;
}

export default CustomAnchor;
