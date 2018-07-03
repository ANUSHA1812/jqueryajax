$("document").ready(() => {
	$("#search").click(() => {
		$("#main").hide();
		// If input field is empty
		var value = document.getElementById("text").value;
		console.log(value);
		getAllData(value, 1);
	});
	
	$("#search-title").click(() => {
		$("#main").hide();
		// If input field is empty
		var value = document.getElementById("title-text").value;
		console.log(value);
		getAllData(value, 2);
	});
	
});

let getAllData=(value, num)=>{

//Got the value, now use it in the api link 
console.log(value);

var link = "";


// statement to evaluate the data by id
if(value && num ===1){
	link+=`https://www.omdbapi.com/?i=${value}&apikey=bb4eef6e`;
	 console.log(link);
} else if(value && num ===2){
	link+=`https://www.omdbapi.com/?t=${value}&apikey=bb4eef6e`;
	console.log(link);
	} else{
	// the title and year requires two search boxes
	// so u can do this later

}

$.ajax({
	type:'GET',
	datatype:'JSON',
	url:link,
	success:(data)=>{
			console.log(data);
			$(".title").text(data.Title);
	}
})

console.log("making request");
	
}
