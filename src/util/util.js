import moment from "moment";

// ✅ Format numbers in Indian style (₹1,00,000)
export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "";

    const numStr = num.toString();
    const parts = numStr.split('.');

    let integerPart = parts[0];
    let fractionalPart = parts[1];

    const lastThree = integerPart.substring(integerPart.length - 3);
    const otherNumbers = integerPart.substring(0, integerPart.length - 3);

    if (otherNumbers !== '') {
        const formattedOtherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
        integerPart = formattedOtherNumbers + ',' + lastThree;
    } else {
        integerPart = lastThree;
    }

    return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
};


// 🔥 FINAL FIXED GRAPH DATA FUNCTION (SIMPLE & CORRECT)
export const prepareIncomeLineChartData = (data = []) => {
    if (!data || data.length === 0) return [];

    const groupedByDate = data.reduce((acc, item) => {
        const dateKey = moment(item.date).format("YYYY-MM-DD");

        if (!acc[dateKey]) {
            acc[dateKey] = {
                date: dateKey,
                totalAmount: 0,
                items: []
            };
        }

        acc[dateKey].totalAmount += item.amount;
        acc[dateKey].items.push(item);

        return acc;
    }, {});

    let chartData = Object.values(groupedByDate);

    // sort by date
    chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

    // format date for X-axis
    chartData = chartData.map((dataPoint) => ({
        ...dataPoint,
        month: moment(dataPoint.date).format("Do MMM"),
    }));

    return chartData;
};