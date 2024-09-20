const form = document.querySelector("form")
form.addEventListener('submit', (e)=>{
 e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result")
  if (height ==='' || height < 0 || isNaN(height) ) {
    result.innerHTML = `This is not valid HEIGHT ${height}`;
  }else if (weight ==='' || weight < 0 || isNaN(weight) ) {
    result.innerHTML = `This is not valid WEIGHT ${weight}`;
  }else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    if (bmi<=18.6) {
        result.innerHTML = `Under weight ${bmi}`;
    }
    if (bmi<=24.9) {
        result.innerHTML = `Normal weight ${bmi}`;
    }
    if (bmi > 24.9) {
        result.innerHTML = `Over weight ${bmi}`;
    }    
    }
  })
