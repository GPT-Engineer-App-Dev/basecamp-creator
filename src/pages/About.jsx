import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About My App</h1>
        <p className="text-gray-600 mb-4">
          This is a bare-bones application created as a starting point. You can modify and expand it to build your desired features and functionality.
        </p>
        <p className="text-gray-600">
          Feel free to add more components, pages, and integrate with backend services as needed.
        </p>
      </div>
    </Layout>
  );
};

export default About;