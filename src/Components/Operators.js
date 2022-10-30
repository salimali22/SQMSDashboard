
import { Tooltip, TooltipProps, styled,tooltipClasses, Typography } from "@mui/material";
var Icon = (props)=>{
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
            <Typography color="inherit">Saima Bibi</Typography>
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
  

var Icons = (props)=>{
    var rows = []
        for(var i = 0; i<6 ; i++){
            if(props.user!=null && parseInt(props.user)-1 === i){
                rows.push(<Icon color= {props.color} />)  
            }
            else{
            rows.push(<Icon />)    
            } 
         } 
      
//  console.log(rows);
 return rows;
}

export const Operator = ()=>{

    return(
        <>
        <div className="row  my-2">
        <div className="col d-flex justify-content-around">
            <Icons />
        </div>
            
        </div>
        <div className="row my-2">
        <div className="col d-flex justify-content-around">
            <Icons />
        </div>
            
        </div>
        <div className="row my-2">
        <div className="col d-flex justify-content-around">
            <Icons user="3" color="yellow"/>
        </div>
            
        </div>
        <div className="row my-2">
        <div className="col d-flex justify-content-around">
            <Icons />
        </div>
            
        </div>
        <div className="row my-2">
        <div className="col d-flex justify-content-around">
            <Icons user="2" color="red"/>
        </div>
            
        </div>
        <div className="row my-2">
        <div className="col d-flex justify-content-around">
            <Icons user="6" color="blue"/>
        </div>
            
        </div>
        <div className="row my-2">
        <div className="col d-flex justify-content-around">
            <Icons user="6" color="blue"/>
        </div>
            
        </div>
        
        </>

    );
}