let html ='';
let allHtml='';

    // any modification or addition to the data's elements specifically id,
    // should be also done to the array "data id" in run on insta.
    const data=[
    {
        name:"Stories",
        isChecked: false,
        id: "storiesCheckbox"
    },  {
        name:"Suggested For You",
        isChecked: false,
        id: "suggestedforyouCheckbox"
    },  {
        name:"Explore Tab",
        isChecked: false,
        id:"exploreCheckbox"
    },  {
        name:"Reels Tab",
        isChecked: false,
        id:"reelsCheckbox"
    },  {
        name:"Main Feed",
        isChecked: false,
        id: "mainfeedCheckbox"
    }
];

data.forEach((item)=>{

    if(item.name === "Stories"){

        html += `<div class="holder_custom top">
        <h2 class="description_custom">Block ${item.name}</h2>
        <input class="input_custom" style="display: inline; margin-left: 3vh;" type="checkbox" id=${item.id}>
        </div>
    `
    } else{
        html += `<div class="holder_custom notTop">
        <h2 class="description_custom">Block ${item.name}</h2>
        <input class="input_custom" style="display: inline; margin-left: 3vh;" type="checkbox" id=${item.id}>
        </div>
    `
    }  

});

document.body.innerHTML += html;

