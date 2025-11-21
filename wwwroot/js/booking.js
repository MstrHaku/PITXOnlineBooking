console.log("Booking process");


// CHECK IF PAGE IS PAYMENT AND CHANGE BUTTON TO REDIRECT USER TO THE PAYMENT GATEWAY
const page = document.getElementById("page");

const nextBtn = document.getElementById("nextBtn");
const payBtn = document.getElementById("payBtn");
const homeBtn = document.getElementById("homeBtn");

const totalCon = document.getElementById("totalCon");


// POP UP ALERT
const popUpAlert = document.getElementById("popUpAlert");
const popUpAlertText = document.getElementById("popUpAlertText");

const bookedTripJson = {
    passengerNo: {
        adults: undefined,
        children: undefined,
        seniors: undefined
    },
    user: {
        email: undefined,
        mobile: undefined,
        firstName: undefined,
        lastName: undefined,
        ageGroup: undefined,
        birthDate: undefined,
        passengers: {
            passengerId: undefined,
            firstName: undefined,
            lastName: undefined,
            ageGroup: undefined,
            birthDate: undefined
        }   
    },
    insuranceType: undefined,
    totalPrice: undefined,
    paymentMethod: undefined,
    ticketNo: undefined // AUTOMATICALLY CREATE THIS AFTER SUCCESSFUL PAYMENT
};

