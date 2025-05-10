import { useState } from 'react';

const Page1_Login = ({ onNext }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = () => {
    onNext({ name, year, program });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login Details</h2>

      <label className="block mb-2">Your Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2">Current Year of Study:</label>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>Other</option>
      </select>

      <label className="block mb-2">Degree Program:</label>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
      >
        <option value="">Select</option>
        <option>B. Tech [Computer science]</option>
        <option>B. Tech [other branches]</option>
        <option>MCA</option>
        <option>B. Sc</option>
        <option>Other</option>
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default Page1_Login;
