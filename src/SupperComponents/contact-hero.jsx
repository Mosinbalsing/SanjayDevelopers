import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function CHero() {
  return (
    <section className="relative bg-[rgb(55,94,191)] bg-[linear-gradient(90deg,_rgba(0,212,255,1)_0%,_rgba(9,9,121,1)_31%,_rgba(2,0,36,1)_100%)] pb-[120px] xl:pt-[250px] dark:bg-dark min-h-[650px] lg:pt-[150px] px-4 sm:px-6 lg:px-8 overflow-hidden z-10 top-0">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-yellow-300" >
                Get in Touch With Us
              </h1>
              <p className="max-w-[600px] text-blue-100 md:text-xl">
                Have questions? We`re here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact-form">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Contact Us
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-3xl" />
              <div className="relative h-full w-full rounded-2xl bg-white p-8 shadow-lg">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Our Office Hours</h3>
                    <p className="mt-2 text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-500">Sunday: Closed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Emergency Contact</h4>
                    <p className="mt-2 text-blue-500">+91 74834 05899</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

