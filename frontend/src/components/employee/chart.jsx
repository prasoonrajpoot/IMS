import React from 'react'
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import "./piechart.css";

// Chart.register(ArcElement);




function ChartPro(props) {
    var [allData, setAllData] = React.useState([]);
    const getData = async () => {
      var res = await axios.get("/getChartData");
      // for (var i = 0; i < res.data.length; i++) {
      //   res.data[i]["id"] = res.data[i].itemid;
      // }
      // console.log("the data now is " + res.data);
      setAllData(res.data);
      console.log(res.data);
    };

    React.useEffect(() => {
      getData();
    }, [props.refreshData]);

     var ar = ["#29BF12" , "#F21B3F"];
    var lab = ["safe", "Unsafe"];


  return (
    <div className='pie-chart'>
      <Pie
        data={{
          labels: lab,
          datasets: [
            {
              label: "Safe-Unsafe Items Chart",
              data: allData,
              backgroundColor: ar,
            },
          ],
        }}
      />
    </div>
  );
}

export default ChartPro