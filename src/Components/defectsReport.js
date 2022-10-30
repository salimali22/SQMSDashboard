import { getData } from '../Firebase/firebase.js';
import CanvasJSReact from '../lib/canvasjs.react.js';

import { useEffect } from 'react';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var defectData = [];
var chartData = [];

  var defects = {
    "VS001  Skipped sticth" : 0,
    "VS002  Wavy stitching" : 0,
    "VS003  Loose or tight stitching" : 0,
    "VS004 Exposed linning"  : 0,
    "VS005  Broken stitches" : 0,
    "VS006  Uneven Gauges" : 0,
    "VS007  Uneven Edge margins" : 0,
    "VS008  Drop Stitch" : 0,
    "VS009  Exposed Stitch" : 0,
        "VS010  Uneven stitch density" : 0,
        "VS011  Puckering" : 0,
        "VS012  Needle chew or holes" : 0,
        "VS013  Wrong numbering" : 0,
        "VS014  Fabric defects" : 0,
        "VS015  Open seams" : 0,
        "VS016  Raw edge" : 0,
        "VS017  Pleats" : 0,
        "VS018  Mismatched parts or unbalanced parts"  : 0,
        "VS019  Wrong construction"  : 0,
        "VS020  Joint stitches" : 0,
        "VS021  Uneven seam allowance"  : 0,
        "VS021  Un-cut thread" : 0,
        "VS022  Missed parts or trim" : 0,
        "VS023  Malfunctioning trims" : 0,
        "VS024  Missing operation" : 0,
        "VS025  Wrong Label(fiber contents, ON, Country of origin)" : 0,
        "VS026  Incorrect trim placement" : 0,
        "VS027  Oil strain" : 0,
        "VS028  Improper or exposed fusing" : 0,
        "VS029  Exposed markings/ Marking not followed" : 0,
        "VS030  Damage"  : 0,
        "VS031  Jump Stitch"  : 0,
      };
export const Defects=()=>{
        Object.keys(defects).forEach((key)=>defects[key]=0)
        // defects = initialdefects;
        console.log("Defects Report Top");
        console.log(defects);
        var data = getData();
        console.log(data);
        data = Object.values(data);

        data.forEach((a)=>{
            // console.log(Object.values(a.Defects));
            Object.values(a.Defects).forEach((defect)=>{
                // console.log(defect);
                defect.forEach((d)=>{
                    if(Object.keys(defects).includes(d)){
                    var value = defects[d];
                    // console.log(value);
                    defects[d] = value+1; 
                }
                })
                
            })
            
        })
        console.log("Printing Defects");
        console.log(defects);
        defectData = []
        Object.keys(defects).forEach((c)=>{
            if(defects[c]>0){
                if(!defectData.includes(c))
                defectData.push(c);
            } 
        })
        // console.log(defectData);
        chartData = [];
        defectData.forEach((data)=>{

            console.log(data)
            if(!chartData.includes({label: data, y : defects[data]})){
                chartData.push({label: data, y : defects[data]})
            }
            
        })
        console.log(chartData);
        
    CanvasJS.addColorSet("greenShades",
            [//colorSet Array

            "#2F4F4F",
            "#008080",
            "#2E8B57",
            "#3CB371",
            "#90EE90"                
            ]);
    const bar = {
        backgroundColor: undefined,
        title: {
            text: "Defects Report",
            fontColor : "white",
        },
        axisX: {
            title: "Defects",
            labelMaxWidth: 39,
            labelFontColor: "white",
            titleFontColor : "white",
          },
          axisY: {
            title: "No. of Defects",
            labelMaxWidth: 30,
            labelFontColor: "white",
            titleFontColor : "white",
            
          },
        colorSet : "greenShades",
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: chartData,
        }
        ],
        height : "400"
    }
    // const pie = {
    //     exportEnabled: true,
    //     animationEnabled: true,
    //     backgroundColor: undefined,
    //     title: {
    //         text: "Website Traffic Sources"
    //     },
    //     data: [{
    //         type: "pie",
    //         startAngle: 75,
    //         toolTipContent: "<b>{label}</b>: {y}%",
    //         showInLegend: "true",
    //         legendText: "{label}",
    //         indexLabelFontSize: 16,
    //         indexLabel: "{label} - {y}%",
    //         dataPoints: [
    //             { y: 18, label: "Direct" },
    //             { y: 49, label: "Organic Search" },
    //             { y: 9, label: "Paid Search" },
    //             { y: 5, label: "Referral" },
    //             { y: 19, label: "Social" }
    //         ]
    //     }]
    // }
    return(
        <>
        <div className='row mt-5'>
              <div className=' h-auto col-12'>
            <CanvasJSChart options = {bar} />
  
        </div>
        {/* <div className='col-md-5 w-50 col-12'>
<CanvasJSChart options = {pie}/>
        </div> */}
                  
        </div>
      
            
        </>
    );
}