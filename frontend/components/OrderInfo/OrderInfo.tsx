"use client";

import { orderSchema, OrderSchemaType } from "@/utils/orderSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

export default function OrderInfo() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderSchemaType>({
    resolver: zodResolver(orderSchema),
    mode: "all",
  });

  const onSubmit = async (data: OrderSchemaType) => {
    console.log("Order Data:", data);
    // Тут буде твій запит до API
    reset();
    alert("Order confirmed!");
  };

  return (
    <>
      <div className="flex-1 h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" h-full  rounded-2xl bg-amber-600 text-black flex flex-col gap-2 p-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              className="border p-2 rounded-lg active:outline-none focus:outline-none "
              {...register("name")}
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          {errors.name && <p className="text-black">{errors.name.message}</p>}

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              className="border p-2 rounded-lg active:outline-none focus:outline-none "
              {...register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          {errors.email && <p className="text-black">{errors.email.message}</p>}

          <div className="flex flex-col gap-1">
            <label htmlFor="phone">Phone:</label>
            <input
              className="border p-2 rounded-lg active:outline-none focus:outline-none "
              {...register("phone")}
              type="number"
              id="phone"
              placeholder="Enter your phone"
            />
          </div>

          {errors.phone && <p className="text-black">{errors.phone.message}</p>}

          <div className="flex flex-col gap-1">
            <label htmlFor="address">Address:</label>
            <input
              className="border p-2 rounded-lg active:outline-none focus:outline-none "
              {...register("address")}
              type="text"
              id="address"
              placeholder="Enter your address"
            />
          </div>
          {errors.address && (
            <p className="text-black">{errors.address.message}</p>
          )}
          <button
            type="submit"
            className="text-xl w-full px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition cursor-pointer"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
