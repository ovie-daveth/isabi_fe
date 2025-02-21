import React, { useState } from "react";

const countryCodes = [
  { code: "+234", country: "Nigeria" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  // Add more countries as needed
];

const PhoneInput = ({ onChange }: { onChange: (value: string) => void }) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
    onChange(`${e.target.value}${phoneNumber}`);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(value);
    onChange(`${selectedCode}${value}`);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      {/* Country Code Dropdown */}
      <select
        className="px-3 py-2 bg-gray-100 border-r border-gray-300 focus:outline-none"
        value={selectedCode}
        onChange={handleCodeChange}
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.code}>
            {country.code} ({country.country})
          </option>
        ))}
      </select>

      {/* Phone Number Input */}
      <input
        type="text"
        className="flex-1 px-3 py-2 focus:outline-none"
        placeholder="812-234-4343"
        value={phoneNumber}
        onChange={handleNumberChange}
      />
    </div>
  );
};

export default PhoneInput;
