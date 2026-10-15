import type { ForecastData } from "@/apis/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ResponsiveContainer, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";
import { format } from "date-fns";
import { Divide } from "lucide-react";

interface HourlyTemperatureProps {
  data: ForecastData;
}

interface ChartData {
  time: string;
  temp: number;
  feels_like: number;
}

const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  const chartData: ChartData[] = data.list.slice(0, 8).map((item) => ({
    time: format(new Date(item.dt * 1000), "ha"),
    temp: Math.round(item.main.temp),
    feels_like: Math.round(item.main.feels_like),
  }));

  return (
    <Card className="flex-1 mx-4 lg:mr-4 lg:ml-0">
      <CardHeader>
        <CardTitle>Today's Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-50 w-full">
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={chartData} margin={{ left: -25 }}>
              <XAxis
                dataKey="time"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                fontSize={12}
                stroke="#888888"
                tickFormatter={(value) => `${value}°`}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Temperature
                            </span>
                            <span className="font-bold mx-auto">{payload[0].value}°</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Feels Like
                            </span>
                            <span className="font-bold mx-auto">{payload[1].value}°</span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                }}
              />
              <Line type="monotone" dataKey="temp" strokeWidth={2} dot={false} stroke="#2563eb" />
              <Line
                type="monotone"
                dataKey="feels_like"
                strokeWidth={2}
                dot={false}
                stroke="#64748b"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
