// Declarations for the Artwork
let art;
let showArtInfo;

// Function to get Art Info when image figure is clicked
/**
 * The function gets art information from The Art Institute of Chicago using 
 the art_index
 * Then gets the correct info_index inside of the JSON response data from 
 The Art Institute of Chicago which will produce a description that will be shown when user
 click the art.
 */

async function clickedEvent(art_index, info_index) {
  //  Get Art Id
  let elem = document.getElementsByTagName('img')[art_index]
  let id = elem.attributes[2].value;

  let headers = new Headers([
    ['Content-Type', 'application/json'],
    ['Accept', 'application/json']
  ]);

  let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}? 
    fields=id,title,artist_display,date_display,main_reference_number`, {
    method: 'GET',
    headers: headers
  });
  let result = await fetch(request);
  let response = await result.json();
  console.log(response)

  if (showArtInfo) {
    stopShow();
  } else{
    let title = response.data.title;
    let artist = response.data['artist_display']
    let date = response.data['date_display']
    let div = document.createElement("div");
    div.innerHTML = `Title: ${title}<br>Artist: ${artist}<br>Date Display: ${date}`;
    elem.parentElement.appendChild(div);
  }
}


/**
 * id = image id for paintings
 * event = Click event given by user
 */

function getArt(id, event) {
  switch (id) {
    case 'nightlife':
      {
        event.stopPropagation();
        clickedEvent(0, 0)
        break;
      }
    case 'thebeach':
      {
        event.stopPropagation();
        clickedEvent(1, 0)
        break;
      }
    case 'fishingboats':
      {
        event.stopPropagation();
        clickedEvent(2, 0)
        break;
      }
    case 'winterlove':
      {
        event.stopPropagation();
        clickedEvent(3, 0)
        break;
      }
    case 'recliningwomen':
      {
        event.stopPropagation();
        clickedEvent(4, 0)
        break;
      }
  }
}