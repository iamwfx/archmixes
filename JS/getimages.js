window.onclick=function(){
	images =$.getJSON("https://api.pinterest.com/v1/boards/770537886184397995/pins/?access_token=AZpeiD5Xa9FUYzdJDzdrD3UkSyL9FJE0rKuSo9BDo4KZeABB1wAAAAA&fields=image",
	// var counter = 0;
	
	// console.log(images);
		function (data) {
			pinData = data.data;
			console.log(pinData.length);
			var counter = 0;
			window.onclick=function() {
				counter ++
				image=pinData[counter]['image']['original']['url']
				console.log(pinData[counter]['image']['original']['url']);
				console.log(counter);
				if ( counter === pinData.length-1 ){
					console.log("ok")
					counter = 0;
				} 
				img = document.createElement("img");
				img.setAttribute('src',image);
				img.style.height = Math.round(Math.random()*50)+'%';
				img.style.width ='auto';
				img.style.minHeight = '100px';
				console.log(Math.round(Math.random()*10));
				img.style.position ="fixed";
				img.style.top= Math.round(Math.random()*50)+'em';
				img.style.left= Math.round(Math.random()*60)+'em';


				// var img=document.createElement("img");
			 //    img.src=image
			 //    img.id="picture"
				document.getElementById("addimages").appendChild(img);
			}

			// for (var i = 0; i < pinData.length; i++)function(i){

			// 	window.onclick=function(){
			// 		console.log(i);
			// 	}
			// };
		
		}
		);
		
		

}
// console.log("ok");
// $json = file_get_contents("https://api.pinterest.com/v1/boards/770537886184392151/pins/?access_token=AZpeiD5Xa9FUYzdJDzdrD3UkSyL9FJE0rKuSo9BDo4KZeABB1wAAAAA&fields=image");
// $data = json_decode($json);
// console.log($data);