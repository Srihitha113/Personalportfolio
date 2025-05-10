import { useState } from 'react';

const Page6_FinalDetails = ({ onNext, data }) => {
  const [internship, setInternship] = useState('');
  const [certification, setCertification] = useState('');
  const [addContact, setAddContact] = useState(false);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setPhone(input);
      if (input.length > 10) {
        setError('Phone number must be 10 digits');
      } else {
        setError('');
      }
    }
  };

  const handleSubmit = () => {
    if (addContact && phone.length !== 10) {
      setError('Phone number must be exactly 10 digits');
      return;
    }

    const final = {
      internship,
      certification,
      phone: addContact ? phone : null
    };

    setError('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onNext(final); // Proceed after showing success
    }, 2000); // 2-second delay before moving to the next step
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Final Details</h2>

      <label className="block mb-2">Have you done any internships?</label>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={internship}
        onChange={(e) => setInternship(e.target.value)}
      >
        <option value="">Select</option>
        <option>YES</option>
        <option>NO</option>
      </select>

      <label className="block mb-2">Do you want a section for Certifications?</label>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={certification}
        onChange={(e) => setCertification(e.target.value)}
      >
        <option value="">Select</option>
        <option>YES</option>
        <option>NO</option>
      </select>

      <label className="block mb-2">Do you want to add contact details?</label>
      <select
        className="w-full p-2 mb-2 border rounded"
        value={addContact ? "Yes" : "No"}
        onChange={(e) => setAddContact(e.target.value === "Yes")}
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      {addContact && (
        <>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={10}
            className="w-full p-2 border rounded mb-1"
          />
          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}
        </>
      )}

      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {success && (
        <p className="text-green-600 text-center mt-4 transition-opacity duration-500 ease-in-out">
          ✅ Form submitted successfully!
        </p>
      )}
    </div>
  );
};

export default Page6_FinalDetails;
