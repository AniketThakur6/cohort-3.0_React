import CurrentWeather from "@/components/CurrentWeather";
import FavoriteCity from "@/components/FavoriteCity";
import HourlyTemperature from "@/components/HourlyTemperature";
import Loadingskeleton from "@/components/Loadingskeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks/useWeather";
import { AlertCircleIcon, MapPin, RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    isLoading: locationLoading,
    getLocation,
  } = useGeolocation();

  const locationQuery = useReverseGeocodeQuery(coordinates);
  const forcastQuery = useForecastQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      locationQuery.refetch();
      forcastQuery.refetch();
      weatherQuery.refetch();
    }
  };

  if (locationLoading) {
    return <Loadingskeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive" className="max-w-md p-4 mx-auto w-[calc(100%-2rem)] ">
        <AlertCircleIcon />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription>
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive" className="max-w-md p-4 mx-auto w-[calc(100%-2rem)] ">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription>
          <p>Please enable location access to see your local weather.</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forcastQuery.error) {
    return (
      <Alert variant="destructive" className="max-w-md p-4 mx-auto w-[calc(100%-2rem)] ">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          <p>Failed to fetch weather data. Please try later</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forcastQuery.data) {
    return <Loadingskeleton />;
  }

  return (
    <div className="space-y-4 space-x-4 ">
      <FavoriteCity /> 
      <div className="flex items-center justify-between px-4">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          onClick={handleRefresh}
          variant={"outline"}
          size={"icon"}
          disabled={weatherQuery.isFetching || forcastQuery.isFetching}
        >
          <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""}`} />
        </Button>
      </div>

      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4 mx-4">
          {/* current weather and hourly temperature */}
          <CurrentWeather data={weatherQuery.data} locationName={locationName} />

          <HourlyTemperature data={forcastQuery.data} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start mx-4">{/* details and forecast */}
          <WeatherDetails  data={weatherQuery.data}/>

          <WeatherForecast data={forcastQuery.data}/>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
