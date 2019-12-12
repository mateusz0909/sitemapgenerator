
const select = document.querySelector("#select");
const textarea = document.querySelector('#urls')
const btn=document.querySelector('#btn')
const output = document.querySelector('#output')
const json = 'https://s3-eu-west-1.amazonaws.com/mat.bucket/sitemaps.json'

let data = ''
let urls = ''
let option = ''

const loadJSON = (callback) => {
  var xobj = new XMLHttpRequest();
  xobj.open('GET', json, true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}
const init = () => {
  loadJSON((response) => {
    var actual_JSON = JSON.parse(response);
    data = actual_JSON[0]
    let keys = Object.keys(data)
  keys.map((item) => {
    select.options[select.options.length] = new Option(item, item)
  })
  console.log(data)
  });
}
document.addEventListener('DOMContentLoaded', init())

textarea.addEventListener('focusout', (e) => {
  urls = e.target.value
  urls = urls.split("\n")
  urls = urls.filter(v => v != '');
  
})

select.addEventListener('click',(e)=>{
   option = e.target[e.target.selectedIndex].value
  console.log(option)
})

btn.addEventListener('click',()=>{
  output.value=''
  data[option][0].startUrl = urls
  output.value=JSON.stringify(data[option][0])


}

)
