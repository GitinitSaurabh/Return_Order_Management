using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Infrastructure.Data.Migrations
{
    public partial class PostGresinitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DefectiveComponentDetails",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ComponentType = table.Column<string>(type: "text", nullable: true),
                    ComponentName = table.Column<string>(type: "text", nullable: true),
                    Quantity = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DefectiveComponentDetails", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ProcessRequests",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserName = table.Column<string>(type: "text", nullable: true),
                    ContactNumber = table.Column<string>(type: "text", nullable: true),
                    ComponentDetailId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProcessRequests", x => x.id);
                    table.ForeignKey(
                        name: "FK_ProcessRequests_DefectiveComponentDetails_ComponentDetailId",
                        column: x => x.ComponentDetailId,
                        principalTable: "DefectiveComponentDetails",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProcessResponse",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ProcessingCharge = table.Column<decimal>(type: "numeric", nullable: false),
                    PackagingAndDeliveryCharge = table.Column<decimal>(type: "numeric", nullable: false),
                    DateOfDelivery = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    ProcessRequestId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProcessResponse", x => x.id);
                    table.ForeignKey(
                        name: "FK_ProcessResponse_ProcessRequests_ProcessRequestId",
                        column: x => x.ProcessRequestId,
                        principalTable: "ProcessRequests",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Billings",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ProcessResponseId = table.Column<int>(type: "integer", nullable: false),
                    CreditCardNumber = table.Column<string>(type: "text", nullable: true),
                    CreditLimit = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Billings", x => x.id);
                    table.ForeignKey(
                        name: "FK_Billings_ProcessResponse_ProcessResponseId",
                        column: x => x.ProcessResponseId,
                        principalTable: "ProcessResponse",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Billings_ProcessResponseId",
                table: "Billings",
                column: "ProcessResponseId");

            migrationBuilder.CreateIndex(
                name: "IX_ProcessRequests_ComponentDetailId",
                table: "ProcessRequests",
                column: "ComponentDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_ProcessResponse_ProcessRequestId",
                table: "ProcessResponse",
                column: "ProcessRequestId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Billings");

            migrationBuilder.DropTable(
                name: "ProcessResponse");

            migrationBuilder.DropTable(
                name: "ProcessRequests");

            migrationBuilder.DropTable(
                name: "DefectiveComponentDetails");
        }
    }
}
