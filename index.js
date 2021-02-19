const handleClick = () => {
    let result = document.getElementById("result");
    let H = document.getElementById("H");
    let W = document.getElementById("W");
    let E = document.getElementById("E");
    let P = document.getElementById("P");
    let G = document.getElementById("G");
    let HouseInput = document.getElementById("HouseInput").value;
    let WaterInput = document.getElementById("WaterInput").value;
    let EleInput = document.getElementById("EleInput").value;
    let PhoneInput = document.getElementById("PhoneInput").value;
    let GasInput=document.getElementById("GasInput").value;
    let House = HouseInput * 10;
    let Water = WaterInput / 1000;
    let Electricity = EleInput * 5;
    Electricity=Electricity+Electricity*(18/100);
    let Phone = PhoneInput *1.40 ;
    Phone=Phone+Phone*(5/100)
    let Gas=GasInput*15;
    result.innerHTML =
      parseFloat(House) +
      parseFloat(Water) +
      parseFloat(Electricity) +
      parseFloat(Phone) +
      parseFloat(Gas) +
      " " +
      "INR";
    H.innerHTML = "🏠: INR" + " " + House;
    W.innerHTML = "🌊: INR" + " " + Water;
    E.innerHTML = "💡: INR" + " " + Electricity;
    P.innerHTML = "📱: INR" + " " + Phone;
    G.innerHTML = "🔥: INR" + " " + Gas;
  };
  