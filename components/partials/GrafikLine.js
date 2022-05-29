import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function GrafikLine() {
  const data = {
    labels: ['senin', 'selasa', 'rabu', 'kamis', 'sabtu', 'minggu'],
    datasets: [
      {
        label: 'PM10',
        lineTension: 0.5,
        data: [12, 10, 7, 5, 18, 13],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className='px-4 py-2 text-slate-600 my-3 shadow-sm rounded border'>
      <h3 className='text-lg font-semibold pt-3'>History</h3>
      <h4 className='text-base pb-4 font-medium text-slate-500'>
      Air quality history graph
      </h4>
      <Line data={data} options={options} />
    </div>
  );
}
