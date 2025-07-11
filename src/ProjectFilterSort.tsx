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
import { ChevronDown, SortAsc, SortDesc } from "lucide-react";
import { projects } from "./utils/projectData";
import styled from "styled-components";
import { getAllUniqueTags } from "./utils/utilFns";
import { TOOL_TAGS } from "./utils/constants";

const MyScrollableDiv = styled(CommandGroup)`
  /* Other styles for your div */
  color-scheme: light;
  /* Other styled-components styles */
`;

const ClearButton = styled(Button)`
  background-color: #1a1a1a24 !important;
`;

const allTags = getAllUniqueTags(projects);
const otherTags = allTags.filter((item) => !TOOL_TAGS.includes(item));
const sortOptions = [
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
  { value: "title-asc", label: "Title A–Z" },
  { value: "title-desc", label: "Title Z–A" },
];
// TODO: change the select to be a multiselect?

type FilterSortProps = {
  onChange: (filters: string[], sort: string) => void;
};

function FilterDropdownWrapper({
  children,
  selectedTags,
  tagOptions,
  toggleTag,
  clearTags,
}: {
  selectedTags: string[];
  tagOptions: string[];
  toggleTag: (tag: string) => void;
  clearTags: (tagsToClear: string[]) => void;
  children: React.ReactNode;
}) {
  const activeTags = tagOptions.filter((tag) => selectedTags.includes(tag));
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-2">
          {children}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <MyScrollableDiv className="max-h-60 overflow-y-auto">
            {tagOptions.map((tag) => (
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
          </MyScrollableDiv>
          {/* Clear all section */}
          {activeTags.length > 0 && (
            <div className="flex justify-end mt-2 px-2">
              <ClearButton
                variant="ghost"
                size="sm"
                onClick={() => clearTags(tagOptions)}
              >
                Clear All
              </ClearButton>
            </div>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function ProjectFilterSort({ onChange }: FilterSortProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState("date-desc");

  function toggleTag(tag: string) {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(
          (t) => t?.toLocaleLowerCase() !== tag?.toLocaleLowerCase()
        )
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onChange(newTags, sort);
  }

  function clearTags(tagsToClear: string[]) {
    const updatedTags = selectedTags.filter(
      (tag) => !tagsToClear.includes(tag)
    );
    setSelectedTags(updatedTags);
    onChange(updatedTags, sort);
  }

  function handleSortChange(value: string) {
    setSort(value);
    onChange(selectedTags, value);
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {/* Filter (multi-select tags) */}
      <FilterDropdownWrapper
        selectedTags={selectedTags}
        tagOptions={otherTags}
        toggleTag={toggleTag}
        clearTags={clearTags}
      >
        <i className="fa-solid fa-filter w-4 h-4" />
        {"Filter Tags"}
      </FilterDropdownWrapper>
      <FilterDropdownWrapper
        selectedTags={selectedTags}
        tagOptions={TOOL_TAGS}
        toggleTag={toggleTag}
        clearTags={clearTags}
      >
        <div className="relative w-4 h-4">
          <i className="fa-solid fa-filter absolute w-full h-full" />
          <i
            className="fa-solid fa-hammer absolute "
            style={{
              top: 0,
              left: "70%",
              transform: "scale(0.35) translate(-50%, -50%)",
              color: "#1a1a1a", // gray-600
            }}
          />
        </div>
        {"Filter Tools"}
      </FilterDropdownWrapper>
      {/* Sort dropdown */}
      <Select value={sort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[200px]">
          {sort === "date-asc" || sort === "title-desc" ? (
            <SortDesc className="mr-2 h-4 w-4" />
          ) : (
            <SortAsc className="mr-2 h-4 w-4" />
          )}

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
