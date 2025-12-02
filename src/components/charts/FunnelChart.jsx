import React from "react";
import {
  FunnelChart as ReFunnelChart,
  Funnel,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

export default function FunnelChartComponent({ data }) {

  const colors = ["#4F46E5", "#3B82F6", "#0EA5E9", "#06B6D4", "#14B8A6"];

  return (
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-700 tracking-wide">
        Complaints Received (Stages)
      </h3>

      <div className="w-full h-[260px]">
        <ResponsiveContainer>
          <ReFunnelChart>
            <Tooltip
              contentStyle={{ borderRadius: "10px" }}
              labelStyle={{ fontWeight: "bold" }}
            />

            <Funnel
              data={data.map((d, i) => ({ ...d, fill: colors[i % colors.length] }))}
              dataKey="value"
              isAnimationActive={true}
            >
              <LabelList
                dataKey="name"
                position="right"
                fill="#111"
                className="font-medium"
              />
            </Funnel>
          </ReFunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
