using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PITXOnlineBooking.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedPassengerTableAddedPassId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PassengerId",
                table: "Passenger",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PassengerId",
                table: "Passenger");
        }
    }
}
