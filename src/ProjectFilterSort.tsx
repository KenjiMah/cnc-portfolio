import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandGroup,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDown, Filter, SortAsc, SortDesc } from "lucide-react";

const allTags = [
  "Fabrication",
  "CAD",
  "Woodworking",
  "CNC",
  "Architecture",
  "Metalwork",
];
const sortOptions = [
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
  { value: "title-asc", label: "Title A–Z" },
  { value: "title-desc", label: "Title Z–A" },
];

type FilterSortProps = {
  onChange: (filters: string[], sort: string) => void;
};

export function ProjectFilterSort({ onChange }: FilterSortProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState("date-desc");

  function toggleTag(tag: string) {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onChange(newTags, sort);
  }

  function handleSortChange(value: string) {
    setSort(value);
    onChange(selectedTags, value);
  }

  function oklch(
    arg0: number,
    arg1: number,
    arg2: number
  ): import("csstype").Property.BorderColor | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {/* Filter (multi-select tags) */}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
            <ChevronDown className="w-4 h-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2">
          <Command>
            <CommandInput placeholder="Search tags..." />
            <CommandGroup>
              {allTags.map((tag) => (
                <CommandItem
                  key={tag}
                  onSelect={() => toggleTag(tag)}
                  className="flex items-center gap-2"
                >
                  <div className="shrink-0">
                    <Checkbox
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => toggleTag(tag)}
                      className="mr-2 shadow-sm"
                      style={{
                        backgroundColor: "white",
                        borderColor: "#e5e5e5",
                        padding: "0",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  {tag}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Sort dropdown */}
      <Select value={sort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[200px]">
          <SortAsc className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
