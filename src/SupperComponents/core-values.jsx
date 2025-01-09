import { Eye, ShieldCheck, Heart, UserCheck } from "lucide-react";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

function ValueCard({ icon, title, description, animation }) {
  return (
    <div
      className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 text-center relative group max-w-sm"
      data-aos={animation}
    >
      <div className="mb-6 flex justify-center relative">
        <div className="relative w-16 h-16 border-2 border-dotted border-gray-200 rounded-full flex items-center justify-center">
          <div className="absolute w-10 h-10 -top-2 -right-2 bg-orange-500 rounded-full z-0"></div>
          <div className="relative text-blue-900 z-10">{icon}</div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>

      {/* Green line on hover */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}

export const CoreValues = () => {
  useEffect(() => {
    AOS.init({
          duration: 1000,
          once: true,
        });
  }, []);

  const values = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency",
      description:
        "We prioritize complete openness in all our interactions, ensuring that every stakeholder feels informed and confident in our processes.",
      animation: "fade-up",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integrity",
      description:
        "By upholding the highest ethical standards in every facet of our business, we cultivate trust through honesty and fairness.",
      animation: "fade-up",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Trust & Loyalty",
      description:
        "We cherish long-term relationships, nurturing trust and loyalty with our investors, customers, and partners.",
      animation: "fade-up",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Customer Focus",
      description:
        "Our customers are at the center of all we do, and we aim to surpass their expectations with every project.",
      animation: "zoom-in",
    },
  ];

  return (
    <div className="container mx-auto px-12 py-12 flex flex-wrap justify-center gap-8">
      {values.map((value, index) => (
        <div
          key={index}
          className={`${
            index === values.length - 1 ? "flex justify-center w-full" : ""
          }`}
        >
          <ValueCard
            icon={value.icon}
            title={value.title}
            description={value.description}
            animation={value.animation}
          />
        </div>
      ))}
    </div>
  );
};
