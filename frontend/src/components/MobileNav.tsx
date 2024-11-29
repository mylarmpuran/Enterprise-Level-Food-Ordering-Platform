import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"></Menu>
        </SheetTrigger>
        <SheetContent>
            <SheetTitle className="py-4">
                <span>Welcome to MernEats.com!</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex py-4">
                <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
            </SheetDescription>
        </SheetContent>
        
    </Sheet>
  )
}

export default MobileNav;