import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export function ChairmanMessage() {
  return (
    <section className="w-full h-[560px] flex justify-center items-center">
      <div className="container px-4 h-[500px] flex justify-center items-center">
        <Card className="flex flex-col md:flex-row items-center justify-between h-[100%]">
          <div className="w-[60%] h-[100%] p-4">
            <CardHeader className="flex flex-row items-center gap-4">
              <MessageSquare className="w-8 h-8" />
              <CardTitle>Chairman`s Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                With years of experience, Sanjay Developers is dedicated to
                building lasting customer relationships and integrating core
                values into our philosophy. Our customer-centric approach is the
                foundation of our commitment to excellence, quality, and
                reliability.
              </p>
              <p className="text-muted-foreground">
                We maintain high service standards that guide us in delivering
                exceptional products and services. Our goal is to provide
                innovative luxury solutions, meeting our clients` needs from
                concept to implementation.
              </p>
              <p className="text-muted-foreground">
                Our forward-thinking vision in real estate investments including
                redevelopment, plotting, and residential projects in Pune
                enables us to adapt to the changing market landscape. We focus
                on building strong partnerships, executing projects efficiently,
                and managing the entire process from conception to sales.
              </p>
            </CardContent>
          </div>
          <div className="flex justify-center items-center p-4 w-[40%]">
            <img
              src="./images/placeholderImage.svg"
              alt="Chairman"
              className="w-[80%] h-[80%]  object-cover"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
