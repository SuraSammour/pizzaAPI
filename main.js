async function getPizza(){
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data=await response.json();
   
    
    const result=data.recipes.map(function(ele){
        
        return`
        <div class="pizza">
            <h2>title: ${ele.title}</h2>
            <img class="pizzaImage" src="${ele.image_url}"/>
        </div>`;
    }).join('');
   
   document.querySelector(".pizzaSection").innerHTML=result;
   
}
getPizza();