







document.addEventListener('DOMContentLoaded',function(){

const searchForm = document.querySelector('#search-form')
const searchBox = document.querySelector('#search-box')
const searchResult = document.querySelector('#display-result')
const showMoreBtn= document.querySelector('#show-more-btn')

searchForm.addEventListener('submit',(e) =>{
  e.preventDefault();
  let searchTerm = searchBox.value

  fetch(`http://localhost:3000/images/`)
  .then(res => res.json())
  .then(images =>{
    //console.log(images)
    let result = images.filter(image =>image.title===searchTerm);

    
    //console.log(result)

    let imageCard =''

    for(let image of result){
      let div = ` <div class='single' id=${image['id']}>
            <h1> ${image.title} </h1>

            <img src=${image.url}>

              <p>${image.location}</p>

      </div>
      `
      imageCard += div;
     //console.log(image)
    }
       searchResult.innerHTML = imageCard;

       let allImages =document.querySelectorAll('.single')

       //console.log(allImages)

       allImages.forEach(image =>{
        
       

      image.addEventListener('click', (e)=>{
        //console.log(e.target.id)

        let found = images.find(im => im['id'] === e.target.id)

        

        console.log(e.target)

        let modal = 
         ` <div>
        <h1> ${found['title']} </h1>

        <img src=${found['url']}>

          <p>${found['location']}</p>

  </div>
  `
      searchResult.innerHTML = modal
      })
       })



    


  })

})

})

















// }


// if (document.readyState === 'loading'){
//   document.addEventListener('DOMContentLoaded',dom)
// }
// else{
//   dom()
// }
































































































//fetch(`https://api.unsplash.com/search/collections?page=1&query=`)

// let keyword = ""
// let page = 1;


// async function SearchImage(){
//   keyword = searchBox.value;
//   const url = `https://api.unsplash.com/search/photos?page=${page} $query= ${keyword} $client_id=${accessKey}`

//   const response = await fetch(url);
//   const data =  await response.json;

//   //console.log(data)

//   const results = data.result;

//   results.map((result) =>{
//     const image = document.createElement("img")
//     image.src = result.urls.small;
//     const imageLink = document.createElement("a")
//     imageLink.href = results.links.html;
//     imageLink.target = "_blank";

//     imageLink.appendChild(image)

//     searchResult.appendChild(imageLink)
//   })

//   showMoreBtn.style.display = "block"
// }

// showMoreBtn.addEventListener('click', () => {
//   page++;
//   SearchImage()

// })