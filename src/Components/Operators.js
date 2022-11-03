
import { Tooltip, TooltipProps, styled,tooltipClasses, Typography } from "@mui/material";
import { useSelector } from "react-redux";
var Icon = (props)=>{
    const data = useSelector((state)=>state.data);
    const name = props;
    console.log("In Icon");
    console.log(props);
    var defects = 0;
    if(props!=null && props.color==="yellow"){
        defects = 2;
    }else if(props!=null && props.color==="red"){
        defects = 3;
    }
    else if(props!=null && props.color==="blue"){
        defects = 1;
    }else{
        defects = 0;
    }
return(
<span className="display-5">
  {/* <Tooltip title="Delete"  >
 
</Tooltip>   */}
<HtmlTooltip
        title={
          <>
            <Typography color="inherit">{props.data}</Typography>
            <b>{"Pocket Hamming"}</b> <br /> <b>{defects}</b> <em>{"Defects"}</em>&nbsp;<u> {'in 1'}<sup>{"st"}</sup>{"Audit Report"}</u><br />
            {(props.color!=null ? props.color : "Black")}
          </>
        }
      >
   <i className="fa fa-user" style={(props.color!=null ? {color:props.color} : null)}></i>
      </HtmlTooltip>
</span>
  
           

 
);
          
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(15),
      border: '1px solid #dadde9',
    },
  }));
  

const Icons = (props)=>{
    console.log("In the Icons");
    console.log(props);
    var rows = []
        for(var i = 0; i<6 ; i++){
            if(props[i]){
                
            }
            if(props[i]){
              rows.push(<Icon data={props[i]} />)      
            }
            
             
         } 
      
 console.log(rows);

 return (  <div className="row  my-2">
 <div className="col d-flex justify-content-around">
     {rows}
 </div>
     
 </div>);
}

export const Operator = ()=>{
    var iconsComp = [];
    var data = useSelector((state)=>state.data);
    console.log("Operators");
    var dataKeys = Object.keys(data);
    console.log("Index Of")
    delete dataKeys[dataKeys.indexOf("Initial Detail")];
    const index = dataKeys.indexOf("Initial Detail");
if (index > -1) { // only splice array when item is found
  dataKeys.splice(index, 1); // 2nd parameter means remove one item only
}
    console.log(dataKeys.indexOf("Initial Detail"));
    console.log(dataKeys);
    var dataSplit = [];
    for (let i = 0; i < dataKeys.length; i += 6) {
        const chunk = dataKeys.slice(i, i + 6);
        dataSplit.push(chunk);
    }
    console.log(dataSplit);
    console.log(dataKeys);
    console.log("Before Return");


        console.log("In return")
           dataSplit.forEach((a)=>{
            console.log("In For Each");
            iconsComp.push(Icons(a))
            console.log(iconsComp);
        }

        )
        return (iconsComp); 
        
}