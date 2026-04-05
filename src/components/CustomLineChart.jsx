import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import { addThousandsSeparator } from "../util/util.js";

const CustomLineChart = ({ data = [] }) => {

    // 🔥 CLEAN TOOLTIP (LIKE YOUR IMAGE)
    const CustomTooltip = ({ active, payload, label }) => {
        if (!active || !payload || payload.length === 0) return null;

        const point = payload[0];

        return (
            <div className="bg-white shadow-lg rounded-xl px-3 py-2 border border-gray-200">
                <p className="text-xs text-gray-500 mb-1">{label}</p>

                <p className="text-sm font-semibold text-purple-700">
                    Total: ₹{addThousandsSeparator(point.value)}
                </p>

                {/* Optional single detail */}
                {point.payload?.items?.[0] && (
                    <p className="text-xs text-gray-500 mt-1">
                        {point.payload.items[0].categoryName}: ₹
                        {addThousandsSeparator(point.payload.items[0].amount)}
                    </p>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white">
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>

                    {/* 🔥 SMOOTH GRADIENT */}
                    <defs>
                        <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    {/* X Axis */}
                    <XAxis
                        dataKey="month"
                        tick={{ fontSize: 12, fill: "#6b7280" }}
                        stroke="none"
                    />

                    {/* Y Axis */}
                    <YAxis
                        tickFormatter={(value) => `₹${value / 1000}k`}
                        tick={{ fontSize: 12, fill: "#6b7280" }}
                        stroke="none"
                    />

                    {/* Tooltip */}
                    <Tooltip content={<CustomTooltip />} />

                    {/* 🔥 MAIN AREA LINE */}
                    <Area
                        type="natural" // smoother curve
                        dataKey="totalAmount"
                        stroke="#7c3aed"
                        fill="url(#gradientColor)"
                        strokeWidth={3}
                        dot={false} // remove dots
                        activeDot={{ r: 5 }} // only show on hover
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomLineChart;