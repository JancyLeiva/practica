/*Fetch is a function built into JS that you can call to 
send request to an API.
How does fecth know where to get data from?
- we pass the url into the function an fetch will return
a response object back to you:
    const response = fetch('url') 

That's the basic structure, but fetch needs more than just a url
it actually takes a request object and returns also a response 
object; both of the objects have their own methods and properties.
 { Response } = fetch({ Request }); -> this is what ocurre inside, 

It does something like this:
const request = new Request('url', {
    method: 'hereGoesGETorPOST' });     //the default is GET

const response = fetch(request);

fetch is an asynchronous process so the response it gives 
back is in fact a Promise
 */

const url = 'http://worldtimeapi.org/api/timezone/America/New_York';

async function getData(){
    const response = await fetch(url);
//    console.log(response);      //if we let it this way we don't get values we can extract so
//    const data = response.json();   //this will take the response and the actual body of the response
    const data =  await response.json();    //the method json is asynchronous as well so we have to wait, if we don't, we will get a pending Promise

    console.log(data);
}

getData();


/*What if we send some data to the API when we're asking for data? 
How do we send parameters with the request? ...
 */


//      ERROR HANDLING
const incompleteUrl= 'https://api.spotify.com/v1/artists/2P1puQXmG48EVLBrHbum11';       //its incomplete because it doesn't have the token

async function getData2(){
    try{
    const res = await fetch(incompleteUrl);
    const data2 = await res.json();
    if(res.status === 200){      //in order to separate the different errors, we use the status that comes in the API to validate it 
        console.log('Success', data2);
    }else {
        console.log('Server Error:', data2.error.message);
    }
    
    } catch(error) {
        console.log('Fetch error:', error);      //For example: it cannot fetch because the url doesn't exist
    }
}

getData2();