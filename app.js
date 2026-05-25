var array =[

    {
        card_1:{
            Name : "Washing Machine",
            Campany:"Dawlance",
            Price:"$ 3000"

        },
        card_2:{

            Name : "Refrigerator",
            Campany:"Haier",
            Price:"$ 8000"
        },
        card_3:{

            Name : "LED-Screen",
            Campany:"Sony",
            Price:"$ 5000"
        },
    }
]

for(var i = 0; i<array.length ; i++){
    for(var items in array[i]){
        var card = document.getElementById(items.replace("_","-")); 
        for(var key in array[i][items]){
            card.innerHTML +=`<div>  ${array[i][items][key]}</div>`;
        }
    }
}
