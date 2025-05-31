import React from 'react';

interface HelloWorldProps {
  message?: string;
}

export default function HelloWorld({ message = 'Hello, World!' }: HelloWorldProps) {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">{message}</h2>
      <p className="mb-4">This is a React island component in the Astro project.</p>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Count: {count}
        </button>
        <span className="text-gray-600">Click the button to increase the counter</span>
      </div>
    </div>
  );
} 