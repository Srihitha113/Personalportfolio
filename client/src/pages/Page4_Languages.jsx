import { useState } from 'react';

const Page4_Languages = ({ onNext }) => {
  const [languages, setLanguages] = useState([]);

  const handleChange = (lang) => {
    setLanguages(prev => prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]);
  };

  const handleSubmit = () => {
    onNext({ languages });
  };

  const options = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "C++", "Other"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Programming Languages</h2>

      {options.map(opt => (
        <label key={opt} className="block mb-2">
          <input type="checkbox" className="mr-2" onChange={() => handleChange(opt)} />
          {opt}
        </label>
      ))}

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Page4_Languages;

