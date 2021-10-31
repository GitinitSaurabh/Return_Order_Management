﻿// <auto-generated />
using System;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Data.Migrations
{
    [DbContext(typeof(RomDbContext))]
    partial class RomDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.11");

            modelBuilder.Entity("Core.Entities.Billing", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CreditCardNumber")
                        .HasColumnType("TEXT");

                    b.Property<string>("CreditLimit")
                        .HasColumnType("TEXT");

                    b.Property<int>("ProcessResponseId")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("ProcessResponseId");

                    b.ToTable("Billings");
                });

            modelBuilder.Entity("Core.Entities.DefectiveComponentDetail", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ComponentName")
                        .HasColumnType("TEXT");

                    b.Property<string>("ComponentType")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Quantity")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("DefectiveComponentDetails");
                });

            modelBuilder.Entity("Core.Entities.ProcessRequest", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ContactNumber")
                        .HasColumnType("TEXT");

                    b.Property<int>("DefectiveComponentDetailId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.HasIndex("DefectiveComponentDetailId");

                    b.ToTable("ProcessRequests");
                });

            modelBuilder.Entity("Core.Entities.ProcessResponse", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateOfDelivery")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("PackagingAndDeliveryCharge")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("ProcessingCharge")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("ProcessResponse");
                });

            modelBuilder.Entity("Core.Entities.Billing", b =>
                {
                    b.HasOne("Core.Entities.ProcessResponse", "ProcessResponse")
                        .WithMany()
                        .HasForeignKey("ProcessResponseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ProcessResponse");
                });

            modelBuilder.Entity("Core.Entities.ProcessRequest", b =>
                {
                    b.HasOne("Core.Entities.DefectiveComponentDetail", "ComponentDetail")
                        .WithMany()
                        .HasForeignKey("DefectiveComponentDetailId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ComponentDetail");
                });
#pragma warning restore 612, 618
        }
    }
}