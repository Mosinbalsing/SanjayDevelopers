import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Phone, Mail, MapPinHouse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#2E2752] border-t flex justify-center ic text-white">
      <div className="flex w-[90%]">
        <div className="flex flex-col">
          <div className="lg:col-span-2 p-10">
            <h3 className="mb-6 text-lg font-semibold">Recent Post</h3>
            <div className="space-y-4">
              <article className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg" />
                <div>
                  <h4 className="font-medium">
                    Non sodales neque sodales ut etiam sit.
                  </h4>
                  <p className="text-sm text-gray-500">17 May 2021</p>
                </div>
              </article>
              <article className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg" />
                <div>
                  <h4 className="font-medium">
                    Elementum integer enim neque volutpat ac tincidunt vitae
                    semper.
                  </h4>
                  <p className="text-sm text-gray-500">17 May 2021</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="right flex flex-col w-[60%] p-10">
          <div className="flex flex-col">
            <h3 className="mb-6 text-lg font-semibold">Sanjay Developers</h3>
            <div className="flex space-x-24 justify-start w-full">
              <div className="flex flex-col space-y-6">
                <h4 className="font-medium">Follow Our Social Media</h4>
                <div className="flex gap-6">
                  <Link href="#" className="text-blue-600 bg-white hover:bg-blue-700 hover:text-white p-2 rounded-full">
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-red-700 hover:bg-red-700 hover:text-white p-2 rounded-full">
                    <Youtube className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-pink-600 hover:bg-pink-700 hover:text-white p-2 rounded-full"> 
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Any Queries</h4>
                <div className="flex items-center gap-2 text-sm ">
                  <Phone className="w-4 h-4" />
                  <span>+ 01 234 567 890 / (01213 456 789)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4"/>
                 <span>dRw0V@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                <MapPinHouse className="w-4 h-4"/>
                 <span>Sanjay Developers, Mumbai</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
