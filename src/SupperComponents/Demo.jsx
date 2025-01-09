import Link from "next/link"
import { Facebook, Youtube, Instagram, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Recent Posts Section */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold">Recent Post</h3>
            <div className="space-y-4">
              <article className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg" />
                <div>
                  <h4 className="font-medium">Non sodales neque sodales ut etiam sit.</h4>
                  <p className="text-sm text-gray-500">17 May 2021</p>
                </div>
              </article>
              <article className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg" />
                <div>
                  <h4 className="font-medium">Elementum integer enim neque volutpat ac tincidunt vitae semper.</h4>
                  <p className="text-sm text-gray-500">17 May 2021</p>
                </div>
              </article>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Lans.io</h3>
            <div className="space-y-4">
              <h4 className="font-medium">Follow Our Social Media</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-pink-600 hover:text-pink-700">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Any Queries</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+ 01 234 567 890 / (01213 456 789)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Sections */}
          {[1, 2, 3].map((index) => (
            <div key={index}>
              <h3 className="mb-6 text-lg font-semibold">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Global Location
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Missions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

