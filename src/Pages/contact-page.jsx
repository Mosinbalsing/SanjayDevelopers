import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CHero from "@/SupperComponents/contact-hero";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative top-[-200px]">
      <CHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Office Information */}
          <div
            className="space-y-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div>
              <h1 className="text-4xl font-bold">Office</h1>
              <div className="mt-1 h-1 w-12 bg-blue-500" />
            </div>

            <p className="text-muted-foreground">
              Have a question? Concern? Request? We'd love to hear from you.
              Connect with us through the following ways.
            </p>

            <div className="space-y-6">
              {/* Office Info Sections */}
              <div>
                <h2 className="font-semibold">Address :</h2>
                <p className="mt-1 text-muted-foreground">
                  # 470 Muneesh Legacy, 1st Floor, 13th Cross, 3rd Main,
                  Indiranagar
                  <br />
                  2nd Stage, Bangalore, Karnataka - 560038.
                </p>
              </div>
              {/* Add more office details here */}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="space-y-8 border border-gray-300 p-6 rounded-lg shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div>
              <h2 className="text-3xl font-bold">Fill Your Queries!</h2>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="Phone" type="tel" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" placeholder="Email" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Company" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  className="min-h-[150px]"
                  id="message"
                  placeholder="Message"
                />
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600" size="lg">
                Send Question
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
