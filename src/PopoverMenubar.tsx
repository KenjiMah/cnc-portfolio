import { Card } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PopoverMenubar() {
  return (
    <Card
      className="bg-gray-400 fixed p-3 z-30 bottom-2 border-gray-400 text-zinc-100"
      style={{ justifySelf: "anchor-center" }}
    >
      <div className="flex gap-2 ">
        <Button>
          <Link to="/">Projects</Link>
        </Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
      </div>
    </Card>
  );
}
