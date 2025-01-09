import { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

export const MissionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="container px-12 py-12 h-[300px]" // Static height applied
      data-aos="fade-up" // Apply animation to the entire container
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full">
        <div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0A2647] leading-tight"
            data-aos="zoom-in" // Apply specific animation to the heading
          >
            Building a Foundation for Lasting Relationships
          </h2>
        </div>
        <div className="space-y-8">
          <Tabs defaultValue="about" className="w-full h-full">
            <TabsList
              className="w-full justify-start border-b rounded-none h-12 bg-transparent p-0 space-x-8"
              data-aos="fade-right" // Add animation to the tabs list
            >
              <TabsTrigger
                value="about"
                className="data-[state=active]:border-[#FF6B35] data-[state=active]:text-[#0A2647] border-b-2 border-transparent px-0 rounded-none text-gray-500"
              >
                ABOUT US
              </TabsTrigger>
              <TabsTrigger
                value="mission"
                className="data-[state=active]:border-[#FF6B35] data-[state=active]:text-[#0A2647] border-b-2 border-transparent px-0 rounded-none text-gray-500"
              >
                MISSION
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                className="data-[state=active]:border-[#FF6B35] data-[state=active]:text-[#0A2647] border-b-2 border-transparent px-0 rounded-none text-gray-500"
              >
                VISION
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6 h-[300px]" data-aos="fade-in">
              <div className="space-y-4 text-gray-600">
                <p>
                  At Sanjay Developers, we specialize in luxury residential, commercial, and redevelopment projects. With a decade of experience and a commitment to transparency, we have built a reputation for excellence. Customer satisfaction and quality remain at the core of our operations as we strive for sustainable development.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="mission" className="mt-6 h-[300px]" data-aos="fade-in">
              <div className="space-y-4 text-gray-600">
                <p>
                  Our mission is to deliver innovative, cost-effective solutions in the real estate sector. We are committed to building trust, reliability, and environmental sustainability across luxury and redevelopment projects.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="vision" className="mt-6 h-[300px]" data-aos="fade-in">
              <div className="space-y-4 text-gray-600">
                <p>
                  We aim to expand our presence in Pune and beyond, fostering growth through excellence in real estate and redevelopment projects. Our vision is to exceed the expectations of customers, investors, and vendors while maintaining the highest standards of quality and transparency.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
