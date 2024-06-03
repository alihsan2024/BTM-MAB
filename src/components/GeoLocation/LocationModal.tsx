import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LocationModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change Your Currency</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change Your Currency</DialogTitle>
          <DialogDescription>
            Your location is currently set to Australia. Would you like to
            change to United States?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="w-full sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full">
              Leave as AUD
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="primaryBTM"
            className="w-full text-white"
          >
            Switch to USD
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LocationModal;
