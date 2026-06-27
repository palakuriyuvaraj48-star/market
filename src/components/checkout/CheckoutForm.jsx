import { useForm } from "react-hook-form";

export const CheckoutForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "Yuva FreshMart",
      phone: "9876543210",
      address: "221B Green Avenue, Bengaluru",
      pin: "560001",
      payment: "UPI"
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-xl p-5">
      <h2 className="text-xl font-extrabold">Delivery Address</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {[
          ["name", "Full name"],
          ["phone", "Phone"],
          ["pin", "PIN code"]
        ].map(([id, label]) => (
          <label className="text-sm font-bold" key={id}>
            {label}
            <input
              {...register(id, { required: true })}
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 outline-none focus:border-fresh-500 dark:border-white/10 dark:bg-white/10"
            />
            {errors[id] && <span className="text-xs text-rose-600">Required</span>}
          </label>
        ))}
        <label className="text-sm font-bold sm:col-span-2">
          Address
          <textarea
            {...register("address", { required: true })}
            className="mt-2 min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 outline-none focus:border-fresh-500 dark:border-white/10 dark:bg-white/10"
          />
        </label>
      </div>
      <h2 className="mt-6 text-xl font-extrabold">Payment Method</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {["UPI", "Card", "Cash"].map((payment) => (
          <label className="glass flex items-center gap-2 rounded-lg p-3 text-sm font-bold" key={payment}>
            <input type="radio" value={payment} {...register("payment")} className="accent-fresh-600" />
            {payment}
          </label>
        ))}
      </div>
      <button className="btn-primary mt-6 w-full" type="submit">Place Order</button>
    </form>
  );
};
