import { useState } from 'react';

const Page2_CareerPath = ({ onNext }) => {
  const [career, setCareer] = useState('');

  const handleSubmit = () => {
    onNext({ career });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Career Path</h2>

      <select className="w-full p-2 mb-4 border rounded" value={career} onChange={(e) => setCareer(e.target.value)}>
        <option value="">Select</option>
        <option>Frontend Development</option>
        <option>Backend Development</option>
        <option>Full Stack Development</option>
        <option>UI/UX Design</option>
        <option>Data Science & AI</option>
        <option>Cyber Security</option>
        <option>Mobile App Development</option>
        <option>Other</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Page2_CareerPath;
