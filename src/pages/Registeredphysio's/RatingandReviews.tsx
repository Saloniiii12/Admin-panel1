//import { Table, TableHeader } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import funnel from "@/assets/FunnelSimple.png";
//import {  TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Export from "@/assets/Export (1).png";
import { useState } from "react";
import Consultation from "@/components/Consultation";
import Treatment from "@/components/Treatment";
const RatingandReviews = () => {
  const [selected, setSelected] = useState<string>("Consultation");

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-0 ">
        <Card className="p-4 text-center rounded-none">
          <p>Total Reviews</p>
          <p className="text-xl font-semibold">15,020</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Total Rating</p>
          <p className="text-xl font-semibold">2,900</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Average Rating</p>
          <p className="text-xl font-semibold ">4.2 Star</p>
        </Card>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-0 mt-4 border border-none">
          <h2 className="font-semibold text-xl">Rating & Reviews</h2>
          <div className="flex gap-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Rating
                  <img src={funnel} className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>5</DropdownMenuItem>
                <DropdownMenuItem>4</DropdownMenuItem>
                <DropdownMenuItem>3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  {selected ? ` ${selected}` : ""}
                  <img src={funnel} className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelected("Consultation")}>
                  Consultation
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setSelected("Treatment")}>
                  Treatment
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
            >
              <img src={Export} alt="Export Icon" className="w-5 h-5" />
              Export
            </Button>
          </div>
        </div>
      </div>
      {/* Conditional Rendering of Components */}
      {selected === "Consultation" && <Consultation />}
      {selected === "Treatment" && <Treatment />}
    </div>
  );
};

export default RatingandReviews;
