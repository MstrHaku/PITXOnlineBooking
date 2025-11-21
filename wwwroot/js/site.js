console.log("This is PITX");

// BOOKING 
const destinationInput = document.getElementById("destinationInput");
let destinationInputPopUp;

if (destinationInput) {
    destinationInput.addEventListener("click", () => {
        destinationInputPopUp = document.getElementById("destinationInputPopUp");

        destinationInputPopUp.classList.toggle("show");
    });

    // DESTINATION
    const destinationPopUpItems = document.getElementById("destinationList");
    const placeholder = document.getElementById("placeholderDestination");
    const destinationCity = document.getElementById("destinationCity");
    const destinationProvince = document.getElementById("destinationProvince");

    // IF EVER NA MAAGA MATAPOS, TRY REFACTORING THIS PART, KASI MAY BUTAS TO, ANG MANGYAYARI KASI IGEGET NATEN UNG DESTINATION BASE DUN SA <span> WHICH IS EDITABLE THROUGH
    // THE DOM, SO MEANING POSSIBLE NA MA EDIT NI USER ANG CONTENT NA ISESEND SA BACK-END, ALWAYS RELY ON THE BACK END FOR DISPLAYING DATA THAT WILL ALSO BE STORED IN THE
    // DATABASE 

    destinationPopUpItems.addEventListener("click", (e) => {
        const clickedLi = e.target.closest("li");
        if (!clickedLi) return;

        const firstLi = destinationPopUpItems.querySelector("li:first-child");
        if (clickedLi === firstLi) return;

        destinationPopUpItems.insertBefore(clickedLi, firstLi);

        destinationPopUpItems.querySelectorAll("li").forEach((li, index) => {
            const img = li.querySelector(".pinPoint img");
            img.src = index === 0 ? "/icons/locationRed.svg" : "/icons/location.svg";
        });

        const getFirstLi = destinationPopUpItems.querySelector("li:first-child");
        const locationName = getFirstLi.querySelector("span").textContent;

        destinationCity.textContent = locationName;
        if (locationName.toLowerCase() === "baguio") {
            destinationCity.textContent = "Benguet";
            destinationProvince.textContent = locationName;
        } else {
            destinationProvince.textContent = "Bicol";
        }

        placeholder.placeholder = locationName;
        destinationInput.textContent = locationName;
    });

    // DATE TODAY
    const todayDate = new Date();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);

    // TODAY AND TOMORROW
    const today = todayDate.toLocaleDateString("en-CA");
    const tomorrow = tomorrowDate.toLocaleDateString("en-CA");
    let datePicked;

    console.log("Todays Date: ", today);

    // DESTINATION VARIABLE GLOBAL  
    let destination = destinationInput.textContent;

    // REDIRECT FUNCTION
    function bookRequest(tripId) {
        fetch("/Home/RedirectToItinerary", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ TripId: tripId })
        }).then(response => response.json())
        .then(data => {
            window.location.href = data.redirectUrl;
        })
        .catch(err => console.error(err));
    }

    // TRANSFER DESTINATION DATA TO THE HIDDEN INPUT
    const checkTripsBtn = document.getElementById("checkTripsBtn");
    checkTripsBtn.addEventListener("click", (e) => {
        e.preventDefault();

        destination = destinationInput.textContent;

        fetch ("/Home/CheckTrip", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ TripDate: datePicked, Destination: destination })
        }).then(response => response.json())
        .then(data => {
            console.log("CHECK TRIP Destination: ", destination, " Trip Date: ", today); // REMOVE THIS
            console.log("Server response: ", data); // REMOVE THIS

            // DATE TIME FUNCTION
            function formatDateTime(dateTime) {
                return new Date(dateTime).toLocaleTimeString([], { timeStyle: "short" });
            }

            function formatTime(time) {
                const [hours, min] = time.split(":");

                return `${parseInt(hours)}h ${parseInt(min)}min`;
            }

            // DISPLAY DATA TO BOOKING
            const bookingBusTripList = document.querySelectorAll(".booking_bus_trip_list");
            bookingBusTripList.forEach(list => {
                list.innerHTML = "";
            });

            data.forEach(trip => {
                const li = document.createElement("li");

                li.innerHTML = 
                `
                    <div class="booking_bus_list">
                        <div class="booking_info_con">
                            <div class="booking_info">
                                <div class="booking_info_departure">
                                    <p class="time">${formatDateTime(trip.departureTime)}</p>
                                    <p>Paranaque Integrated Terminal Exchange</p>
                                </div>

                                <div class="booking_info_bus_info">
                                    <div class="booking_info_bus_logo">
                                        <img src="${trip.busLogo}" alt="dltbLogo">
                                    </div>

                                    <div class="booking_info_bus_icon">
                                        <img src="/icons/bus.svg" alt="bus">
                                    </div>

                                    <div class="trip_info">
                                        <p>${formatTime(trip.totalTripTime)} | ${trip.operator} | Bus | <span>${trip.type}</span></p>
                                    </div>
                                </div>

                                <div class="booking_info_destination">
                                    <p class="time">${formatDateTime(trip.arrivalTime)}</p>
                                    <p>${trip.destination}</p>
                                </div>
                            </div>

                            <div class="bus_pic_con">
                                <div class="busPic" id="busInsideBookingList">
                                    <img src="${trip.imgInside}" alt="insideBus">
                                </div>

                                <div class="busPic" id="busOutsideBookingList">
                                    <img src="${trip.imgOutside}" alt="bus">
                                </div>
                            </div>
                        </div>

                        <div class="redLine"></div>

                        <div class="booking_price_con">
                            <div class="booking_price_con_info"> 
                                <p class="price">₱${Number(trip.price).toLocaleString("en-US")}</p>
                                <p>Taxes Included | per adult</p>
                            </div>
                            
                            <div class="bus_trip_book_btn_con">
                                <button class="book_btn" data-id="${trip.tripId}">Book Now!</button>
                            </div>
                        </div>  
                    </div>
                `;

                bookingBusTripList.forEach(list => {
                    list.appendChild(li.cloneNode(true));
                });
            });

        })
        .catch(err => console.error(err));
    });

    // MODAL DATE
    const bookingModalDateCon = document.querySelector(".booking_modal_date_con");

    function calendarBuilder(date) {
        bookingModalDateCon.innerHTML = "";
        for (let i = 0; i <7; i++) {
            const d = new Date(date);
            d.setDate(date.getDate() + i);
            
            const dISO = d.toLocaleDateString("en-CA");
        
            const li  = document.createElement("li");
            li.setAttribute("data-date", dISO);
            
            const btn = document.createElement("button");
            const weekday = d.toLocaleDateString(undefined, { weekday: "short" }); 
            const dayMonth = d.toLocaleDateString(undefined, { day: "numeric", month: "short"});

            btn.innerHTML = `
                <div class="date_con">
                    <p>${weekday}</p>
                    <p>${dayMonth}</p>
                </div>
            `;

            if (dISO === today)  {
                btn.classList.add("today", "chosen");
                btn.textContent = "Today";
            } 

            if (dISO === tomorrow) {
                btn.classList.add("tomorrow");
                btn.textContent = "Tomorrow";
            }

            btn.addEventListener("click", () => {
                selectDate(d);

                bookingModalDateCon.querySelectorAll("button").forEach(b => {
                    b.classList.remove("chosen");
                });

                btn.classList.add("chosen");
            });

            li.appendChild(btn);
            bookingModalDateCon.appendChild(li);
        }
    }

    function selectDate(date) {
        datePicked = date.toLocaleDateString("en-CA");

        const errorBookingBus = document.querySelector(".error_booking_bus");
        console.log("date picked: ", datePicked, " today: ", today);
        if (datePicked == today) {
            errorBookingBus.classList.add("show");
        } else {
            errorBookingBus.classList.remove("show");
        }

        // METHOD POST TO BACK-END AND UPDATE THE LIST BASED ON THE DATE
        fetch("/Home/CheckTrip", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ TripDate: datePicked, Destination: destination })
        }).then(response => response.json())
        .then(data => {
            console.log("DATE SELECTION select date: ", datePicked, " Destination: ", destination); // REMOVE THIS
            console.log("Server response :", data); // REMOVE THIS

            // PUT THE UPDATED LIST HERE
            // DATE TIME FUNCTION
            function formatDateTime(dateTime) {
                return new Date(dateTime).toLocaleTimeString([], { timeStyle: "short" });
            }

            function formatTime(time) {
                const [hours, min] = time.split(":");

                return `${parseInt(hours)}h ${parseInt(min)}min`;
            }

            // DISPLAY DATA TO BOOKING
            const bookingBusTripList = document.querySelectorAll(".booking_bus_trip_list");
            bookingBusTripList.forEach(list => {
                list.innerHTML = "";
            });

            data.forEach(trip => {
                const li = document.createElement("li");

                li.innerHTML = 
                `
                    <div class="booking_bus_list">
                        <div class="booking_info_con">
                            <div class="booking_info">
                                <div class="booking_info_departure">
                                    <p class="time">${formatDateTime(trip.departureTime)}</p>
                                    <p>Paranaque Integrated Terminal Exchange</p>
                                </div>

                                <div class="booking_info_bus_info">
                                    <div class="booking_info_bus_logo">
                                        <img src="${trip.busLogo}" alt="dltbLogo">
                                    </div>

                                    <div class="booking_info_bus_icon">
                                        <img src="/icons/bus.svg" alt="bus">
                                    </div>

                                    <div class="trip_info">
                                        <p>${formatTime(trip.totalTripTime)} | ${trip.operator} | Bus | <span>${trip.type}</span></p>
                                    </div>
                                </div>

                                <div class="booking_info_destination">
                                    <p class="time">${formatDateTime(trip.arrivalTime)}</p>
                                    <p>${trip.destination}</p>
                                </div>
                            </div>

                            <div class="bus_pic_con">
                                <div class="busPic" id="busInsideBookingList">
                                    <img src="${trip.imgInside}" alt="insideBus">
                                </div>

                                <div class="busPic" id="busOutsideBookingList">
                                    <img src="${trip.imgOutside}" alt="bus">
                                </div>
                            </div>
                        </div>

                        <div class="redLine"></div>

                        <div class="booking_price_con">
                            <div class="booking_price_con_info"> 
                                <p class="price">₱${Number(trip.price).toLocaleString("en-US")}</p>
                                <p>Taxes Included | per adult</p>
                            </div>
                            
                            <div class="bus_trip_book_btn_con">
                                <button class="book_btn" data-id="${trip.tripId}">Book Now!</button>
                            </div>
                        </div>  
                    </div>
                `;

                bookingBusTripList.forEach(list => {
                    list.appendChild(li.cloneNode(true));
                });
            });

        })
        .catch(err => console.error("Error:", err));

        console.log("Chosen Date: ", datePicked);
    }

    calendarBuilder(todayDate);

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("book_btn")) {
            console.log("Book btn clicked");
            const tripId = e.target.dataset.id;
            bookRequest(tripId);
        }
    });
}

