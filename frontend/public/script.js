/**
 * Set the initial values of min_value and max_value
 */
function initialize() {
  let loader = document.getElementById("loader");
  loader.style.display = "none";

}

initialize();

/**
 * Handle the click event on Submit (Generate) button
 */
document.getElementById("submit").onclick = function() {
  submit();
};

/**
 * An async function to send the request to the backend.
 */
async function submit() {
  console.log("In submit!");

  // Set the mouse cursor to hourglass
  document.body.style.cursor = "wait";

  // Accessing the div that has random value 
  let random_value_element = document.getElementById("result");

  random_value_element.innerHTML = "Please wait...";
  
  // Show the loader element (spinning wheels)
  let loader = document.getElementById("loader");
  loader.style.display = "inline-block";

  try {
    let request = `http://127.0.0.1:5000/`;
    console.log("request: ", request);

    // Send an HTTP GET request to the backend
    const data = await axios.get(request);

    console.log("data.data: ", JSON.stringify(data.data, null, 2));
    

    // Display the random value
    random_value_element.innerHTML = data.data.result;
  } catch (error) {
    console.log("error: ", error);
  }

  // Set the cursor back to default
  document.body.style.cursor = "default";

  // Hide loader animation
  loader.style.display = "none";
}
