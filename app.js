
const select = document.querySelector("#select");
const textarea = document.querySelector('#urls')
const btn=document.querySelector('#btn')
const output = document.querySelector('#output')
const json = '../sitemaps.json'

let data1 = ''
let urls = ''
let option = ''

// const loadJSON = (callback) => {
//   var xobj = new XMLHttpRequest();
//   xobj.open('GET', json, true); // Replace 'my_data' with the path to your file
//   xobj.onreadystatechange = function () {
//     if (xobj.readyState == 4 && xobj.status == "200") {
//       // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//       callback(xobj.responseText);
//     }
//   };
//   xobj.send(null);
// }
// const init = () => {
//   loadJSON((response) => {
//     var actual_JSON = JSON.parse(response);
//     data = actual_JSON[0]
//     let keys = Object.keys(data)
//   keys.map((item) => {
//     select.options[select.options.length] = new Option(item, item)
//   })
//   console.log(data)
//   });
// }

fetch(json)
.then((resp)=> resp.json())
.then((data)=> {
  console.log(data)
  data1 = data[0]
    let keys = Object.keys(data1)
  keys.map((item) => {
    select.options[select.options.length] = new Option(item, item)
  })
  console.log(data1)
})

textarea.addEventListener('focusout', (e) => {
  urls = e.target.value
  urls = urls.split("\n")
  urls = urls.filter(v => v != '');
  
})

select.addEventListener('click',(e)=>{
   option = e.target[e.target.selectedIndex].value
  console.log(option);
})

btn.addEventListener('click',()=>{
  output.value=''
  if (option==false){
      alert("Please select E-retailer from the list!")
  } else {
    data1[option][0].startUrl = urls
    output.value=JSON.stringify(data1[option][0])
  }
  


}

)
