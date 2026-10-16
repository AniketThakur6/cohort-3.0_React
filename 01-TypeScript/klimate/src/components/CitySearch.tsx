import { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Button } from "@/components/ui/button";
import { Loader, Search } from "lucide-react";
import { useLocationSearch } from "./../hooks/useWeather";
import { useNavigate } from "react-router";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); 

  const { data: locations, isLoading } = useLocationSearch(query);

  const handleSelect = (cityData:string) => {
    const [lat,lon,name,country] = cityData.split("|")

    // add to search history

    setOpen(false);
    navigate(`/city/${name}??lat=${lat}&lon=${lon}`);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
      >
        <Search className="mr-2 h-4 w-4" />
        Search cities...
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search cities..." value={query} onValueChange={setQuery} />

          <CommandList>
            {query.length > 2 && !isLoading && <CommandEmpty>No cities found.</CommandEmpty>}

            <CommandGroup heading="Favorites">
              <CommandItem value="nagpur">Nagpur</CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Recent Searches">
              <CommandItem value="nagpur">Nagpur</CommandItem>
            </CommandGroup>

            <CommandSeparator />

            {locations && locations.length > 0 && (
              <CommandGroup heading="Suggestions">
                {isLoading && (
                  <div className="flex items-center justify-center p-4">
                    <Loader className="animate-spin h-4 w-4" />
                  </div>
                )}
                {locations.map((location) => {
                  return (
                    <CommandItem
                      key={`${location.lat}-${location.lon}`}
                      value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                      onSelect={handleSelect}
                    >
                      <Search className="mr-4 h-4 w-4" />
                      <span>{location.name}</span>
                      {location.state && (
                        <span className="text-sm text-muted-foreground">,{location.state}</span>
                      )}
                      <span className="text-sm text-muted-foreground">,{location.country}</span>
                    </CommandItem>
                  );
                })}
                <CommandItem value="nagpur">Nagpur</CommandItem>
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