// LIVE BUS SCHEDULE
const liveSchedDate = document.getElementById("liveSchedDate");
updateLiveSched();
setInterval(updateLiveSched, 1000);



// AUTOMATE LIVE BUS SCHEDULE
const today = new Date();
const localTime = new Date(today.getTime() - today.getTimezoneOffset()*60000).toISOString().slice(0, 19);
console.log(localTime); // REMOVE THIS

const payload = {
    arrivalTime: localTime
}

fetch("/Home/SendTrip", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
}).then(res => res.json())
.then(data => {
    console.log(data.message);
    console.log(data.tripData);

    const timeCol = document.getElementById("timeCol");
    const destinationCol = document.getElementById("destinationCol");
    const operatorCol = document.getElementById("operatorCol");
    const gateCol = document.getElementById("gateCol");
    const bayCol = document.getElementById("bayCol");
    const tripCol = document.getElementById("tripCol");
    const statusCol = document.getElementById("statusCol");

    data.tripData.forEach(row => {
        const date = new Date(row.time);
        const time = date.toLocaleTimeString("en-CA", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });

        const statusList = ["DELAYED", "ARRIVED", "CANCELLED", "UNLOADING", "LOADING", "DEPARTED", "BOARDING"];
        const ran = Math.floor(Math.random() * 7);
        const status = statusList[ran];

        timeCol.innerHTML += `<div class="td">${time}</div>`;
        destinationCol.innerHTML += `<div class="td">${row.destination}</div>`;
        operatorCol.innerHTML += `<div class="td">${row.operator}</div>`;
        gateCol.innerHTML += `<div class="td">${row.gate}</div>`;
        bayCol.innerHTML += `<div class="td">${row.bay}</div>`;
        tripCol.innerHTML += `<div class="td">${row.tripNo}</div>`;
        statusCol.innerHTML += `<div class="td status ${status.toLowerCase()}">${status}</div>`;
    });
})
.catch(err => console.log(err));



// FUNCTIONS
function updateLiveSched() {
    const today = new Date();
    let formatToday = today.toLocaleString("en-CA", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
    liveSchedDate.textContent = formatToday;
}

