import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface FilterSortProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  maxPrice: number;
  onReset: () => void;
  className?: string;
}

const FilterSort: React.FC<FilterSortProps> = ({
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  maxPrice,
  onReset,
  className = ""
}) => {
  const hasActiveFilters = sortBy !== "default" || priceRange[0] > 0 || priceRange[1] < maxPrice;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Sort Dropdown - Desktop */}
      <div className="hidden md:flex items-center gap-2">
        <Label htmlFor="sort" className="text-sm font-medium whitespace-nowrap">
          Sort by:
        </Label>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger id="sort" className="w-[180px]">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filter Button - Mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <span className="ml-2 w-2 h-2 bg-orange-500 rounded-full" />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Filters & Sort</SheetTitle>
            <SheetDescription>
              Refine your search results
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            {/* Sort - Mobile */}
            <div>
              <Label htmlFor="sort-mobile" className="text-sm font-medium mb-2 block">
                Sort by
              </Label>
              <Select value={sortBy} onValueChange={onSortChange}>
                <SelectTrigger id="sort-mobile">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range - Mobile */}
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Price Range
              </Label>
              <div className="mb-4">
                <Slider
                  value={priceRange}
                  onValueChange={onPriceRangeChange}
                  max={maxPrice}
                  step={1000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>KSh {priceRange[0].toLocaleString()}</span>
                  <span>KSh {priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            {hasActiveFilters && (
              <Button onClick={onReset} variant="outline" className="w-full">
                <X className="w-4 h-4 mr-2" />
                Reset Filters
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Price Range - Desktop */}
      <div className="hidden md:flex items-center gap-4 flex-1 max-w-xs">
        <Label className="text-sm font-medium whitespace-nowrap">
          Price:
        </Label>
        <div className="flex-1">
          <Slider
            value={priceRange}
            onValueChange={onPriceRangeChange}
            max={maxPrice}
            step={1000}
            className="mb-1"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>KSh {priceRange[0].toLocaleString()}</span>
            <span>KSh {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Reset Button - Desktop */}
      {hasActiveFilters && (
        <Button onClick={onReset} variant="outline" size="sm" className="hidden md:flex">
          <X className="w-4 h-4 mr-2" />
          Reset
        </Button>
      )}
    </div>
  );
};

export default FilterSort;
