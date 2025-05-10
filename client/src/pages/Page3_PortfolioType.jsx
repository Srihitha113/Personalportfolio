import { useState } from 'react';

const Page3_PortfolioType = ({ onNext }) => {
  const [type, setType] = useState('');

  const handleSubmit = () => {
    onNext({ type });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Portfolio Type</h2>

      <select className="w-full p-2 mb-4 border rounded" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select</option>
        <option>Simple (One Page)</option>
        <option>Multi-page (Detailed Projects, About, Contact)</option>
        <option>Portfolio with Blog Section</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Page3_PortfolioType;

