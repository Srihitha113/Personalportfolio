import { useState } from 'react';

const Page5_TechUsed = ({ onNext }) => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);

  // Handle changes in frontend or backend selections
  const handleChange = (value, group, setGroup) => {
    setGroup(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  // Combine frontend and backend selections and pass them to the next page
  const handleSubmit = () => {
    const technologies = [...frontend, ...backend]; // Combine frontend and backend arrays
    onNext({ technologies });  // Passing a single "technologies" array
  };

  const frontendOptions = ["React.js", "Next.js", "Bootstrap", "Tailwind CSS", "Other", "Not worked with Frontend yet"];
  const backendOptions = ["Node.js+Express.js", "Django (python)", "Firebase (No Backend Needed)", "PHP+ MySQL", "Other", "Not worked with Backend yet"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Technologies Used</h2>

      <h3 className="font-semibold mb-2">Frontend Frameworks:</h3>
      {frontendOptions.map(opt => (
        <label key={opt} className="block mb-2">
          <input type="checkbox" className="mr-2" onChange={() => handleChange(opt, frontend, setFrontend)} />
          {opt}
        </label>
      ))}

      <h3 className="font-semibold mt-4 mb-2">Backend Technologies:</h3>
      {backendOptions.map(opt => (
        <label key={opt} className="block mb-2">
          <input type="checkbox" className="mr-2" onChange={() => handleChange(opt, backend, setBackend)} />
          {opt}
        </label>
      ))}

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Page5_TechUsed;
