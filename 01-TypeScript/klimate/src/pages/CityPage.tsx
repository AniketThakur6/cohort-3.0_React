import CurrentWeather from "@/components/CurrentWeather";
import FavoriteButtton from "@/components/FavoriteButtton";
import HourlyTemperature from "@/components/HourlyTemperature";
import Loadingskeleton from "@/components/Loadingskeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import { useForecastQuery, useWeatherQuery } from "@/hooks/useWeather";
import { useParams, useSearchParams } from "react-router";

const CityPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();

  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };
  const forcastQuery = useForecastQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);

  if (weatherQuery.error || forcastQuery.error) {
    return (
      <Alert variant="destructive" className="max-w-md p-4 mx-auto w-[calc(100%-2rem)] ">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          <p>Failed to fetch weather data. Please try later</p>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forcastQuery.data || !params.cityName) {
    return <Loadingskeleton />;
  }

  return (
    <div className="space-y-4 space-x-4 ">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold tracking-tight">{params.cityName}, {weatherQuery.data.sys.country}</h1>
        <div> 
          {/* favorite button */}
          <FavoriteButtton data={{...weatherQuery.data,name:params.cityName}} />
        </div>
      </div>

      <div className="grid gap-6">
        <div className="flex flex-col gap-4 mx-4">
          {/* current weather and hourly temperature */}
          <CurrentWeather data={weatherQuery.data} />

          <HourlyTemperature data={forcastQuery.data} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 items-start mx-4">
          {/* details and forecast */}
          <WeatherDetails data={weatherQuery.data} />

          <WeatherForecast data={forcastQuery.data} />
        </div>
      </div>
    </div>
  );
};

export default CityPage;
