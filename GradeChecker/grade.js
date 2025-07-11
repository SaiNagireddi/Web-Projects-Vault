// <button onclick="getResult()"> Get Results</button>
//defining a function for finding a student grade
function getResult(){
	let hm,cm,jm,bm,tot,avg,grd; //local var
	
	//data collection process
	
	hm=+html.value;
	cm=+css.value;
	jm=+js.value;
	bm=+bs.value;
	
	//calculation part 
	
	tot = hm+cm+jm+bm;
	avg=tot/4;
	
	//checking the grade
	
	//checking pass or not...
	if(hm>39 && cm>39 && jm>39 && bm>39){
		//pass
		grd = avg>=90?'A+':avg>=80?'A':avg>=70?'B+':avg>=60?'B':avg>=50?'C':'D';
		
	}else{
		grd="Fail";
	}
	//displaying the Results
	
	total.value = 'Total Marks : '+tot;
	average.value= 'Average Marks: '+avg;
	grade.value = 'Grade   :'+grd;
}
