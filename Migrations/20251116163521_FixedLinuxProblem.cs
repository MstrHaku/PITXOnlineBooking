using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PITXOnlineBooking.Migrations
{
    /// <inheritdoc />
    public partial class FixedLinuxProblem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable (
                name: "Trip",
                newName: "trip"
            );

            migrationBuilder.RenameTable (
                name: "User",
                newName: "user"
            );

            migrationBuilder.RenameTable (
                name: "PayMaya",
                newName: "paymaya"
            );

            migrationBuilder.RenameTable (
                name: "Passenger",
                newName: "passenger"
            );

            migrationBuilder.RenameTable (
                name: "Insurance",
                newName: "insurance"
            );

            migrationBuilder.RenameTable (
                name: "GCash",
                newName: "gcash"
            );

            migrationBuilder.RenameTable (
                name: "BusTrip",
                newName: "bustrip"
            );

            migrationBuilder.RenameTable (
                name: "Bus",
                newName: "bus"
            );

            migrationBuilder.RenameTable (
                name: "BookedTrip",
                newName: "bookedtrip"
            );

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Trip",
                table: "Trip");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PayMaya",
                table: "PayMaya");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Passenger",
                table: "Passenger");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Insurance",
                table: "Insurance");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GCash",
                table: "GCash");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BusTrip",
                table: "BusTrip");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Bus",
                table: "Bus");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BookedTrip",
                table: "BookedTrip");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "user");

            migrationBuilder.RenameTable(
                name: "Trip",
                newName: "trip");

            migrationBuilder.RenameTable(
                name: "PayMaya",
                newName: "paymaya");

            migrationBuilder.RenameTable(
                name: "Passenger",
                newName: "passenger");

            migrationBuilder.RenameTable(
                name: "Insurance",
                newName: "insurance");

            migrationBuilder.RenameTable(
                name: "GCash",
                newName: "gcash");

            migrationBuilder.RenameTable(
                name: "BusTrip",
                newName: "bustrip");

            migrationBuilder.RenameTable(
                name: "Bus",
                newName: "bus");

            migrationBuilder.RenameTable(
                name: "BookedTrip",
                newName: "bookedtrip");

            migrationBuilder.RenameColumn(
                name: "PassengersId",
                table: "user",
                newName: "passengersid");

            migrationBuilder.RenameColumn(
                name: "Mobile",
                table: "user",
                newName: "mobile");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "user",
                newName: "lastname");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "user",
                newName: "firstname");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "user",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "user",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "BirthDate",
                table: "user",
                newName: "birthdate");

            migrationBuilder.RenameColumn(
                name: "AgeGroup",
                table: "user",
                newName: "agegroup");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "user",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "TripNo",
                table: "trip",
                newName: "tripno");

            migrationBuilder.RenameColumn(
                name: "TripDate",
                table: "trip",
                newName: "tripdate");

            migrationBuilder.RenameColumn(
                name: "TotalTripTime",
                table: "trip",
                newName: "totaltriptime");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "trip",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "Gate",
                table: "trip",
                newName: "gate");

            migrationBuilder.RenameColumn(
                name: "Destination",
                table: "trip",
                newName: "destination");

            migrationBuilder.RenameColumn(
                name: "DepartureTime",
                table: "trip",
                newName: "departuretime");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "trip",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "BusTripId",
                table: "trip",
                newName: "bustripid");

            migrationBuilder.RenameColumn(
                name: "Bay",
                table: "trip",
                newName: "bay");

            migrationBuilder.RenameColumn(
                name: "ArrivalTime",
                table: "trip",
                newName: "arrivaltime");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "trip",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "paymaya",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "AvailBalance",
                table: "paymaya",
                newName: "availbalance");

            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "paymaya",
                newName: "amount");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "paymaya",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "passenger",
                newName: "lastname");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "passenger",
                newName: "firstname");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "passenger",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "BirthDate",
                table: "passenger",
                newName: "birthdate");

            migrationBuilder.RenameColumn(
                name: "AgeGroup",
                table: "passenger",
                newName: "agegroup");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "passenger",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "insurance",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "Package",
                table: "insurance",
                newName: "package");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "insurance",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "insurance",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "gcash",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "AvailableBalance",
                table: "gcash",
                newName: "availablebalance");

            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "gcash",
                newName: "amount");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "gcash",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "TripPrice",
                table: "bustrip",
                newName: "tripprice");

            migrationBuilder.RenameColumn(
                name: "TotalTripTime",
                table: "bustrip",
                newName: "totaltriptime");

            migrationBuilder.RenameColumn(
                name: "Destination",
                table: "bustrip",
                newName: "destination");

            migrationBuilder.RenameColumn(
                name: "Departure",
                table: "bustrip",
                newName: "departure");

            migrationBuilder.RenameColumn(
                name: "BusId",
                table: "bustrip",
                newName: "busid");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "bustrip",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Type",
                table: "bus",
                newName: "type");

            migrationBuilder.RenameColumn(
                name: "Operator",
                table: "bus",
                newName: "operator");

            migrationBuilder.RenameColumn(
                name: "ImgOutside",
                table: "bus",
                newName: "imgoutside");

            migrationBuilder.RenameColumn(
                name: "ImgInside",
                table: "bus",
                newName: "imginside");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "bus",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "BusLogo",
                table: "bus",
                newName: "buslogo");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "bus",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "bookedtrip",
                newName: "userid");

            migrationBuilder.RenameColumn(
                name: "TripId",
                table: "bookedtrip",
                newName: "tripid");

            migrationBuilder.RenameColumn(
                name: "TotalPrice",
                table: "bookedtrip",
                newName: "totalprice");

            migrationBuilder.RenameColumn(
                name: "TicketNo",
                table: "bookedtrip",
                newName: "ticketno");

            migrationBuilder.RenameColumn(
                name: "PaymentMethod",
                table: "bookedtrip",
                newName: "paymentmethod");

            migrationBuilder.RenameColumn(
                name: "PassengerNo",
                table: "bookedtrip",
                newName: "passengerno");

            migrationBuilder.RenameColumn(
                name: "InsuranceType",
                table: "bookedtrip",
                newName: "insurancetype");

            migrationBuilder.RenameColumn(
                name: "DateBooked",
                table: "bookedtrip",
                newName: "datebooked");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "bookedtrip",
                newName: "createdat");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "bookedtrip",
                newName: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_user",
                table: "user",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_trip",
                table: "trip",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_paymaya",
                table: "paymaya",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_passenger",
                table: "passenger",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_insurance",
                table: "insurance",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_gcash",
                table: "gcash",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_bustrip",
                table: "bustrip",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_bus",
                table: "bus",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_bookedtrip",
                table: "bookedtrip",
                column: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_user",
                table: "user");

            migrationBuilder.DropPrimaryKey(
                name: "PK_trip",
                table: "trip");

            migrationBuilder.DropPrimaryKey(
                name: "PK_paymaya",
                table: "paymaya");

            migrationBuilder.DropPrimaryKey(
                name: "PK_passenger",
                table: "passenger");

            migrationBuilder.DropPrimaryKey(
                name: "PK_insurance",
                table: "insurance");

            migrationBuilder.DropPrimaryKey(
                name: "PK_gcash",
                table: "gcash");

            migrationBuilder.DropPrimaryKey(
                name: "PK_bustrip",
                table: "bustrip");

            migrationBuilder.DropPrimaryKey(
                name: "PK_bus",
                table: "bus");

            migrationBuilder.DropPrimaryKey(
                name: "PK_bookedtrip",
                table: "bookedtrip");

            migrationBuilder.RenameTable(
                name: "user",
                newName: "User");

            migrationBuilder.RenameTable(
                name: "trip",
                newName: "Trip");

            migrationBuilder.RenameTable(
                name: "paymaya",
                newName: "PayMaya");

            migrationBuilder.RenameTable(
                name: "passenger",
                newName: "Passenger");

            migrationBuilder.RenameTable(
                name: "insurance",
                newName: "Insurance");

            migrationBuilder.RenameTable(
                name: "gcash",
                newName: "GCash");

            migrationBuilder.RenameTable(
                name: "bustrip",
                newName: "BusTrip");

            migrationBuilder.RenameTable(
                name: "bus",
                newName: "Bus");

            migrationBuilder.RenameTable(
                name: "bookedtrip",
                newName: "BookedTrip");

            migrationBuilder.RenameColumn(
                name: "passengersid",
                table: "User",
                newName: "PassengersId");

            migrationBuilder.RenameColumn(
                name: "mobile",
                table: "User",
                newName: "Mobile");

            migrationBuilder.RenameColumn(
                name: "lastname",
                table: "User",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "firstname",
                table: "User",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "User",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "User",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "birthdate",
                table: "User",
                newName: "BirthDate");

            migrationBuilder.RenameColumn(
                name: "agegroup",
                table: "User",
                newName: "AgeGroup");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "User",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "tripno",
                table: "Trip",
                newName: "TripNo");

            migrationBuilder.RenameColumn(
                name: "tripdate",
                table: "Trip",
                newName: "TripDate");

            migrationBuilder.RenameColumn(
                name: "totaltriptime",
                table: "Trip",
                newName: "TotalTripTime");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "Trip",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "gate",
                table: "Trip",
                newName: "Gate");

            migrationBuilder.RenameColumn(
                name: "destination",
                table: "Trip",
                newName: "Destination");

            migrationBuilder.RenameColumn(
                name: "departuretime",
                table: "Trip",
                newName: "DepartureTime");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "Trip",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "bustripid",
                table: "Trip",
                newName: "BusTripId");

            migrationBuilder.RenameColumn(
                name: "bay",
                table: "Trip",
                newName: "Bay");

            migrationBuilder.RenameColumn(
                name: "arrivaltime",
                table: "Trip",
                newName: "ArrivalTime");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Trip",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "PayMaya",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "availbalance",
                table: "PayMaya",
                newName: "AvailBalance");

            migrationBuilder.RenameColumn(
                name: "amount",
                table: "PayMaya",
                newName: "Amount");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "PayMaya",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "lastname",
                table: "Passenger",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "firstname",
                table: "Passenger",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "Passenger",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "birthdate",
                table: "Passenger",
                newName: "BirthDate");

            migrationBuilder.RenameColumn(
                name: "agegroup",
                table: "Passenger",
                newName: "AgeGroup");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Passenger",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "Insurance",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "package",
                table: "Insurance",
                newName: "Package");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "Insurance",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Insurance",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "GCash",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "availablebalance",
                table: "GCash",
                newName: "AvailableBalance");

            migrationBuilder.RenameColumn(
                name: "amount",
                table: "GCash",
                newName: "Amount");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "GCash",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "tripprice",
                table: "BusTrip",
                newName: "TripPrice");

            migrationBuilder.RenameColumn(
                name: "totaltriptime",
                table: "BusTrip",
                newName: "TotalTripTime");

            migrationBuilder.RenameColumn(
                name: "destination",
                table: "BusTrip",
                newName: "Destination");

            migrationBuilder.RenameColumn(
                name: "departure",
                table: "BusTrip",
                newName: "Departure");

            migrationBuilder.RenameColumn(
                name: "busid",
                table: "BusTrip",
                newName: "BusId");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "BusTrip",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "type",
                table: "Bus",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "operator",
                table: "Bus",
                newName: "Operator");

            migrationBuilder.RenameColumn(
                name: "imgoutside",
                table: "Bus",
                newName: "ImgOutside");

            migrationBuilder.RenameColumn(
                name: "imginside",
                table: "Bus",
                newName: "ImgInside");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "Bus",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "buslogo",
                table: "Bus",
                newName: "BusLogo");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Bus",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "userid",
                table: "BookedTrip",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "tripid",
                table: "BookedTrip",
                newName: "TripId");

            migrationBuilder.RenameColumn(
                name: "totalprice",
                table: "BookedTrip",
                newName: "TotalPrice");

            migrationBuilder.RenameColumn(
                name: "ticketno",
                table: "BookedTrip",
                newName: "TicketNo");

            migrationBuilder.RenameColumn(
                name: "paymentmethod",
                table: "BookedTrip",
                newName: "PaymentMethod");

            migrationBuilder.RenameColumn(
                name: "passengerno",
                table: "BookedTrip",
                newName: "PassengerNo");

            migrationBuilder.RenameColumn(
                name: "insurancetype",
                table: "BookedTrip",
                newName: "InsuranceType");

            migrationBuilder.RenameColumn(
                name: "datebooked",
                table: "BookedTrip",
                newName: "DateBooked");

            migrationBuilder.RenameColumn(
                name: "createdat",
                table: "BookedTrip",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "BookedTrip",
                newName: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Trip",
                table: "Trip",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PayMaya",
                table: "PayMaya",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Passenger",
                table: "Passenger",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Insurance",
                table: "Insurance",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GCash",
                table: "GCash",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BusTrip",
                table: "BusTrip",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Bus",
                table: "Bus",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BookedTrip",
                table: "BookedTrip",
                column: "Id");
        }
    }
}
