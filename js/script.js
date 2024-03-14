function calculateBmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = weight / (height*height)

    document.getElementById('heading').innerHTML = 'BMI Kamu Adalah'
    document.getElementById('result-bmi').innerHTML = BMI,

    if (BMI <= 18.5) {
         document.getElementById('massage').innerHTML = 'Anda Kekurangan Berat Badan'
    }   else if (BMI >= 18.5 && BMI <= 24.9 ) {
             document.getElementById('massage').innerHTML = 'Normal (IDEAL)'
    }   else if (BMI >= 25.0 && BMI <= 29.9 ) {
             document.getElementById('massage').innerHTML = 'Anda Kelebihan Berat Badan'
    }   else if (BMI >= 30.0 && BMI <= 9999 ) {
             document.getElementById('massage').innerHTML = 'Anda Kegemukan atau Obesitas'
    }