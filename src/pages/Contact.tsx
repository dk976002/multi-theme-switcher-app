import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-lg mb-4">If you have any questions or feedback about this demo project, feel free to reach out via email or our social channels.</p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
        Send Message
      </button>
    </div>
  );
};

export default Contact;