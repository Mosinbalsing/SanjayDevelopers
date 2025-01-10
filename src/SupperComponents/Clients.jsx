import React from 'react';

const Clients = () => {
  const clients = [
    { name: "Larsen & Toubro Ltd (L&T)", logo: "path_to_logo1" },
    { name: "GVPR Engineers Limited Hydrabad", logo: "path_to_logo2" },
    { name: "Pune Municipal Corporation (PMC)", logo: "path_to_logo3" },
    { name: "Public Works Department (PWD)", logo: "path_to_logo4" },
    { name: "GHV Power India Private Limited", logo: "path_to_logo5" },
    { name: "Pimpri Chinchwad Municipal Corporation (PCMC)", logo: "path_to_logo6" },
    { name: "Laxmi Engineering, Kolhapur and Pune", logo: "path_to_logo7" },
    { name: "Maharashtra Industrial Development Corporation (MIDC)", logo: "path_to_logo8" },
    { name: "Shivratna Constructions, Akluj", logo: "path_to_logo9" },
    { name: "Pragati Construction, Latur", logo: "path_to_logo10" },
    { name: "Umesh Sharad Sheth Company", logo: "path_to_logo11" },
    { name: "MM Holambe and Company", logo: "path_to_logo12" },
    { name: "Tilak Maharashtra Vidyapeeth (TMV)", logo: "path_to_logo13" },
    { name: "Enviro Control Private Limited", logo: "path_to_logo14" },
  ];

  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Our Prestigious Clients
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 w-auto object-contain"
              />
              <p className="text-sm font-semibold text-gray-700">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