if (page) {   

    // POP UP
    const popUpCon = document.getElementById("popUpCon");
    const closeBtn = document.getElementById("closeBtn");

    // PASSENGER POP UP
    let passengerPopUp;
    let passengerPopUpDoneBtn;
    let insurancePopUp;

    // BUS POP UP
    let busPicInsidePopUp;
    let busPicOutsidePopUp;

    // RECEIPT POP UP
    let receiptPopUp;
    let successPayPopUp;


        // ITINERARY
        if (page.textContent.toLowerCase() === "itinerary") {
            console.log("this is itinerary page");

            //  PASSENGER POP UP
            const passengerInput = document.getElementById("passengerInput");

            // ADD PASSENGER   
            const subAdult = document.getElementById("subAdult");
            const subChild = document.getElementById("subChild"); 
            const subSenior = document.getElementById("subSenior");
            const addAdult = document.getElementById("addAdult");
            const addChild = document.getElementById("addChild");
            const addSenior = document.getElementById("addSenior");

            const noOfPassenger = document.querySelectorAll(".noOfPassenger");
            const noOfAdults = document.getElementById("noOfAdults");
            const noOfChild = document.getElementById("noOfChild");
            const noOfSenior = document.getElementById("noOfSenior");

            let adult = 1;
            let child = 0;
            let senior = 0;

            passengerInput.addEventListener("click", () => {
                passengerPopUp = document.getElementById("passengerPopUp");

                passengerPopUp.classList.toggle("show");

                // DONE BTN
                passengerPopUpDoneBtn = document.getElementById("passengerPopUpDoneBtn");

                passengerPopUpDoneBtn.addEventListener("click", () => {
                    passengerPopUp.classList.remove("show");
                });
            });

            subAdult.addEventListener("click", () => {
                if (adult > 0) {
                    adult--;
                    noOfAdults.textContent = adult.toLocaleString();
                    updateDisplay();
                }
            });

            addAdult.addEventListener("click", () => {
                adult++;
                noOfAdults.textContent = adult.toLocaleString();
                updateDisplay();
            });

            subChild.addEventListener("click", () => {
                if (child > 0) {
                    child--;
                    noOfChild.textContent = child.toLocaleString();
                    updateDisplay();
                }
            });

            addChild.addEventListener("click", () => {
                child++;
                noOfChild.textContent = child.toLocaleString();
                updateDisplay();
            });

            subSenior.addEventListener("click", () => {
                if (senior > 0) {
                    senior--;
                    noOfSenior.textContent = senior.toLocaleString();
                    updateDisplay();
                }
            });

            addSenior.addEventListener("click", () => {
                senior++;
                noOfSenior.textContent = senior.toLocaleString();
                updateDisplay();
            });

            // BUS PIC
            const busInside = document.getElementById("busInside");
            const busOutside = document.getElementById("busOutside");

            busInside.addEventListener("click", () => {
                popUpCon.classList.toggle("show");
                busPicInsidePopUp = document.getElementById("busPicInsidePopUp");

                busPicInsidePopUp.classList.toggle("show");
            });

            busOutside.addEventListener("click", () => {
                popUpCon.classList.toggle("show");
                busPicOutsidePopUp = document.getElementById("busPicOutsidePopUp");

                busPicOutsidePopUp.classList.toggle("show");
            });

            // INSURANCE JSON
            const insuranceData = document.getElementById("insuranceData");
            let insurance = JSON.parse(insuranceData.dataset.trip);
            console.log(insurance); // REMOVE THIS

            // TRIP JSON
            const bookingData = document.getElementById("bookingData");
            let trip = JSON.parse(bookingData.dataset.trip);
            console.log(trip); // REMOVE THIS
            
            // CALCULATE TOTAL
            // USE PACKAGE C - 148 PESOS       
            console.log("Package: ", insurance.Id = 4); // REMOVE THIS
            const totalPrice = document.getElementById("totalPrice");
            let discount;

            const selectedInsurance = insurance.find(i => i.id === 4);

            // DEFAULT INSURANCE PACKAGE C - 148 PESOS
            discount = selectedInsurance.price + trip.price + 6;
            totalPrice.textContent = discount; // DEFAULT VALUE

            const bookingMainCon = document.querySelector(".booking_main_con");
            bookingMainCon.classList.toggle('inactive');

            nextBtn.addEventListener("click", () => {
                let totalPassenger = adult + child + senior;

                if (totalPassenger > 0) {    
                    bookedTripJson.passengerNo.adults = adult;
                    bookedTripJson.passengerNo.children = child;
                    bookedTripJson.passengerNo.seniors = senior;
                    bookedTripJson.insuranceType = 4;
                    bookedTripJson.totalPrice = discount;

                    // TRIP JSON
                    trip.bookedTripJson = bookedTripJson;
                    sessionStorage.setItem("bookedTripJson", JSON.stringify(trip));

                    // INSURANCE
                    sessionStorage.setItem("insurance", JSON.stringify(insurance));

                    window.location.href = "/Home/Passengers"   
                } else {
                    console.log("No passenger");
                    popUpCon.classList.add("show");
                    popUpAlert.classList.add("show");
                    popUpAlertText.textContent = "No Passenger, Cannot Proceed";
                }
            });


            // FUNCTIONS
            function updateDisplay() {
                let passenger = adult + child + senior;
                console.log("total passenger (update display): ", passenger);

                noOfPassenger.forEach(span => {
                    span.textContent = passenger.toLocaleString();
                })

                // DISCOUNT
                price = passenger * (trip.price + selectedInsurance.price + 6);
                discount = Math.trunc(price -((senior * (trip.price + selectedInsurance.price + 6))* 0.20));

                // TOTAL PRICE CALCULATION
                console.log("total price: ", discount); // REMOVE THIS
                totalPrice.textContent = discount;
            }      
        }

        // PASSENGERS
        if (page.textContent.toLowerCase() === "passengers") {
            console.log("this is passengers");

            // GET BOOKED TRIP JSON
            const trip = JSON.parse(sessionStorage.getItem("bookedTripJson"));
            console.log(trip); // REMOVE THIS

            // GET INSURANCE JSON
            const insuranceJson = JSON.parse(sessionStorage.getItem("insurance"));
            console.log(insuranceJson) // REMOVE THIS

            // VARIABLES FOR DISPLAYING DATA
            const departureTime = document.getElementById("departureTime");
            const destination = document.getElementById("destination");
            const addPassengerBtn = document.getElementById("addPassengerBtn");
            const passengerCon = document.getElementById("passengerCon");

            localStorage.removeItem("bookingTimer");
            timer(); // BOOKING TIMER

            // TRIP SUMMARY
            console.log(trip.departureTime);
            const date = new Date(trip.departureTime);
            const departureTimeFormat = date.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });

            // DEPARTURE TIME
            departureTime.textContent = departureTimeFormat;

            // DESTINATION
            destination.textContent = trip.destination;

            // ADD PASSENGER
            let totalPassenger = trip.bookedTripJson.passengerNo.adults + trip.bookedTripJson.passengerNo.children + trip.bookedTripJson.passengerNo.seniors;

            // TOTAL CON 
            const insurance = document.getElementById("insurance");
            const totalPrice = document.getElementById("totalPrice");

            // DISPLAY TOTAL PRICE (DEAFULT)
            let price = trip.bookedTripJson.totalPrice;
            let finalPrice = price;
            totalPrice.textContent = finalPrice; // DISPLAY
            insurance.textContent = 148; // DEFAULT INSURANCE

            // INSURANCE POP UP
            const insuranceBtn = document.getElementById("insuranceBtn");
            const insuranceBtnText = document.querySelectorAll(".insuranceBtnText");

            let noInsuranceText;
            let packageAText;
            let packageBText;
            let packageCText;

            // INSURANCE TYPE
            let insuranceType = 3; // ARRAY VALUE
            let insurancePrice = trip.price; // DEFAULT
            console.log("insurance price: ", insurancePrice); 

            let numOfPassenger = totalPassenger; // TOTAL PASSENGER
            updatePassenger(numOfPassenger, insuranceType); // DISPLAY INSURANCE TEXT
            passengerCon.appendChild(addPassenger());
            blockFutureDates();

            addPassengerBtn.addEventListener("click", () => {
                numOfPassenger++;

                const div = document.createElement("div");
                div.classList.add("extra_passenger_con");
                div.dataset.passengerId = numOfPassenger;

                div.innerHTML = `<div class="remove_passenger_con">
                                    <div class="trash" id="removePassBtn"> 
                                        <div class="trash_icon">
                                            <img src="/icons/trash.svg" alt="trash">
                                        </div>
                                        <p>Remove</p>
                                    </div>
                                </div>
                                <p class="passenger_id">Passenger ${div.dataset.passengerId}</p>
                                <div class="passenger_info_input_con">
                                    <div class="passenger_info_input">
                                        <p>First Name</p>
                                        <input type="text" class="input" name="firstName"">
                                    </div>

                                    <div class="passenger_info_input">
                                        <p>Last Name</p>
                                        <input type="text" class="input" name="lastName">
                                    </div>
                                
                                    <div class="passenger_info_input">
                                        <p>Date of Birth</p>
                                        <input class="dateInput input" type="date" name="birthDate">
                                    </div>
                                </div>`;

                passengerCon.appendChild(div);
                blockFutureDates();
                
                // ADD A FUNCTION THAT UPDATES THE NUMBER OF PASSENGER AND THE TOTAL PRICE
                updatePassenger(numOfPassenger, insuranceType);
                console.log("Insurance Price: ", insurancePrice); // REMOVE THIS
                updateTotalPrice(insurancePrice, insuranceType);

                passengerCount(passengerCon);
            });


            // REMOVE PASSENGER
            passengerCon.addEventListener("click", (e) => {
                const removePassBtn = e.target.closest(".trash");
                if (!removePassBtn) return;

                const div = removePassBtn.closest(".extra_passenger_con");
                div.remove();
                numOfPassenger--;

                updatePassenger(numOfPassenger, insuranceType);
                updateTotalPrice(insurancePrice, insuranceType);

                passengerCount(passengerCon);
            });

            // PASSENGER COUNT
            function passengerCount(parentCon) {
                const passengers = parentCon.querySelectorAll(".extra_passenger_con");
                passengers.forEach((div, index) => {
                    div.dataset.passengerId = index + 2;
                    const p = div.querySelector(".passenger_id");
                    if (p) p.textContent = `Passenger ${index + 2}`;
                });

                numOfPassenger = passengers.length + 1;
            }

            insurancePopUp = document.getElementById("insurancePopUp");
            insuranceBtn.addEventListener("click", () => {
                insurancePopUp.classList.toggle("show");
            });

            // PACKAGE
            const noInsurance = document.getElementById("noInsurance");
            const packageA = document.getElementById("packageA");
            const packageB = document.getElementById("packageB");
            const packageC = document.getElementById("packageC");

            

            noInsurance.addEventListener("click", () => {
                updatePassenger(numOfPassenger, 0);
                updateTotalPrice(insurancePrice, 0);
                insuranceType = updateInsurance(noInsuranceText, 0);
            });

            packageA.addEventListener("click", () => {
                updatePassenger(numOfPassenger, 1);
                updateTotalPrice(insurancePrice, 1);
                insuranceType = updateInsurance(packageAText, 1);
            });

            packageB.addEventListener("click", () => {
                updatePassenger(numOfPassenger, 2);
                updateTotalPrice(insurancePrice, 2);
                insuranceType = updateInsurance(packageBText, 2);
            });

            packageC.addEventListener("click", () => {
                updatePassenger(numOfPassenger, 3);
                updateTotalPrice(insurancePrice, 3);
                insuranceType = updateInsurance(packageCText, 3);
            });
        

            // REMOVE POP UP
            insurancePopUp.addEventListener("click", (e) => {
                if (e.target != insurancePopUp) {
                    insurancePopUp.classList.remove("show");
                }
            });

            nextBtn.addEventListener("click", () => {

                const input = document.querySelectorAll("input");
                const mobile = document.getElementById("mobile").value;
                const email = document.getElementById("email").value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

                console.log("movile: ", mobile);

                // INPUT CHECKER
                let filled = true; 
                input.forEach(input => {
                    if (input.value.trim() === "") {
                        filled = false;
                    }
                });

                // VALIDATION
                if (filled) {
                    if (mobile.length == 11) {
                        if (emailRegex.test(email)) {
                            // MAIN PASSENGER INFO

                            const fields = ["email", "mobile", "firstName", "lastName", "birthDate"];
                            const formData = {};

                            fields.forEach(key => {
                                formData[key] = document.getElementById(key).value;
                                if (key === "birthDate") {
                                    const birthday = document.getElementById("birthDate").value;

                                    const age = getAge(birthday);
                                    const group = ageGroup(age);
                                    formData["ageGroup"] = group;
                                }
                            });

                            Object.assign(trip.bookedTripJson.user, formData);



                            // PASSENGER INFO
                            const extraPassengerInfo = document.querySelectorAll(".extra_passenger_con");
                            console.log(extraPassengerInfo);

                            if (extraPassengerInfo.length > 0) {
                                let id = 0;

                                trip.bookedTripJson.user.passengers = [];

                                extraPassengerInfo.forEach((div, index) => {
                                    id++;
                                    console.log("pass Id: ", id);

                                    const birthday = div.querySelector('input[name="birthDate"]').value;

                                    const age = getAge(birthday);
                                    const group = ageGroup(age);

                                    trip.bookedTripJson.user.passengers.push({
                                        firstName: div.querySelector('input[name="firstName"]').value,
                                        lastName: div.querySelector('input[name="lastName"]').value,
                                        ageGroup: group,
                                        birthDate: birthday
                                    });
                                });
                            }

                            // INSURANCE TYPE
                            trip.bookedTripJson.insuranceType = insuranceType;

                            // TOTAL PRICE
                            trip.bookedTripJson.totalPrice = this.finalPrice;
                            sessionStorage.setItem("bookedTripJson", JSON.stringify(trip));

                            window.location.href = "/Home/Confirmation";
                        } else {
                            alert("Invalid Email");
                        }
                    } else {
                        alert("Invalid Phone Number, 11 Digits Only!");
                    }
                } else {
                    alert("Please input all fields");
                }
            });


            // FUNCTIONS
            function alert(message) {
                popUpCon.classList.add("show");
                popUpAlert.classList.add("show");
                popUpAlertText.textContent = message;
            }

            function blockFutureDates() {
                const dateInput = document.querySelectorAll(".dateInput");
                const today = new Date().toLocaleDateString("en-CA");
                dateInput.forEach(d => {
                    d.setAttribute("max", today);
                });
            }

            // ADD PASSENGER
            function addPassenger() {
                const fragment = document.createDocumentFragment();

                for (i = 1; i < numOfPassenger; i++) {
                    const div = document.createElement("div");
                    div.classList.add("extra_passenger_con");
                    div.dataset.passengerId = numOfPassenger;

                    div.innerHTML = `<div class="remove_passenger_con">
                                        <div class="trash" id="removePassBtn"> 
                                            <div class="trash_icon">
                                                <img src="/icons/trash.svg" alt="trash">
                                            </div>
                                            <p>Remove</p>
                                        </div>
                                    </div>
                                    <p class="passenger_id">Passenger ${div.dataset.passengerId}</p>
                                    <div class="passenger_info_input_con">
                                        <div class="passenger_info_input">
                                            <p>First Name</p>
                                            <input type="text" class="input" name="firstName"">
                                        </div>

                                        <div class="passenger_info_input">
                                            <p>Last Name</p>
                                            <input type="text" class="input" name="lastName">
                                        </div>
                                    
                                        <div class="passenger_info_input">
                                            <p>Date of Birth</p>
                                            <input class="dateInput input" type="date" name="birthDate">
                                        </div>
                                    </div>`;

                    fragment.appendChild(div);      
                }

                passengerCount(fragment);

                return fragment;
            }

            // UPDATE TOTAL PRICE 
            function updateTotalPrice(insurance, insuranceNum) {
                const discount = trip.bookedTripJson.passengerNo.seniors;

                const totalPriceUpdate = insurance + insuranceJson[insuranceNum].price + 6;
                console.log("totalPrice", insurance);
                const discountPrice = (totalPriceUpdate * 0.20) * discount;
                console.log("discount price: ", discountPrice, "price per pass: ", totalPriceUpdate); // REMOVE THIS
                this.finalPrice = Math.round((totalPriceUpdate * numOfPassenger) - discountPrice);
                totalPrice.textContent = this.finalPrice;
            }

            // UPDATE PRICE (INSURANCE)
            function updatePrice(price) {
                const discount = trip.bookedTripJson.passengerNo.seniors;

                if (discount > 0) {
                    this.insurancePrice = price;
                    const discountPrice = this.insurancePrice * 0.20;
                    this.finalPrice = Math.round((this.insurancePrice - discountPrice) * numOfPassenger);
                    totalPrice.textContent = this.finalPrice;
                } else {
                    this.insurancePrice = price;
                    this.finalPrice = this.insurancePrice * numOfPassenger;
                    totalPrice.textContent = this.finalPrice;
                }
            }

            // UPDATE INSURANCE
            function updateInsurance(package, num) {
                let insuranceType;

                if (package.toString() == "No Insurance") {
                     insuranceBtnText.forEach(input => {
                        input.textContent = package;
                    });

                    // GET THE TRIP PRICE - TOTAL PRICE - 6 = INSURANCE PRICE
                    const noInsurancePrice = trip.bookedTripJson.totalPrice - trip.price;
                    price = trip.bookedTripJson.totalPrice - noInsurancePrice; // IMPORTANT
                    console.log("no insurance: ", price); // REMOVE THIS
                    insurancePrice = price; 
                    insuranceType = 0;
                    console.log("insurancePrice", insurancePrice);
                    updateTotalPrice(insurancePrice, num);

                    insurance.textContent = 0;
                } else {
                    // CALCULATE
                    insuranceType = num;
                    console.log("insurancePrice", insurancePrice);
                    updateTotalPrice(insurancePrice, num);
                    
                    // DISPLAY
                    insurance.textContent = insuranceJson[num].price; 
                }

                return insuranceType;
            }

            // UPDATE PASSENGER COUNT 
            function updatePassenger(numOfPassenger, typeInsurance) {
                // INSURANCE TEXT
                const insurancePax = document.querySelectorAll(".insurancePax");
                insurancePax.forEach(i => {
                    i.textContent = numOfPassenger;
                });

                noInsuranceText = "No Insurance";
                packageAText = "Package A = ₱" + insuranceJson[1].price +" (1 x " + numOfPassenger + " pax)";
                packageBText = "Package B = ₱" + insuranceJson[2].price +" (1 x " + numOfPassenger + "  pax)";
                packageCText = "Package C = ₱" + insuranceJson[3].price +" (1 x " + numOfPassenger + " pax)";

                let text;

                console.log(typeInsurance);
                switch(typeInsurance) {
                    case 0: 
                        text = noInsuranceText;
                        break;
                    case 1:
                        text = packageAText;
                        break;
                    case 2:
                        text = packageBText;
                        break;
                    case 3: 
                        text = packageCText;
                        break;
                    default:
                        text = packageCText;
                }

                insuranceBtnText.forEach(input => {
                    input.textContent = text;
                });
            }

            // GET AGE
            function getAge(getBirthDate) {
                const today = new Date();
                const birthDate = new Date(getBirthDate);

                let age = today.getFullYear() - birthDate.getFullYear();

                const monthDiff = today.getMonth() - birthDate.getMonth();
                const dayDiff = today.getDate() - birthDate.getDate();

                if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                    age--;
                }

                return age;
            }

            function ageGroup(age) {
                if (age >= 18) return "Adult";
                if (age <= 17) return "Child";
                if (age >= 65) return "Senior";
            }

        }

        if (page.textContent.toLowerCase() === "confirmation") {
            // GET BOOKED TRIP JSON
            const trip = JSON.parse(sessionStorage.getItem("bookedTripJson"));
            console.log(trip);

            // GET INSURANCE
            const insurance = JSON.parse(sessionStorage.getItem("insurance"));
            console.log(insurance);

            // TIMER
            timer();

            // VARIABLES
            const departureDate = document.getElementById("departureDate");
            const destination = document.getElementById("destination");
            const totalPrice = document.getElementById("totalPrice");
            const insurancePrice = document.getElementById("insurancePrice");
            const nextBtn = document.getElementById("nextBtn");

            // PASSENGER
            const mainPassenger = document.getElementById("mainPassenger");
            const mainAgeGroup = document.getElementById("mainAgeGroup");
            const passengerList = document.getElementById("passengerList");

            // DISPLAY DEPARTURE
            const date = new Date(trip.departureTime);
            const departureTimeFormat = date.toLocaleString("en-CA", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
            departureDate.textContent = departureTimeFormat;

            // DISPLAY DESTINATION
            destination.textContent = trip.destination;


            // TOTAL CON
            totalPrice.textContent = trip.bookedTripJson.totalPrice;
            insurancePrice.textContent = insurance[trip.bookedTripJson.insuranceType].price;

            // DISPLAY MAIN PASSENGER
            mainPassenger.textContent = trip.bookedTripJson.user.firstName + " " + trip.bookedTripJson.user.lastName;
            mainAgeGroup.textContent = trip.bookedTripJson.user.ageGroup;

            const passengerObject = trip.bookedTripJson.user.passengers;
            if (passengerObject.length > 0) {
                passengerList.innerHTML = passengerObject.map(p => `<li> <span class="passengerName">${p.firstName} ${p.lastName}</span>, <span class="passengerAgeGroup">${p.ageGroup}</span></li>`).join("");
            }


            nextBtn.addEventListener("click", () => {

                window.location.href = "/Home/Payment";
            });
        }

        if (page.textContent.toLowerCase() === "payment") {
            console.log("this is payment page");

            // GET BOOKED TRIP JSON
            const trip = JSON.parse(sessionStorage.getItem("bookedTripJson"));
            console.log(trip);

            // GET INSURANCE
            const insurance = JSON.parse(sessionStorage.getItem("insurance"));
            console.log(insurance);

            // TIMER
            timer();

            // VARIABLES
            const departureDate = document.getElementById("departureDate");
            const destination = document.getElementById("destination");
            const totalPrice = document.querySelectorAll(".totalPrice");
            const insurancePrice = document.getElementById("insurancePrice");
            const gcash = document.getElementById("gcash");
            const maya = document.getElementById("maya");
            const payBtn = document.getElementById("payBtn");

            // PASSENGER
            const mainPassenger = document.getElementById("mainPassenger");
            const mainAgeGroup = document.getElementById("mainAgeGroup");
            const passengerList = document.getElementById("passengerList");

            // DISPLAY DEPARTURE
            const date = new Date(trip.departureTime);
            const departureTimeFormat = date.toLocaleString("en-CA", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
            departureDate.textContent = departureTimeFormat;

            // DISPLAY DESTINATION
            destination.textContent = trip.destination;


            // TOTAL CON
            totalPrice.forEach(p => {
                p.textContent = trip.bookedTripJson.totalPrice;
            });
            insurancePrice.textContent = insurance[trip.bookedTripJson.insuranceType].price;

            // DISPLAY MAIN PASSENGER
            mainPassenger.textContent = trip.bookedTripJson.user.firstName + " " + trip.bookedTripJson.user.lastName;
            mainAgeGroup.textContent = trip.bookedTripJson.user.ageGroup;

            const passengerObject = trip.bookedTripJson.user.passengers;
            if (passengerObject.length > 0) {
                passengerList.innerHTML = passengerObject.map(p => `<li> <span class="passengerName">${p.firstName} ${p.lastName}</span>, <span class="passengerAgeGroup">${p.ageGroup}</span></li>`).join("");
            }

            // PAYMENT GATEWAY
            let paymentMethod = "gcash";

            gcash.addEventListener("click", () => {
                document.getElementById("gcashBtn").click();
                paymentMethod = "gcash";
            });

            maya.addEventListener("click", () => {
                document.getElementById("mayaBtn").click();
                paymentMethod = "maya";
            });

            payBtn.addEventListener("click", () => {
                if (paymentMethod != "") {

                    // REDIRECT TO GCASH HOSTED, 
                    // SEND A POST REQUEST
                    // IF KAYA NG ORAS
                    /*const paymentInfo = {
                        merchant: "PITX",
                        amount: trip.bookedTripJson.totalPrice,
                        redirectToClient: "Sample link",
                    };

                    fetch("https://prettied-punchily-angeles.ngrok-free.dev/Home/GCashMain", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(paymentInfo),
                        credentials: "include"
                    })
                    .then(res => res.json())
                    .then(data => {
                        // GCASH REPLY
                        console.log("Response ni gcash", data);

                        if (data.redirect) {
                            window.location.href = data.redirect;
                        }
                    })
                    .catch(console.error);*/ 

                    fetch("/Home/SubmitPayment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            Amount: trip.bookedTripJson.totalPrice,
                            PaymentMethod: paymentMethod
                        })
                    }).then(res => res.json())
                    .then(data => {
                        // REDIRECT
                        if (data.redirect) {
                            trip.bookedTripJson.paymentMethod = paymentMethod;

                            // TICKET NO
                            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            let word = "";
                            const ranNum = Math.floor(Math.random() * 1e13).toString().padStart(13, "0");

                            for (i = 0; i < 5; i++) {
                                word += letters[Math.floor(Math.random() * letters.length)]
                            }

                            const ticketNo = word + ranNum;

                            trip.bookedTripJson.ticketNo = ticketNo;

                            sessionStorage.setItem("bookedTripJson", JSON.stringify(trip));
                            window.location.href = data.redirect;
                        }
                    })
                    .catch(error => console.log(error));
                    
                } else {
                    console.log("Cannot redirect no payment chosen");
                }
            });

            const bookingMainCon = document.querySelector(".booking_main_con");
            bookingMainCon.classList.toggle('inactive');
        }

        // SUCCESS PAYMENT
        if (page.textContent.toLowerCase() === "receipt") {
            // GET TRIP DATA
            const trip = JSON.parse(sessionStorage.getItem("bookedTripJson"));
            console.log(trip);


            // DISPLAY
            // VARIABLE
            const ticketNo = document.querySelectorAll(".ticketNo");
            const destination = document.querySelectorAll(".destination");
            const departureTime = document.querySelectorAll(".departureTime");
            const tripNo = document.querySelectorAll(".tripNo");
            const gate = document.querySelectorAll(".gate");
            const bay = document.querySelectorAll(".bay");
            const dateBooked = document.querySelectorAll(".dateBooked");
            const totalPrice = document.querySelectorAll(".totalPrice");

            ticketNo.forEach(t => {
                t.textContent = trip.bookedTripJson.ticketNo;
            });

            destination.forEach(d => {
                d.textContent = trip.destination;
            });

            departureTime.forEach(d => {
                    // DISPLAY DEPARTURE
                const date = new Date(trip.departureTime);
                const departureTimeFormat = date.toLocaleString("en-CA", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                d.textContent = departureTimeFormat;
            });

            tripNo.forEach(t => {
                t.textContent = trip.tripNo;
            });

            gate.forEach(g => {
                g.textContent = trip.gate
            });

            bay.forEach(b => {
                b.textContent = trip.bay;
            });

            totalPrice.forEach(p => {
                p.textContent = trip.bookedTripJson.totalPrice;
            });

            // DISPLAY PASSENGER
            const mainPass = document.getElementById("mainPass");
            const mainPassAgeGroup = document.getElementById("mainPassAgeGroup");

            mainPass.textContent = trip.bookedTripJson.user.firstName + " " + trip.bookedTripJson.user.lastName;
            mainPassAgeGroup.textContent = trip.bookedTripJson.user.ageGroup;

            const passenger = document.getElementById("passengerList");
            const passengerList = trip.bookedTripJson.user.passengers;
            if (passengerList.length > 0) {
                passenger.innerHTML = passengerList.map(p => `<li> <span>${p.firstName} ${p.lastName}</span>, <span>${p.ageGroup}</span></li>`).join("");
            }

            // PAYMENT METHOD
            const paymentMethod = document.getElementById("paymentMethod");
            const checkPaymentMethod = trip.bookedTripJson.paymentMethod;
            const maya = document.getElementById("maya");
            const gcash = document.getElementById("gcash");

            if (checkPaymentMethod == "gcash") {
                paymentMethod.textContent = "Gcash";
                gcash.classList.remove("hide");
            } else if (checkPaymentMethod == "maya") {
                paymentMethod.textContent = "PayMaya"
                maya.classList.remove("hide");
            }

            // INSERT DATA INTO DATABASE
            // MAIN PASSENGER JSON
            const mainPassengerJson = {
                email: trip.bookedTripJson.user.email,
                mobile: trip.bookedTripJson.user.mobile,
                firstName: trip.bookedTripJson.user.firstName,
                lastName: trip.bookedTripJson.user.lastName,
                ageGroup: trip.bookedTripJson.user.ageGroup,
                birthDate: new Date(trip.bookedTripJson.user.birthDate).toISOString()
            }

            console.log(mainPassengerJson);

            fetch("/Home/SendMainPass", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mainPassengerJson)
            }).then(res => res.json())
            .then(data => {
                console.log(data.message);
                let passengerId = data.passId;

                // USER ID
                let userId = passengerId; // The ID of the passenger is same as the user ID 
                console.log(passengerId); // REMOVE THIS

                 // VALIDATION FOR PASSENGER
                const noOfPass = trip.bookedTripJson.passengerNo.adults + trip.bookedTripJson.passengerNo.children + trip.bookedTripJson.passengerNo.seniors;
                if (noOfPass > 1) {
                    // LOOP ALL OF THE PASSENGER
                    const passenger = {
                        passengerId: passengerId,
                        passengers: trip.bookedTripJson.user.passengers
                    }

                    console.log(passenger);

                    fetch("/Home/SendPassenger", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(passenger)
                    }).then(res => res.json())
                    .then(data => {
                        console.log(data.message);
                    })
                    .catch(err => console.log(err));
                }

                // BOOKED TRIP JSON
                const bookedTripJson = {
                    ticketNo: trip.bookedTripJson.ticketNo,
                    passengerNo: noOfPass,
                    userId: userId,
                    tripId: trip.tripId,
                    insuranceType: trip.bookedTripJson.insuranceType,
                    paymentMethod: trip.bookedTripJson.paymentMethod,
                    totalPrice: trip.bookedTripJson.totalPrice
                }

                console.log(bookedTripJson); // REMOVE THIS

                fetch("/Home/SendBookedTrip", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bookedTripJson)
                }).then(res => res.json())
                .then(data => {
                    console.log(data.message);
                })
                .catch(err => console.log(err));

                // DISPLAY DATEBOOKED
                const sendDate = {
                    TicketNo: trip.bookedTripJson.ticketNo
                }

                fetch("/Home/GetDateBooked", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(sendDate)
                }).then(res => res.json())
                .then(data => {
                    dateBooked.forEach(d => {
                        const date = new Date(data.date);
                        const formattedDate = date.toLocaleString("en-CA", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true
                        });
                        d.textContent = formattedDate;
                    });
                })
                .catch(err => console.log(err));
            })  
            .catch(err => console.log(err));


            // SUCCESS POP UP
            popUpCon.classList.toggle("show");
            successPayPopUp = document.getElementById("successPayPopUp");

            successPayPopUp.classList.toggle("show");


            // QR CODE
            const qrCode = document.getElementById("qrCode");

            qrCode.addEventListener("click", () => {
                receiptPopUp = document.getElementById("receiptPopUp");

                popUpCon.classList.toggle("show");
                receiptPopUp.classList.toggle("show");
            });

            // CLOSE FUNCTION
            closeBtn.addEventListener("click", () => {
                popUpCon.classList.remove("show");

                if (page.textContent.toLowerCase() === "receipt") {
                    successPayPopUp.classList.remove("show");
                    receiptPopUp.classList.remove("show");
                }
            });
        }

        // QR
        if (page.textContent.toLowerCase() === "receipt") {
        }


    popUpCon.addEventListener("click", () => {
        popUpCon.classList.remove("show");
        popUpAlert.classList.remove("show");
        if (page.textContent.toLowerCase() === "itinerary") {  
            busPicInsidePopUp.classList.remove("show");
            busPicOutsidePopUp.classList.remove("show");
        }

        if (page.textContent.toLowerCase() === "receipt") {
            successPayPopUp.classList.remove("show");
            receiptPopUp.classList.remove("show");
        }
    });
}

function timer() {
    // TIMER
    const bookingTimer = document.getElementById("bookingTimer");
    if (!bookingTimer) return;
    let time = 30 * 60 * 1000;

    let timer = localStorage.getItem("bookingTimer"); 

    if (!timer) {
        timer = Date.now() + time;
        localStorage.setItem("bookingTimer", timer);
    } else {
        timer = Number(timer);
    }

    let interval = setInterval(() => {
        let remTime = timer - Date.now();

        if (remTime <= 0) {
            clearInterval(interval);
            localStorage.removeItem("bookingTimer");
            bookingTimer.textContent = "00:00:00";

            console.log("Booking expired!!!");
            return window.location.href = "/Home/Main";
        }

        const minutes = Math.floor(remTime / 1000 / 60);
        const seconds = Math.floor((remTime / 1000) % 60);

        bookingTimer.textContent = "00:" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

    }, 1000);
}

