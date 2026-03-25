"use client";

import { useCreateOrder } from "@/hooks/useCreateOrder";
import { orderSchema, OrderSchemaType } from "@/utils/orderSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

export default function OrderInfo() {
  const { handleCreateOrder } = useCreateOrder();
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
    try {
      await handleCreateOrder(data);
      alert("Order successfully created!");
      reset();
    } catch (error) {
      alert(`Failed to create order: ${(error as Error).message}`);
    }
  };

  return (
    <>
      <div className="flex-1 h-full w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full rounded-2xl bg-amber-600 text-black flex flex-col gap-3 md:gap-4 p-4 md:p-6 "
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-bold ml-1">
              Name:
            </label>
            <input
              className="border border-black/20 p-3 rounded-lg  "
              {...register("name")}
              type="text"
              id="name"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm font-bold text-red-900 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-bold ml-1">
              Email:
            </label>
            <input
              className="border border-black/20 p-3 rounded-lg "
              {...register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm font-bold text-red-900 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="font-bold ml-1">
              Phone:
            </label>
            <input
              className="border border-black/20 p-3 rounded-lg "
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="Enter your phone"
            />
            {errors.phone && (
              <p className="text-sm font-bold text-red-900 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="font-bold ml-1">
              Address:
            </label>
            <input
              className="border border-black/20 p-3 rounded-lg "
              {...register("address")}
              type="text"
              id="address"
              placeholder="Enter your address"
            />
            {errors.address && (
              <p className="text-sm font-bold text-red-900 mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-xl w-full text-amber-600 px-2 py-3 md:py-2 bg-black rounded-xl cursor-pointer mt-2"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
